import { Component, Input, OnInit } from '@angular/core';
import { Page } from '../models/page.model';
import { RouterService } from './services/router.service';

@Component({
    selector: 'devtools-page-router',
    templateUrl: './page-router.component.html',
    styleUrls: ['./page-router.component.scss'],
})
export class PageRouterComponent implements OnInit {
    @Input() pages: Page[];

    constructor(private readonly routerService: RouterService) {}

    ngOnInit() {
        if (!!this.pages && !!this.pages.length) {
            this.routerService.generateRoutes(this.pages);
        }
    }
}
