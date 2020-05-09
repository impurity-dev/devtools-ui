import { LinkPage } from './models/link-page.model';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'devtools-link-page',
    templateUrl: './link-page.component.html',
    styleUrls: ['./link-page.component.scss'],
})
export class LinkPageComponent {
    @Input() linkPage: LinkPage;

    public constructor(private route: ActivatedRoute, private router: Router) {
        this.linkPage = route.snapshot.data['page'];
    }
}
