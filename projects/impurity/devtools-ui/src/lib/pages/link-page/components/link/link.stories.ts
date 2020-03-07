import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { customizableLink, linkWithDescription, linkWithoutDescription } from '../../../../../mocks/link.mock';
import { LinkPageModule } from '../../link-page.module';
import { LinkComponent } from './link.component';

export default {
    title: 'Link',
    decorators: [
        moduleMetadata({
            imports: [CommonModule, LinkPageModule],
        }),
    ],
};

export const ConfigurableLink = () => ({
    component: LinkComponent,
    props: {
        link: customizableLink,
    },
});

export const WithDescription = () => ({
    component: LinkComponent,
    props: {
        link: linkWithDescription,
    },
});

export const WithoutDescription = () => ({
    component: LinkComponent,
    props: {
        link: linkWithoutDescription,
    },
});
