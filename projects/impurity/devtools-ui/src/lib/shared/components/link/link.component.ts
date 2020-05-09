import Link from '../../models/link.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'devtools-link',
    templateUrl: './link.component.html',
    styleUrls: ['./link.component.scss'],
})
export class LinkComponent {
    @Input() link: Link;
}
