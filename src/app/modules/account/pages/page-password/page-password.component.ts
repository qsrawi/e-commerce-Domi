import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-page-password',
    templateUrl: './page-password.component.html',
    styleUrls: ['./page-password.component.sass'],
    standalone: true,
    imports:[CommonModule, FormsModule]
})
export class PagePasswordComponent {
    constructor() { }
}
