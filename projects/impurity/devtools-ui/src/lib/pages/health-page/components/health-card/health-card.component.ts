import { Component, Input } from '@angular/core';
import { HealthCard } from './../../models/health-card.model';

@Component({
    selector: 'devtools-health-card',
    templateUrl: './health-card.component.html',
    styleUrls: ['./health-card.component.scss'],
})
export class HealthCardComponent {
    @Input() healthCard: HealthCard;
}
