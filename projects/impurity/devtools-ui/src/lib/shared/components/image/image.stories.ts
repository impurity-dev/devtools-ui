import { mockCustomizableImage } from './../../../../../mocks/image.mock';
import { ImageComponent } from './image.component';
import { SharedModule } from './../../shared.module';
import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';

export default {
    title: 'Shared/Image',
    component: ImageComponent,
    decorators: [
        moduleMetadata({
            imports: [CommonModule, SharedModule],
        }),
    ],
};

export const CustomizableImage = () => ({
    component: ImageComponent,
    props: {
        image: mockCustomizableImage,
    },
});
