import { NgModule } from '@angular/core';

// modules (angular)
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// modules (third-party)
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ModalModule } from 'ngx-bootstrap/modal';

// directives
import { ClickDirective } from './directives/click.directive';
import { CollapseContentDirective, CollapseDirective, CollapseItemDirective } from './directives/collapse.directive';
import { DepartmentsAreaDirective } from './directives/departments-area.directive';
import { DropdownDirective } from './directives/dropdown.directive';
import { FakeSlidesDirective } from './directives/fake-slides.directive';
import { OutsideTouchClickDirective } from './directives/outside-touch-click.directive';
import { OwlPreventClickDirective } from './directives/owl-prevent-click.directive';
import { TouchClickDirective } from './directives/touch-click.directive';

// components
import { AlertComponent } from './components/alert/alert.component';
import { IconComponent } from './components/icon/icon.component';
import { InputNumberComponent } from './components/input-number/input-number.component';
import { LoadingBarComponent } from './components/loading-bar/loading-bar.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductComponent } from './components/product/product.component';
import { QuickviewComponent } from './components/quickview/quickview.component';
import { RatingComponent } from './components/rating/rating.component';
import { SearchComponent } from './components/search/search.component';
import { ShareButtonsComponent } from './components/share-buttons/share-buttons.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';

// pipes
import { AbsoluteUrlPipe } from './pipes/absolute-url.pipe';
import { ColorTypePipe } from './pipes/color-type.pipe';
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';
import { ProductGalleryComponent } from './components/product-gallery/product-gallery.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { QuickviewItemComponent } from './components/quickview-item/quickview-item.component';
import { ItemComponent } from './components/item/item.component';
import { ItemGalleryComponent } from './components/item-gallery/item-gallery.component';


@NgModule({ declarations: [
        // directives
        ClickDirective,
        CollapseContentDirective,
        CollapseDirective,
        CollapseItemDirective,
        DepartmentsAreaDirective,
        DropdownDirective,
        FakeSlidesDirective,
        OutsideTouchClickDirective,
        OwlPreventClickDirective,
        TouchClickDirective,
        // components
        InputNumberComponent,
        LoadingBarComponent,
        PaginationComponent,
        PostCardComponent,
        ProductCardComponent,
        ProductComponent,
        QuickviewComponent,
        RatingComponent,
        SearchComponent,
        ShareButtonsComponent,
        SocialLinksComponent,
        // pipes
        AbsoluteUrlPipe,
        ColorTypePipe,
        CurrencyFormatPipe,
        ProductGalleryComponent,
        QuickviewItemComponent,
        ItemComponent,
        ItemGalleryComponent,
    ],
    exports: [
        // directives
        ClickDirective,
        CollapseContentDirective,
        CollapseDirective,
        CollapseItemDirective,
        DepartmentsAreaDirective,
        DropdownDirective,
        FakeSlidesDirective,
        OutsideTouchClickDirective,
        OwlPreventClickDirective,
        TouchClickDirective,
        // components
        InputNumberComponent,
        LoadingBarComponent,
        PaginationComponent,
        PostCardComponent,
        ProductCardComponent,
        ProductComponent,
        ItemComponent,
        QuickviewComponent,
        QuickviewItemComponent,
        RatingComponent,
        SearchComponent,
        SocialLinksComponent,
        // pipes
        AbsoluteUrlPipe,
        ColorTypePipe,
        CurrencyFormatPipe,
        ShareButtonsComponent,
    ], imports: [
        // modules (angular)
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        // modules (third-party)
        // CarouselModule,
        ModalModule.forRoot(),
        // RedZoomModule
    ], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class SharedModule { }
