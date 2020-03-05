import { LinkPageComponent } from './../lib/pages/link-page/link-page.component';
import { LinkPageModule } from '../lib/pages/link-page/link-page.module';
import { CommonModule } from '@angular/common';
import { linkWithDescription, linkWithoutDescription } from '../mocks/link.mock';
import { moduleMetadata } from '@storybook/angular';

export default {
    title: 'Link Page',
    decorators: [
        moduleMetadata({
            imports: [CommonModule, LinkPageModule],
        }),
    ],
};

export const WithDescriptions = () => ({
    component: LinkPageComponent,
    props: {
        config: {
            links: [
                linkWithDescription,
                linkWithDescription,
                linkWithDescription,
                linkWithDescription,
                linkWithDescription,
                linkWithDescription,
            ],
        },
    },
});

export const WithoutDescriptions = () => ({
    component: LinkPageComponent,
    props: {
        config: {
            links: [
                linkWithoutDescription,
                linkWithoutDescription,
                linkWithoutDescription,
                linkWithoutDescription,
                linkWithoutDescription,
                linkWithoutDescription,
            ],
        },
    },
});
