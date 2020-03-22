import { mockCustomizableLinkCard, mockLinkCardWithDescription, mockLinkCardWithoutDescription } from './../../../../mocks/link-card.mock';
import { CommonModule } from '@angular/common';
import { object, text } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
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
                mockCustomizableLinkCard,
                mockCustomizableLinkCard,
                mockCustomizableLinkCard,
                mockCustomizableLinkCard,
                mockCustomizableLinkCard,
                mockCustomizableLinkCard,
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
                mockLinkCardWithDescription,
                mockLinkCardWithDescription,
                mockLinkCardWithDescription,
                mockLinkCardWithDescription,
                mockLinkCardWithDescription,
                mockLinkCardWithDescription,
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
                mockLinkCardWithoutDescription,
                mockLinkCardWithoutDescription,
                mockLinkCardWithoutDescription,
                mockLinkCardWithoutDescription,
                mockLinkCardWithoutDescription,
                mockLinkCardWithoutDescription,
            ],
        },
    },
});
