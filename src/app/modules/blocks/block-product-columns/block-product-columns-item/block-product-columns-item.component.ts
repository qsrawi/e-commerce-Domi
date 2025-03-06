import { Component, HostBinding, Input } from '@angular/core';
import { Product } from '../../../../shared/interfaces/product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from 'src/app/shared/components/product-card/product-card.component';
import { BlockHeaderComponent } from '../../components/block-header/block-header.component';

@Component({
    selector: 'app-block-product-columns-item',
    templateUrl: './block-product-columns-item.component.html',
    styleUrls: ['./block-product-columns-item.component.sass'],
    standalone: true,
    imports:[CommonModule, FormsModule, ProductCardComponent, BlockHeaderComponent]
})
export class BlockProductColumnsItemComponent {
    @HostBinding('class.col') classCol = true;

    @Input() header = '';
    @Input() products: Product[] = [];

    constructor() { }
}
