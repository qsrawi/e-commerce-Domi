import { Component } from '@angular/core';
import { Order } from '../../../../shared/interfaces/order';
import { order } from '../../../../../data/account-order-details';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from "../../../../shared/shared.module";

@Component({
    selector: 'app-page-order-details',
    templateUrl: './page-order-details.component.html',
    styleUrls: ['./page-order-details.component.scss'],
    standalone: true,
    imports: [CommonModule, FormsModule, SharedModule]
})
export class PageOrderDetailsComponent {
    order: Order = order;

    constructor() { }
}
