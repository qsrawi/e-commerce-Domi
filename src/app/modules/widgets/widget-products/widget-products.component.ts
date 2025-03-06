import { Component, Input } from '@angular/core';
import Item from 'src/app/shared/Models/Item';
import { Product } from '../../../shared/interfaces/product';
import { RootService } from '../../../shared/services/root.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from "../../../shared/shared.module";

@Component({
    selector: 'app-widget-products',
    templateUrl: './widget-products.component.html',
    styleUrls: ['./widget-products.component.scss'],
    standalone: true,
    imports: [CommonModule, FormsModule, RouterLink, SharedModule]
})
export class WidgetProductsComponent {
    @Input() header = '';
    @Input() products: Item[] = [];

    constructor(public root: RootService) { 
        console.log(this.products);
        
    }
}
