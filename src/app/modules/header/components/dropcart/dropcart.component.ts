import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../../../../shared/services/cart.service';
import { CartItem } from '../../../../shared/interfaces/cart-item';
import { RootService } from '../../../../shared/services/root.service';
import { OffcanvasCartService } from '../../../../shared/services/offcanvas-cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconComponent } from 'src/app/shared/components/icon/icon.component';
import { RouterLink } from '@angular/router';
import { SharedModule } from "../../../../shared/shared.module";

export type DropcartType = 'dropdown' | 'offcanvas';

@Component({
    selector: 'app-header-dropcart',
    templateUrl: './dropcart.component.html',
    styleUrls: ['./dropcart.component.scss'],
    standalone: true,
    imports: [CommonModule, FormsModule, IconComponent, RouterLink, SharedModule]
})
export class DropcartComponent {
    removedItems: CartItem[] = [];

    @Input() type: DropcartType = 'dropdown';

    @Output() closeMenu: EventEmitter<void> = new EventEmitter<void>();

    constructor(
        public state: OffcanvasCartService,
        public cart: CartService,
        public root: RootService,
    ) { }

    remove(item: CartItem): void {
        if (this.removedItems.includes(item)) {
            return;
        }

        this.removedItems.push(item);
        this.cart.remove(item).subscribe({complete: () => this.removedItems = this.removedItems.filter(eachItem => eachItem !== item)});
    }

    close(): void {
        this.state.close();
    }
}
