import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LinkPage } from '../../link-page/models/link-page.model';
import { LinkPageComponent } from './../../link-page/link-page.component';

@Injectable({
    providedIn: 'root',
})
export class RouterService {
    constructor(private readonly router: Router) {}

    generateRoutes(linkPages: LinkPage[]): void {
        if (!linkPages || !linkPages.length) {
            throw new Error('No routes to generate');
        }
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
