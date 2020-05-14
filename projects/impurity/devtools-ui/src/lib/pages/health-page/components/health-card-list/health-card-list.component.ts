import { Component, Input } from '@angular/core';
import { HealthCard } from './../../models/health-card.model';

@Component({
    selector: 'devtools-health-card-list',
    templateUrl: './health-card-list.component.html',
    styleUrls: ['./health-card-list.component.scss'],
})
export class HealthCardListComponent {
    @Input() healthCards: HealthCard[];
}
