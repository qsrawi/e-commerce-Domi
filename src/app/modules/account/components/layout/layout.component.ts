import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { PageHeaderComponent } from 'src/app/shared/components/page-header/page-header.component';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.sass'],
    standalone: true,
    imports:[CommonModule, FormsModule, RouterOutlet, PageHeaderComponent, RouterLink, RouterModule]
})
export class LayoutComponent {
    links: {label: string; url: string ; icon: string}[] = [
        {label: 'نظرة عامة', url: './dashboard',icon:'fas fa-home'},
        {label: 'الطلبات', url: './orders',icon:'fas fa-history' },
        {label: 'المعلومات الشخصية', url: './profile',icon:'fas fa-info'},
        // {label: 'Order Details', url: './orders/5'},
        {label: 'عناويني', url: './addresses' ,icon:'fas fa-home'},
        // {label: 'New Address', url: './addresses/0'},
        {label: 'كلمة المرور', url: './password' ,icon:'fas fa-lock'},
        // {label: 'Logout', url: './login'}
    ];

    constructor() { }
}
