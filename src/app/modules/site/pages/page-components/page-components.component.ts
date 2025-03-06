import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';
import { IconComponent } from 'src/app/shared/components/icon/icon.component';
import { PageHeaderComponent } from 'src/app/shared/components/page-header/page-header.component';

@Component({
    selector: 'app-components',
    templateUrl: './page-components.component.html',
    styleUrls: ['./page-components.component.scss'],
    standalone: true,
    imports: [
        IconComponent,
        CommonModule,
        PageHeaderComponent,
        AlertComponent
    ]
})
export class PageComponentsComponent implements OnInit, OnDestroy{
    showAlert = true;

    constructor() { }
    ngOnDestroy(): void {
        throw new Error('Method not implemented.');
    }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
}
