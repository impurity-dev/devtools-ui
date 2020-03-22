import {
    mockLinkCardWithDescription,
    mockLinkCardWithoutDescription,
    mockCustomizableLinkCard,
} from './../../../../../../mocks/link-card.mock';
import { mockCustomizableImage } from './../../../../../../mocks/image.mock';
import { CommonModule } from '@angular/common';
import { object } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { LinkPageModule } from './../../link-page.module';
import { LinkCardListComponent } from './link-card-list.component';

export default {
    title: 'Link card list',
    decorators: [
        moduleMetadata({
            imports: [CommonModule, LinkPageModule],
        }),
    ],
};

export const Configurable = () => ({
    component: LinkCardListComponent,
    props: {
        linkCards: object('Link card list', [
            mockCustomizableLinkCard,
            mockCustomizableLinkCard,
            mockCustomizableLinkCard,
            mockCustomizableLinkCard,
            mockCustomizableLinkCard,
            mockCustomizableLinkCard,
            mockCustomizableLinkCard,
            mockCustomizableLinkCard,
            mockCustomizableLinkCard,
            mockCustomizableLinkCard,
            mockCustomizableLinkCard,
            mockCustomizableLinkCard,
            mockCustomizableLinkCard,
            mockCustomizableLinkCard,
            mockCustomizableLinkCard,
            mockCustomizableLinkCard,
            mockCustomizableLinkCard,
            mockCustomizableLinkCard,
            mockCustomizableLinkCard,
            mockCustomizableLinkCard,
            mockCustomizableLinkCard,
            mockCustomizableLinkCard,
            mockCustomizableLinkCard,
            mockCustomizableLinkCard,
            mockCustomizableLinkCard,
            mockCustomizableLinkCard,
            mockCustomizableLinkCard,
            mockCustomizableLinkCard,
            mockCustomizableLinkCard,
            mockCustomizableLinkCard,
            mockCustomizableLinkCard,
            mockCustomizableLinkCard,
            mockCustomizableLinkCard,
            mockCustomizableLinkCard,
            mockCustomizableLinkCard,
            mockCustomizableLinkCard,
        ]),
    },
});

export const WithDescription = () => ({
    component: LinkCardListComponent,
    props: {
        linkCards: [
            mockLinkCardWithDescription,
            mockLinkCardWithDescription,
            mockLinkCardWithDescription,
            mockLinkCardWithDescription,
            mockLinkCardWithDescription,
            mockLinkCardWithDescription,
        ],
    },
});

export const WithoutDescription = () => ({
    component: LinkCardListComponent,
    props: {
        linkCards: [
            mockLinkCardWithoutDescription,
            mockLinkCardWithoutDescription,
            mockLinkCardWithoutDescription,
            mockLinkCardWithoutDescription,
            mockLinkCardWithoutDescription,
            mockLinkCardWithoutDescription,
        ],
    },
});
