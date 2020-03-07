import { customizableLink } from './../mocks/link.mock';
import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { text } from '@storybook/addon-knobs';
import { linkWithDescription, linkWithoutDescription } from '../mocks/link.mock';
import { LinkComponent } from './../lib/pages/link-page/components/link/link.component';
import { LinkPageModule } from './../lib/pages/link-page/link-page.module';

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
