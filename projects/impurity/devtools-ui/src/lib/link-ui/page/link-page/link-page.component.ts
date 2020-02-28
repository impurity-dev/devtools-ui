import { Link } from './../../model/link.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'lib-link-page',
    templateUrl: './link-page.component.html',
    styleUrls: ['./link-page.component.scss'],
})
export class LinkPageComponent {
    @Input() links: Link[] = [];
}
