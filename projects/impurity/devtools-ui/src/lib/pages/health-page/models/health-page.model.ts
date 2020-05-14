import { Page } from '../../models/page.model';
import { HealthPageComponent } from './../health-page.component';
import { HealthCard } from './health-card.model';

export class HealthPage extends Page {
    constructor(title: string, path: string, public readonly healthCards: HealthCard[]) {
        super(title, path, HealthPageComponent);
    }
}
