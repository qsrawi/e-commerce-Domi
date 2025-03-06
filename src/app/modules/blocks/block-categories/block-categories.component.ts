import { Component, Input } from '@angular/core';
import { Category } from '../../../shared/interfaces/category';
import { RootService } from '../../../shared/services/root.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BlockHeaderComponent } from '../components/block-header/block-header.component';

@Component({
    selector: 'app-block-categories',
    templateUrl: './block-categories.component.html',
    styleUrls: ['./block-categories.component.scss'],
    standalone: true,
    imports:[CommonModule, FormsModule, RouterLink, BlockHeaderComponent]
})
export class BlockCategoriesComponent {
    @Input() header = '';
    @Input() layout: 'classic'|'compact' = 'classic';
    @Input() categories: Category[] = [];

    constructor(
        public root: RootService,
    ) { }
}
