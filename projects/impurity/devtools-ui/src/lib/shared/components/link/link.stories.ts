import { LinkComponent } from './link.component';
import { text } from '@storybook/addon-knobs';
import { SharedModule } from './../../shared.module';
import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';

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
        href: text('Image Link', 'https://cdn.worldvectorlogo.com/logos/bitbucket-icon.svg'),
        alt: text('Image Alt', 'BitBucket Logo'),
    },
});
