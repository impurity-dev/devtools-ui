import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Page } from '../../shared/models/page.model';

@Injectable({
    providedIn: 'root',
})
export class RouterService {
    constructor(private readonly router: Router) {}

    generateRoutes(pages: Page[]): void {
        if (!pages || !pages.length) {
            throw new Error('No routes to generate');
        }
        const routes = this.generateLinkPages(pages);
        this.router.resetConfig(routes);
        this.router.navigate([routes[0].path]);
    }

    private generateLinkPages(pages: Page[]): Route[] {
        const routes: Route[] = [];
        pages.forEach((page) => routes.push({ path: page.path, component: page.component, data: { page } }));
        return routes;
    }
}
