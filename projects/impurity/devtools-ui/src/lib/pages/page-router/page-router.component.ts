import { Component, Input, OnInit } from '@angular/core';
import { LinkPage } from '../link-page/models/link-page.model';
import { RouterService } from './services/router.service';

@Component({
    selector: 'devtools-page-router',
    templateUrl: './page-router.component.html',
    styleUrls: ['./page-router.component.scss'],
})
export class PageRouterComponent implements OnInit {
    @Input() linkPages: LinkPage[];

    constructor(private readonly routerService: RouterService) {}

    ngOnInit() {
        if (!!this.linkPages) {
            this.routerService.generateRoutes(this.linkPages);
        }
    }
}
