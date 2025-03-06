import { Component } from '@angular/core';
import { PageHeaderComponent } from 'src/app/shared/components/page-header/page-header.component';

@Component({
    selector: 'app-page-contact-us-alt',
    templateUrl: './page-contact-us-alt.component.html',
    styleUrls: ['./page-contact-us-alt.component.scss'],
    standalone: true,
    imports: [PageHeaderComponent]
})
export class PageContactUsAltComponent {
    constructor() { }
}
