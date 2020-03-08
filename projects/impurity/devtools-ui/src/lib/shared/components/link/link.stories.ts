import { CommonModule } from '@angular/common';
import { text } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
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
        link: {
            href: text('Link url', 'https://cdn.worldvectorlogo.com/logos/bitbucket-icon.svg'),
            label: text('Label', 'BitBucket Logo'),
        },
    },
});
