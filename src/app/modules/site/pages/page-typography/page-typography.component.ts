import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageHeaderComponent } from 'src/app/shared/components/page-header/page-header.component';

@Component({
    selector: 'app-typography',
    templateUrl: './page-typography.component.html',
    styleUrls: ['./page-typography.component.scss'],
    standalone: true,
    imports:[PageHeaderComponent, CommonModule]
})
export class PageTypographyComponent {
    constructor() { }
}
