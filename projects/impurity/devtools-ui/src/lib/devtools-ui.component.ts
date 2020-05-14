import { SideNavItem } from './navigations/side-nav/models/side-nav-item.model';
import { Component, Input } from '@angular/core';
import { Page } from './pages/models/page.model';
import Image from './shared/models/image.model';

@Component({
    selector: 'devtools-ui',
    templateUrl: './devtools-ui.component.html',
    styleUrls: ['./devtools-ui.component.scss'],
})
export class DevtoolsUiComponent {
    @Input() title: string;
    @Input() icon: Image;
    @Input() pages: Page[];
    sideNavItems: SideNavItem[] = [];

    ngOnInit() {
        this.sideNavItems = this.createSideNavItems();
    }

    private createSideNavItems() {
        const sideNavItems: SideNavItem[] = [];
        this.pages.forEach((page) => sideNavItems.push(new SideNavItem(page)));
        return sideNavItems;
    }
}
