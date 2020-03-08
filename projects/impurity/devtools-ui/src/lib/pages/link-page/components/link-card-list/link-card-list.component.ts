import { LinkCard } from './../../models/link-card.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'devtools-link-card-list',
    templateUrl: './link-card-list.component.html',
    styleUrls: ['./link-card-list.component.scss'],
})
export class LinkCardListComponent {
    @Input() linkCards: LinkCard[];
}
