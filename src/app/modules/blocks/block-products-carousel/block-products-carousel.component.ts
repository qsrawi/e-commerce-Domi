import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    Inject,
    Input,
    OnChanges,
    Output, PLATFORM_ID,
    SimpleChanges,
    ViewChild
} from '@angular/core';
import { Product } from '../../../shared/interfaces/product';
import { BlockHeaderGroup } from '../../../shared/interfaces/block-header-group';
import { DirectionService } from '../../../shared/services/direction.service';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OwlPreventClickDirective } from 'src/app/shared/directives/owl-prevent-click.directive';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductCardComponent } from 'src/app/shared/components/product-card/product-card.component';
import { BlockHeaderComponent } from '../components/block-header/block-header.component';

@Component({
    selector: 'app-block-products-carousel',
    templateUrl: './block-products-carousel.component.html',
    styleUrls: ['./block-products-carousel.component.scss'],
    standalone: true,
    imports:[CommonModule, FormsModule, OwlPreventClickDirective, CarouselModule, ProductCardComponent, BlockHeaderComponent]
})
export class BlockProductsCarouselComponent implements OnChanges, AfterViewInit {
    @Input() header = '';
    @Input() layout: 'grid-4'|'grid-4-sm'|'grid-5'|'horizontal' = 'grid-4';
    @Input() rows = 1;
    @Input() products: Product[] = [];
    @Input() groups: BlockHeaderGroup[] = [];
    @Input() withSidebar = false;
    @Input() loading = false;

    @Output() groupChange: EventEmitter<BlockHeaderGroup> = new EventEmitter();

    @ViewChild('container', {read: ElementRef}) container!: ElementRef;

    columns: Product[][] = [];

    showCarousel = true;

    carouselDefaultOptions: any = {
        items: 4,
        margin: 14,
        nav: false,
        dots: false,
        loop: true,
        stagePadding: 1,
        rtl: this.direction.isRTL()
    };

    carouselOptionsByLayout: any = {
        'grid-4': {
            responsive: {
                1110: {items: 4, margin: 14},
                930:  {items: 4, margin: 10},
                690:  {items: 3, margin: 10},
                400:  {items: 2, margin: 10},
                0:    {items: 1}
            }
        },
        'grid-4-sm': {
            responsive: {
                820: {items: 4, margin: 14},
                640: {items: 3, margin: 10},
                400: {items: 2, margin: 10},
                0:   {items: 1}
            }
        },
        'grid-5': {
            responsive: {
                1110: {items: 6, margin: 12}, //5
                930:  {items: 4, margin: 10},
                690:  {items: 3, margin: 10},
                400:  {items: 2, margin: 10},
                0:    {items: 1}
            }
        },
        horizontal: {
            items: 3,
            responsive: {
                1110: {items: 3, margin: 14},
                930:  {items: 3, margin: 10},
                690:  {items: 2, margin: 10},
                0:    {items: 1}
            }
        }
    };

    get carouselOptions(): any {
        return Object.assign({}, this.carouselDefaultOptions, this.carouselOptionsByLayout[this.layout]);
    }

    constructor(
        @Inject(PLATFORM_ID) private platformId: any,
        private direction: DirectionService
    ) { }

    ngOnChanges(changes: SimpleChanges): void {
        const properties = Object.keys(changes);

        if (properties.includes('products') || properties.includes('row')) {
            this.columns = [];

            if (this.products && this.rows > 0) {
                const products = this.products.slice();

                while (products.length > 0) {
                    this.columns.push(products.splice(0, this.rows));
                }
            }
        }
    }

    ngAfterViewInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            const container = this.container.nativeElement as HTMLElement;
            const containerWidth = container.getBoundingClientRect().width;

            window.addEventListener('load', () => {
                const newContainerWidth = container.getBoundingClientRect().width;

                if (containerWidth !== newContainerWidth) {
                    this.showCarousel = false;

                    setTimeout(() => this.showCarousel = true, 0);
                }
            });
        }
    }
}
