import { RouterTestingModule } from '@angular/router/testing';
import { SideNavItemComponent } from './side-nav-item.component';
import { mockManyHealthLinksHealthPage } from '../../../../../../mocks/health-page.mock';
import { SideNavItem } from '../../models/side-nav-item.model';
import { SideNavModule } from '../../side-nav.module';
import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';

export default {
    title: 'Navigations/Side Nav/Item',
    component: SideNavItemComponent,
    decorators: [
        moduleMetadata({
            imports: [CommonModule, SideNavModule, RouterTestingModule],
        }),
    ],
};

export const WithLinks = () => ({
    component: SideNavItemComponent,
    props: {
        sideNavItem: new SideNavItem(mockManyHealthLinksHealthPage),
    },
});

export const Empty = () => ({
    component: SideNavItemComponent,
    props: {},
});
