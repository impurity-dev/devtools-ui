import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HealthPage } from './models/health-page.model';

@Component({
    selector: 'devtools-health-page',
    templateUrl: './health-page.component.html',
    styleUrls: ['./health-page.component.scss'],
})
export class HealthPageComponent {
    healthPage: HealthPage;

    public constructor(private readonly route: ActivatedRoute) {
        this.healthPage = route.snapshot.data.page;
    }
}
