import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LinkPage } from './models/link-page.model';

@Component({
    selector: 'devtools-link-page',
    templateUrl: './link-page.component.html',
    styleUrls: ['./link-page.component.scss'],
})
export class LinkPageComponent {
    linkPage: LinkPage;

    public constructor(private readonly route: ActivatedRoute) {
        this.linkPage = route.snapshot.data.page;
    }
}
