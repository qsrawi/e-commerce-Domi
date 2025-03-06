import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IconComponent } from 'src/app/shared/components/icon/icon.component';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: 'app-widget-search',
    templateUrl: './widget-search.component.html',
    styleUrls: ['./widget-search.component.scss'],
    standalone: true,
    imports: [CommonModule, FormsModule, SharedModule, IconComponent]
})
export class WidgetSearchComponent {
    constructor() { }
}
