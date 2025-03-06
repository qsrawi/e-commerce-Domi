import { Component, Input } from '@angular/core';
import { Post } from '../../../../shared/interfaces/post';
import { PostCommentsList } from '../../../../shared/interfaces/post-comments-list';
import { posts } from '../../../../../data/blog-posts';
import { postComments } from '../../../../../data/blog-post-comments';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ShareButtonsComponent } from 'src/app/shared/components/share-buttons/share-buttons.component';
import { CommentsListComponent } from '../comments-list/comments-list.component';

@Component({
    selector: 'app-post-details',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
    standalone: true,
    imports:[CommonModule, FormsModule, RouterLink, ShareButtonsComponent, CommentsListComponent]
})
export class PostComponent {
    @Input() layout: 'classic'|'full' = 'classic';

    posts: Post[] = posts;
    comments: PostCommentsList = postComments;

    constructor() { }
}
