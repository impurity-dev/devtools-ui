import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { linkWithDescription, linkWithoutDescription } from '../../../mocks/link.mock';
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
