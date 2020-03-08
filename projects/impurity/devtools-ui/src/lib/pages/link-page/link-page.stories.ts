import { CommonModule } from '@angular/common';
import { object, text } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { customizableLinkCard, linkCardWithDescription, linkCardWithoutDescription } from '../../../../mocks/link-card.mock';
import { LinkPageComponent } from './link-page.component';
import { LinkPageModule } from './link-page.module';

export default {
    title: 'Link Page',
    decorators: [
        moduleMetadata({
            imports: [CommonModule, LinkPageModule],
        }),
    ],
};

export const Customizable = () => ({
    component: LinkPageComponent,
    props: {
        linkPage: {
            title: text('Link page title', 'Developer Workspace'),
            linkCards: object('Link list', [
                customizableLinkCard,
                customizableLinkCard,
                customizableLinkCard,
                customizableLinkCard,
                customizableLinkCard,
                customizableLinkCard,
            ]),
        },
    },
});

export const WithDescriptions = () => ({
    component: LinkPageComponent,
    props: {
        linkPage: {
            title: 'Sample page title',
            linkCards: [
                linkCardWithDescription,
                linkCardWithDescription,
                linkCardWithDescription,
                linkCardWithDescription,
                linkCardWithDescription,
                linkCardWithDescription,
            ],
        },
    },
});

export const WithoutDescriptions = () => ({
    component: LinkPageComponent,
    props: {
        linkPage: {
            title: 'Sample page title',
            linkCards: [
                linkCardWithoutDescription,
                linkCardWithoutDescription,
                linkCardWithoutDescription,
                linkCardWithoutDescription,
                linkCardWithoutDescription,
                linkCardWithoutDescription,
            ],
        },
    },
});
