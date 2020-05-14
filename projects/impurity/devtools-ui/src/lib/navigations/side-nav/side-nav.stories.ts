import { mockCustomizableHealthPage } from './../../../../mocks/health-page.mock';
import { SideNavItem } from './models/side-nav-item.model';
import { SideNavModule } from './side-nav.module';
import { SideNavComponent } from './side-nav.component';
import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';

export default {
    title: 'Navigations/Side Nav',
    component: SideNavComponent,
    decorators: [
        moduleMetadata({
            imports: [CommonModule, SideNavModule],
        }),
    ],
};

export const WithLinks = () => ({
    component: SideNavComponent,
    props: {
        sideNavItems: [new SideNavItem(mockCustomizableHealthPage)],
    },
});

export const Empty = () => ({
    component: SideNavComponent,
    props: {
        sideNavItems: [],
    },
});
