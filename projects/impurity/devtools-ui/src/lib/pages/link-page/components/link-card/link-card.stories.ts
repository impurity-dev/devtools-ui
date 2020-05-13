import {
    mockCustomizableLinkCard,
    mockLinkCardWithDescription,
    mockLinkCardWithoutDescription,
} from './../../../../../../mocks/link-card.mock';
import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { LinkPageModule } from '../../link-page.module';
import { LinkCardComponent } from './link-card.component';

export default {
    title: 'Pages/Link Page/Link Card',
    component: LinkCardComponent,
    decorators: [
        moduleMetadata({
            imports: [CommonModule, LinkPageModule],
        }),
    ],
};

export const Configurable = () => ({
    component: LinkCardComponent,
    props: {
        linkCard: mockCustomizableLinkCard,
    },
});

export const WithDescription = () => ({
    component: LinkCardComponent,
    props: {
        linkCard: mockLinkCardWithDescription,
    },
});

export const WithoutDescription = () => ({
    component: LinkCardComponent,
    props: {
        linkCard: mockLinkCardWithoutDescription,
    },
});
