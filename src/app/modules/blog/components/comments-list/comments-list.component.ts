import { Component, Input } from '@angular/core';
import { PostComment } from '../../../../shared/interfaces/post-comment';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShareButtonsComponent } from 'src/app/shared/components/share-buttons/share-buttons.component';

@Component({
    selector: 'app-comments-list',
    templateUrl: './comments-list.component.html',
    styleUrls: ['./comments-list.component.scss'],
    standalone: true,
    imports:[CommonModule, FormsModule, CommentsListComponent]
})
export class CommentsListComponent {
    @Input() comments: PostComment[] = [];
    @Input() level = 0;

    constructor() { }
}
