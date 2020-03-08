import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { customizableLinkCard, linkCardWithDescription, linkCardWithoutDescription } from '../../../../../../mocks/link-card.mock';
import { LinkPageModule } from '../../link-page.module';
import { LinkCardComponent } from './link-card.component';

export default {
    title: 'Link Card',
    decorators: [
        moduleMetadata({
            imports: [CommonModule, LinkPageModule],
        }),
    ],
};

export const Configurable = () => ({
    component: LinkCardComponent,
    props: {
        linkCard: customizableLinkCard,
    },
});

export const WithDescription = () => ({
    component: LinkCardComponent,
    props: {
        linkCard: linkCardWithDescription,
    },
});

export const WithoutDescription = () => ({
    component: LinkCardComponent,
    props: {
        linkCard: linkCardWithoutDescription,
    },
});
