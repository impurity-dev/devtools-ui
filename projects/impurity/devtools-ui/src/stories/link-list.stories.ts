import { customizableLink } from './../mocks/link.mock';
import { LinkListComponent } from './../lib/pages/link-page/components/link-list/link-list.component';
import { LinkComponent } from './../lib/pages/link-page/components/link/link.component';
import { LinkPageModule } from './../lib/pages/link-page/link-page.module';
import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { linkWithDescription, linkWithoutDescription } from '../mocks/link.mock';
import { object } from '@storybook/addon-knobs';

export default {
    title: 'Link list',
    decorators: [
        moduleMetadata({
            imports: [CommonModule, LinkPageModule],
        }),
    ],
};

export const ConfigurableLinkList = () => ({
    component: LinkListComponent,
    props: {
        links: object('Link list', [
            customizableLink,
            customizableLink,
            customizableLink,
            customizableLink,
            customizableLink,
            customizableLink,
            customizableLink,
            customizableLink,
            customizableLink,
            customizableLink,
            customizableLink,
            customizableLink,
            customizableLink,
            customizableLink,
            customizableLink,
            customizableLink,
            customizableLink,
            customizableLink,
            customizableLink,
            customizableLink,
            customizableLink,
            customizableLink,
            customizableLink,
            customizableLink,
            customizableLink,
            customizableLink,
            customizableLink,
            customizableLink,
            customizableLink,
            customizableLink,
        ]),
    },
});

export const WithDescription = () => ({
    component: LinkListComponent,
    props: {
        links: [
            linkWithDescription,
            linkWithDescription,
            linkWithDescription,
            linkWithDescription,
            linkWithDescription,
            linkWithDescription,
        ],
    },
});

export const WithoutDescription = () => ({
    component: LinkListComponent,
    props: {
        links: [
            linkWithoutDescription,
            linkWithoutDescription,
            linkWithoutDescription,
            linkWithoutDescription,
            linkWithoutDescription,
            linkWithoutDescription,
        ],
    },
});
