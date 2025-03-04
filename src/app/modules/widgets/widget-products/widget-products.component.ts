import { Component, Input } from '@angular/core';
import Item from 'src/app/shared/Models/Item';
import { Product } from '../../../shared/interfaces/product';
import { RootService } from '../../../shared/services/root.service';

@Component({
    selector: 'app-widget-products',
    templateUrl: './widget-products.component.html',
    styleUrls: ['./widget-products.component.scss']
})
export class WidgetProductsComponent {
    @Input() header = '';
    @Input() products: Item[] = [];

    constructor(public root: RootService) { 
        console.log(this.products);
        
    }
}
