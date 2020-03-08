import { CommonModule } from '@angular/common';
import { object } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { customizableLinkCard, linkCardWithDescription, linkCardWithoutDescription } from '../../../../../../mocks/link-card.mock';
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
            customizableLinkCard,
            customizableLinkCard,
            customizableLinkCard,
            customizableLinkCard,
            customizableLinkCard,
            customizableLinkCard,
            customizableLinkCard,
            customizableLinkCard,
            customizableLinkCard,
            customizableLinkCard,
            customizableLinkCard,
            customizableLinkCard,
            customizableLinkCard,
            customizableLinkCard,
            customizableLinkCard,
            customizableLinkCard,
            customizableLinkCard,
            customizableLinkCard,
            customizableLinkCard,
            customizableLinkCard,
            customizableLinkCard,
            customizableLinkCard,
            customizableLinkCard,
            customizableLinkCard,
            customizableLinkCard,
            customizableLinkCard,
            customizableLinkCard,
            customizableLinkCard,
            customizableLinkCard,
            customizableLinkCard,
        ]),
    },
});

export const WithDescription = () => ({
    component: LinkCardListComponent,
    props: {
        linkCards: [
            linkCardWithDescription,
            linkCardWithDescription,
            linkCardWithDescription,
            linkCardWithDescription,
            linkCardWithDescription,
            linkCardWithDescription,
        ],
    },
});

export const WithoutDescription = () => ({
    component: LinkCardListComponent,
    props: {
        linkCards: [
            linkCardWithoutDescription,
            linkCardWithoutDescription,
            linkCardWithoutDescription,
            linkCardWithoutDescription,
            linkCardWithoutDescription,
            linkCardWithoutDescription,
        ],
    },
});
