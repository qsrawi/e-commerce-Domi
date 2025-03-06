import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SocialLinksComponent } from 'src/app/shared/components/social-links/social-links.component';

@Component({
    selector: 'app-footer-newsletter',
    templateUrl: './newsletter.component.html',
    styleUrls: ['./newsletter.component.scss'],
    standalone: true,
    imports:[CommonModule, FormsModule, SocialLinksComponent]
})
export class NewsletterComponent {
    constructor() { }
}