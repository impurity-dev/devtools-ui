import { descriptionLinkPage, noDescriptionLinkPage, customizableLinkPage } from './../../../../mocks/link-page.mock';
import { mockCustomizableLinkCard, mockLinkCardWithDescription, mockLinkCardWithoutDescription } from './../../../../mocks/link-card.mock';
import { CommonModule } from '@angular/common';
import { object, text } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { LinkPageComponent } from './link-page.component';
import { LinkPageModule } from './link-page.module';

export default {
    title: 'Pages/Link Page',
    decorators: [
        moduleMetadata({
            imports: [CommonModule, LinkPageModule],
        }),
    ],
};

export const Customizable = () => ({
    component: LinkPageComponent,
    props: {
        linkPage: customizableLinkPage,
    },
});

export const WithDescriptions = () => ({
    component: LinkPageComponent,
    props: {
        linkPage: descriptionLinkPage,
    },
});

export const WithoutDescriptions = () => ({
    component: LinkPageComponent,
    props: {
        linkPage: noDescriptionLinkPage,
    },
});
