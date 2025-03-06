import { Component } from '@angular/core';
import { RootService } from '../../shared/services/root.service';
import { OffcanvasCartService } from '../../shared/services/offcanvas-cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageHeaderComponent } from 'src/app/shared/components/page-header/page-header.component';

@Component({
    selector: 'app-page-offcanvas-cart',
    templateUrl: './page-offcanvas-cart.component.html',
    styleUrls: ['./page-offcanvas-cart.component.scss'],
    standalone: true,
    imports: [CommonModule, FormsModule, SharedModule, PageHeaderComponent
        
    ]
})
export class PageOffcanvasCartComponent {
    constructor(
        public root: RootService,
        public offcanvasCart: OffcanvasCartService,
    ) { }
}
