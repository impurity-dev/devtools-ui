import { LinkComponent } from './../lib/pages/link-page/components/link/link.component';
import { LinkPageModule } from './../lib/pages/link-page/link-page.module';
import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { linkWithDescription, linkWithoutDescription } from '../mocks/link.mock';

export default {
    title: 'Link',
    decorators: [
        moduleMetadata({
            imports: [CommonModule, LinkPageModule],
        }),
    ],
};

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
