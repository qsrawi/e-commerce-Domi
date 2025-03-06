import { NgModule } from '@angular/core';

// modules (angular)
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// modules (third-party)
import { CarouselModule } from 'ngx-owl-carousel-o';

// modules
import { SharedModule } from '../../shared/shared.module';
import { ShopRoutingModule } from './shop-routing.module';

// components
import { ProductsViewComponent } from './components/products-view/products-view.component';
import { ProductTabsComponent } from './components/product-tabs/product-tabs.component';
import { ShopSidebarComponent } from './components/shop-sidebar/shop-sidebar.component';

// pages
import { PageCartComponent } from './pages/page-cart/page-cart.component';
import { PageCategoryComponent } from './pages/page-category/page-category.component';
import { PageCheckoutComponent } from './pages/page-checkout/page-checkout.component';
import { PageCompareComponent } from './pages/page-compare/page-compare.component';
import { PageProductComponent } from './pages/page-product/page-product.component';
import { PageTrackOrderComponent } from './pages/page-track-order/page-track-order.component';
import { PageWishlistComponent } from './pages/page-wishlist/page-wishlist.component';
import { ProductSidebarComponent } from './components/product-sidebar/product-sidebar.component';
import { PageOrderSuccessComponent } from './pages/page-order-success/page-order-success.component';
import { PageItemComponent } from './pages/page-item/page-item.component';
import { ItemTabsComponent } from './components/item-tabs/item-tabs.component';
import { ItemsViewComponent } from './components/items-view/items-view.component';
import { PageTypeComponent } from './pages/page-type/page-type.component';
import { NgxPayPalModule } from 'ngx-paypal';

@NgModule({
    declarations: [
        // components
        ProductsViewComponent,
        ProductTabsComponent,
        ShopSidebarComponent,
        // pages
        PageCartComponent,
        PageCategoryComponent,
        PageCheckoutComponent,
        PageCompareComponent,
        PageProductComponent,
        PageTrackOrderComponent,
        PageWishlistComponent,
        ProductSidebarComponent,
        PageOrderSuccessComponent,
        PageItemComponent,
        ItemTabsComponent,
        ItemsViewComponent,
        PageTypeComponent
    ],
    imports: [
        // modules (angular)
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        // // modules (third-party)
        CarouselModule,
        // // modules
        // BlocksModule,
        SharedModule,
        // ShopRoutingModule,
        // WidgetsModule,
        // NgxPayPalModule,

    ]
})
export class ShopModule { }
