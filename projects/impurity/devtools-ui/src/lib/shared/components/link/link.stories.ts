import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { mockCustomizableLink } from './../../../../../mocks/link.mock';
import { SharedModule } from './../../shared.module';
import { LinkComponent } from './link.component';

export default {
    title: 'Link',
    decorators: [
        moduleMetadata({
            imports: [CommonModule, SharedModule],
        }),
    ],
};

export const CustomizableLink = () => ({
    component: LinkComponent,
    props: {
        link: mockCustomizableLink,
    },
});
