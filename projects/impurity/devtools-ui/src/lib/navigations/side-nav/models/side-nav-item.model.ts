import { Page } from './../../../pages/models/page.model';
export class SideNavItem {
    title: string;
    path: string;
    alt: string;

    constructor(page: Page) {
        this.title = page.title;
        this.path = page.path;
        this.alt = `${page.title} link`;
    }
}
