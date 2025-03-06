import { Component, Input } from '@angular/core';
import { RootService } from '../../../shared/services/root.service';
import { IconComponent } from 'src/app/shared/components/icon/icon.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-widget-categories',
    templateUrl: './widget-categories.component.html',
    styleUrls: ['./widget-categories.component.scss'],
    standalone: true,
    imports:[IconComponent, CommonModule, RouterLink, FormsModule]
})
export class WidgetCategoriesComponent {
    @Input() location: 'blog'|'shop' = 'blog';
    @Input() categories: any[] = [];

    constructor(
        public root: RootService,
    ) { }

}
