import { LinkPageComponent } from './../../link-page/link-page.component';
import { Router, Route } from '@angular/router';
import { Injectable } from '@angular/core';
import { LinkPage } from '../../link-page/models/link-page.model';

@Injectable({
    providedIn: 'root',
})
export class RouterService {
    constructor(private readonly router: Router) {}

    generateRoutes(linkPages: LinkPage[]): void {
        const routes = this.generateLinkPages(linkPages);
        this.router.resetConfig(routes);
        this.router.navigate([routes[0].path]);
    }

    private generateLinkPages(linkPages: LinkPage[]): Route[] {
        const routes: Route[] = [];
        linkPages.forEach((page) => routes.push({ path: page.path, component: LinkPageComponent, data: { page } }));
        return routes;
    }
}
