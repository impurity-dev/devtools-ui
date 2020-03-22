import { Component, Input } from '@angular/core';
import { LinkCard } from './../../models/link-card.model';

@Component({
    selector: 'devtools-link-card',
    templateUrl: './link-card.component.html',
    styleUrls: ['./link-card.component.scss'],
})
export class LinkCardComponent {
    @Input() linkCard: LinkCard;
}
