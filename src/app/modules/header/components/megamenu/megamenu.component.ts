import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Megamenu } from '../../../../shared/interfaces/megamenu';
import { NestedLink } from '../../../../shared/interfaces/nested-link';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IconComponent } from 'src/app/shared/components/icon/icon.component';

@Component({
    selector: 'app-header-megamenu',
    templateUrl: './megamenu.component.html',
    styleUrls: ['./megamenu.component.scss'],
    standalone: true,
    imports:[CommonModule, FormsModule, RouterLink, IconComponent]
})
export class MegamenuComponent {
    @Input() menu!: Megamenu;
    @Output() itemClick: EventEmitter<NestedLink> = new EventEmitter<NestedLink>();
    Showitem: any;
    constructor() {
    }

    changetshowindex(item: any) {

        this.Showitem = item;
    }
}
