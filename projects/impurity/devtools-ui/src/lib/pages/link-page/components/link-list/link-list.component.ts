import { Link } from './../../models/link.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'devtools-link-list',
    templateUrl: './link-list.component.html',
    styleUrls: ['./link-list.component.scss'],
})
export class LinkListComponent {
    @Input() links: Link[];
}
