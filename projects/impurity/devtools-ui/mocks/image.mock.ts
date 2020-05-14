import { text } from '@storybook/addon-knobs';
import Image from '../src/lib/shared/models/image.model';

export const mockCustomizableImage = {
    src: text('Image src', 'https://cdn.worldvectorlogo.com/logos/bitbucket-icon.svg'),
    alt: text('Image alt', 'BitBucket icon'),
} as Image;

export const mockImage = {
    src: 'https://cdn.worldvectorlogo.com/logos/bitbucket-icon.svg',
    alt: 'Sample alt 1',
} as Image;
