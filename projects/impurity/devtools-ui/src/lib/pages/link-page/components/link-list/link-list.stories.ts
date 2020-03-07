import { CommonModule } from '@angular/common';
import { object } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { customizableLink, linkWithDescription, linkWithoutDescription } from '../../../../../mocks/link.mock';
import { LinkPageModule } from './../../link-page.module';
import { LinkListComponent } from './link-list.component';

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
