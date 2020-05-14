import { Page } from './../../shared/models/page.model';
import { HealthPageComponent } from './../health-page.component';
import { HealthCard } from './health-card.model';

export class HealthPage extends Page {
    healthCards: HealthCard[];

    constructor(title: string, path: string, healthCards: HealthCard[]) {
        super(title, path, HealthPageComponent);
        this.healthCards = healthCards;
    }
}
