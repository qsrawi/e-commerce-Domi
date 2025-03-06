import { Component, Input } from '@angular/core';
import { StoreService } from '../../shared/services/store.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { SearchComponent } from 'src/app/shared/components/search/search.component';
import { TopbarComponent } from './components/topbar/topbar.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports:[CommonModule, FormsModule, NavComponent, SearchComponent, TopbarComponent]
})
export class HeaderComponent {
    @Input() layout: 'classic'|'compact' = 'classic';

    constructor(public store: StoreService) { }
}
