import { Component, Inject, Input, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { DirectionService } from '../../../shared/services/direction.service';
import { AbstractControl, FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import {
  ColorFilter,
  ColorFilterItem,
  Filter,
  SerializedFilterValues,
  CheckFilter,
  FilterItem,
  RadioFilter,
} from '../../../shared/interfaces/filter';
import { RootService } from '../../../shared/services/root.service';
import { EMPTY, merge, of, Subject } from 'rxjs';
import { PageCategoryService } from '../../shop/services/page-category.service';
import { distinctUntilChanged, map, skip, takeUntil } from 'rxjs/operators';
import { PageTypeService } from '../../shop/services/page-type.service';
import { Router } from 'express';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IconComponent } from 'src/app/shared/components/icon/icon.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxSliderModule } from 'ngx-slider-v2';

interface FormFilterValues {
  [filterSlug: string]: [number, number] | { [itemSlug: string]: boolean } | string;
}
@Component({
  selector: 'app-widget-items-filters',
  templateUrl: './widget-items-filters.component.html',
  styleUrls: ['./widget-items-filters.component.scss'],
  standalone: true,
  imports: [IconComponent, CommonModule, FormsModule, RouterLink, ReactiveFormsModule, SharedModule, NgxSliderModule]
})
export class WidgetItemsFiltersComponent implements OnInit, OnDestroy {
  @Input() offcanvas: 'always' | 'mobile' = 'mobile';

  destroy$: Subject<void> = new Subject<void>();

  filters: Filter[] = [];
  filtersForm!: UntypedFormGroup;
  isPlatformBrowser = isPlatformBrowser(this.platformId);
  rightToLeft = false;
  storeid: number = 0;
  sliderOptions = {
    animate: false,
    mouseEventsInterval: 10,
    rightToLeft: true, // or false
    floor: 0, // Default minimum value
    ceil: 100, // Default maximum value
    step: 1
  };
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private direction: DirectionService,
    private fb: UntypedFormBuilder,
    public root: RootService,
    public pageCategory: PageTypeService,
    public rout: ActivatedRoute
  ) {
    this.rightToLeft = this.direction.isRTL();
    if (this.rout.snapshot.params.storeid)
      this.storeid = this.rout.snapshot.params.storeid;
    //Console.log(this.storeid);

  }
  printme(aa: any) {
    console.log(aa.category.children);

  }

  getlistchilderen(aa: any) {
    return aa.category.children;
  }
  ngOnInit(): void {
    this.pageCategory.list$.pipe(
      map(x => x?.filters || []),
      takeUntil(this.destroy$),
    ).subscribe(filters => {

      this.filters = filters;
      this.filtersForm = this.makeFiltersForm(filters);
      filters.forEach(filter => {
        //Console.log(filter.type);
        switch (filter.type) {
          case 'range':
            merge(
              of([
                Math.max(filter.value[0], filter.min),
                Math.min(filter.value[1], filter.max)
              ]),
              this.filtersForm.get(filter.slug)?.valueChanges || EMPTY,
            ).pipe(
              distinctUntilChanged((a, b) => a.join('-') === b.join('-')),
              skip(1),
            ).subscribe(filterValue => {
              // console.log(filterValue);
              // console.log(this.filtersForm.value);
              // console.log(filters);

              this.pageCategory.updateOptions({
                filterValues: this.convertFormToFilterValues(filters, {
                  ...this.filtersForm.value,
                  [filter.slug]: filterValue,
                }),
              });
            });
            break;
          case 'radio':
          case 'check':
          case 'color':
            this.filtersForm.get(filter.slug)?.valueChanges.subscribe(filterValue => {
              this.pageCategory.updateOptions({
                filterValues: this.convertFormToFilterValues(filters, {
                  ...this.filtersForm.value,
                  [filter.slug]: filterValue,
                }),
              });
            });
            break;
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  currentIndex: any = 0;
  trackBySlug(index: number, item: { slug: string }): any {
    this.currentIndex = index;
    return item.slug;
  }
  changeindex(ind: number) {
    if (ind == this.currentIndex) {
      this.currentIndex = null;
    } else {
      this.currentIndex = ind;
    }

  }

  makeFiltersForm(filters: Filter[]): UntypedFormGroup {
    const filtersFromGroup: { [key: string]: AbstractControl } = {};
    console.log(filters);
    filters.forEach(filter => {
      switch (filter.type) {
        case 'range': {
          //Console.log(filter.slug);
          filtersFromGroup[filter.slug] = this.fb.control([
            Math.max(filter.value[0], filter.min),
            Math.min(filter.value[1], filter.max)
          ]);
        }

          break;
        case 'radio':
          filtersFromGroup[filter.slug] = this.fb.control(filter.value);
          break;
        case 'check':
        case 'color':
          filtersFromGroup[filter.slug] = this.makeListFilterForm(filter);
          break;
      }
    });

    return this.fb.group(filtersFromGroup);
  }

  makeListFilterForm(filter: CheckFilter | ColorFilter): UntypedFormGroup {
    const group: { [key: string]: AbstractControl } = {};

    filter.items.forEach(item => {
      const control = this.fb.control(filter.value.includes(item.slug));

      // A timeout is needed because sometimes a state change is ignored if performed immediately.
      setTimeout(() => {
        if (this.isItemDisabled(filter, item)) {
          control.disable({ emitEvent: false });
        } else {
          control.enable({ emitEvent: false });
        }
      }, 0);

      group[item.slug] = control;
    });

    return this.fb.group(group);
  }

  isItemDisabled(filter: CheckFilter | RadioFilter | ColorFilter, item: FilterItem | ColorFilterItem): boolean {
    return item.count === 0 && (filter.type === 'radio' || !filter.value.includes(item.slug));
  }

  convertFormToFilterValues(filters: Filter[], formValues: FormFilterValues): SerializedFilterValues {
    const filterValues: SerializedFilterValues = {};

    filters.forEach(filter => {
      const formValue = formValues[filter.slug];

      switch (filter.type) {
        case 'range':

          if (formValue && (formValue[0] !== filter.min || formValue[1] !== filter.max)) {
            filterValues[filter.slug] = `${formValue[0]}-${formValue[1]}`;
          }
          break;
        case 'check':
        case 'color':
          const filterFormValues: { [key: string]: any } = formValue as object || {};

          // Reactive forms do not add a values of disabled checkboxes.
          // This code will add them manually.
          filter.value.forEach(filterValue => {
            if (!(filterValue in filterFormValues)) {
              filterFormValues[filterValue] = true;
            }
          });

          const values = Object.keys(filterFormValues).filter(x => filterFormValues[x]);

          if (values.length > 0) {
            filterValues[filter.slug] = values.join(',');
          }
          break;
        case 'radio':
          if (formValue !== filter.items[0].slug) {
            filterValues[filter.slug] = formValue as string;
          }

          break;
      }
    });

    return filterValues;
  }

  reset(): void {
    const formValues: { [key: string]: any } = {};

    this.filters.forEach(filter => {
      switch (filter.type) {
        case 'range':
          formValues[filter.slug] = [filter.min, filter.max];
          break;
        case 'check':
        case 'color':
          formValues[filter.slug] = {};

          filter.items.forEach(item => {
            formValues[filter.slug][item.slug] = false;
          });
          break;
        case 'radio':
          formValues[filter.slug] = filter.items[0].slug;
          break;
      }
    });

    this.filtersForm.setValue(formValues);
  }

  getRangeControl(filter: Filter): UntypedFormControl {
    return this.filtersForm.get(filter.slug) as UntypedFormControl;
  }

  updateSliderOptions(filter: any) {
    this.sliderOptions = {
      ...this.sliderOptions,
      floor: filter.min,
      ceil: filter.max
    };
}
}
