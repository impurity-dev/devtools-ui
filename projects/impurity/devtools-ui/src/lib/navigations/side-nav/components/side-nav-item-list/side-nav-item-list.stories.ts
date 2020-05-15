import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { mockManyHealthLinksHealthPage } from './../../../../../../mocks/health-page.mock';
import { SideNavItem } from './../../models/side-nav-item.model';
import { SideNavModule } from './../../side-nav.module';
import { SideNavItemListComponent } from './side-nav-item-list.component';

export default {
    title: 'Navigations/Side Nav/Item List',
    component: SideNavItemListComponent,
    decorators: [
        moduleMetadata({
            imports: [CommonModule, SideNavModule],
        }),
    ],
};

export const WithLinks = () => ({
    component: SideNavItemListComponent,
    props: {
        sideNavItems: [new SideNavItem(mockManyHealthLinksHealthPage)],
    },
});

export const Empty = () => ({
    component: SideNavItemListComponent,
    props: {
        sideNavItems: [],
    },
});
