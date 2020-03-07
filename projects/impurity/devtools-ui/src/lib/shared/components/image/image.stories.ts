import { text } from '@storybook/addon-knobs';
import { ImageComponent } from './image.component';
import { SharedModule } from './../../shared.module';
import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';

export default {
    title: 'Image',
    decorators: [
        moduleMetadata({
            imports: [CommonModule, SharedModule],
        }),
    ],
};

export const CustomizableImage = () => ({
    component: ImageComponent,
    props: {
        href: text('Image Link', 'https://cdn.worldvectorlogo.com/logos/bitbucket-icon.svg'),
        alt: text('Image Alt', 'BitBucket Logo'),
    },
});
