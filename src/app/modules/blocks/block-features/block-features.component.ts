import { Component, Input } from '@angular/core';
import { IconComponent } from 'src/app/shared/components/icon/icon.component';

@Component({
    selector: 'app-block-features',
    templateUrl: './block-features.component.html',
    styleUrls: ['./block-features.component.scss'],
    standalone: true,
    imports: [
        IconComponent // Add this
    ]
})
export class BlockFeaturesComponent {
    @Input() layout: 'classic'|'boxed' = 'classic';

    constructor() { }
}
