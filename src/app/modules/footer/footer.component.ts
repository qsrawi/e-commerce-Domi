import { Component } from '@angular/core';
import { theme } from '../../../data/theme';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LinksComponent } from './components/links/links.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { TotopComponent } from './components/totop/totop.component';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: true,
    imports:[CommonModule, FormsModule, LinksComponent, ContactsComponent, TotopComponent]
})
export class FooterComponent {
    theme = theme;

    constructor() { }
}
