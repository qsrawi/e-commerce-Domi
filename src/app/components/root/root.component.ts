import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { DropcartComponent, DropcartType } from '../../modules/header/components/dropcart/dropcart.component';
import { PageHeaderComponent } from 'src/app/shared/components/page-header/page-header.component';
import { CommonModule } from '@angular/common';
import { LoadingBarComponent } from 'src/app/shared/components/loading-bar/loading-bar.component';
import { QuickviewComponent } from 'src/app/shared/components/quickview/quickview.component';
import { QuickviewItemComponent } from 'src/app/shared/components/quickview-item/quickview-item.component';
import { MobileMenuComponent } from 'src/app/modules/mobile/components/mobile-menu/mobile-menu.component';
import { MobileHeaderComponent } from 'src/app/modules/mobile/components/mobile-header/mobile-header.component';
import { HeaderComponent } from 'src/app/modules/header/header.component';
import { FooterComponent } from 'src/app/modules/footer/footer.component';
import { FormsModule } from '@angular/forms';

interface RouterData {
    headerLayout?: 'classic'|'compact';
    dropcartType?: DropcartType;
}

@Component({
    selector: 'app-main',
    templateUrl: './root.component.html',
    styleUrls: ['./root.component.scss'],
    standalone: true,
    imports:[
        CommonModule,
        FormsModule,
        LoadingBarComponent, 
        QuickviewComponent, 
        QuickviewItemComponent, 
        MobileMenuComponent,
        DropcartComponent,
        MobileHeaderComponent,
        HeaderComponent,
        FooterComponent,
        RouterOutlet
    ]
})
export class RootComponent {
    headerLayout: 'classic'|'compact' = 'classic';
    dropcartType: DropcartType = 'dropdown';

    constructor(
        public route: ActivatedRoute
    ) {
        this.route.data.subscribe((data: RouterData) => {
            this.headerLayout = data.headerLayout || 'classic';
            this.dropcartType = data.dropcartType || 'dropdown';
        });
    }
}
