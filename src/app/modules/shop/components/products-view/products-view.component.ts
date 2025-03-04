import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ShopSidebarService } from '../../services/shop-sidebar.service';
import { PageCategoryService } from '../../services/page-category.service';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ProductsList } from '../../../../shared/interfaces/list';
import { Router } from '@angular/router';

export type Layout = 'grid'|'grid-with-features'|'list';

@Component({
    selector: 'app-products-view',
    templateUrl: './products-view.component.html',
    styleUrls: ['./products-view.component.scss']
})
export class ProductsViewComponent implements OnInit, OnDestroy {
    @Input() layout: Layout = 'grid';
    @Input() grid: 'grid-3-sidebar'|'grid-4-full'|'grid-5-full' = 'grid-3-sidebar';
    @Input() offcanvas: 'always'|'mobile' = 'mobile';

    destroy$: Subject<void> = new Subject<void>();

    listOptionsForm!: UntypedFormGroup;
    filtersCount = 0;

    constructor(
        private fb: UntypedFormBuilder,
        public sidebar: ShopSidebarService,
        public pageService: PageCategoryService,
        private router:Router
    ) { 
        this.router.navigate(['/']);
    }

    ngOnInit(): void {
        this.listOptionsForm = this.fb.group({
            page: this.fb.control(this.pageService.page),
            limit: this.fb.control(this.pageService.limit),
            sort: this.fb.control(this.pageService.sort),
        });
        this.listOptionsForm.valueChanges.subscribe(value => {
            value.limit = parseFloat(value.limit);

            this.pageService.updateOptions(value);
        });

        this.pageService.list$.pipe(
            filter((x): x is ProductsList => x !== null),
            takeUntil(this.destroy$)
        ).subscribe(
            ({page, limit, sort, filterValues}) => {
                this.filtersCount = Object.keys(filterValues).length;
                this.listOptionsForm.setValue({page, limit, sort}, {emitEvent: false});
            }
        );
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    setLayout(value: Layout): void {
        this.layout = value;
    }

    resetFilters(): void {
        this.pageService.updateOptions({filterValues: {}});
    }
}
