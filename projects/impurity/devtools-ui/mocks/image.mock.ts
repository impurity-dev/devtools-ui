import { text } from '@storybook/addon-knobs';

export const mockCustomizableImage = {
    src: text('Image src', 'https://cdn.worldvectorlogo.com/logos/bitbucket-icon.svg'),
    alt: text('Image alt', 'BitBucket icon'),
};

export const mockImage = {
    src: 'https://cdn.worldvectorlogo.com/logos/bitbucket-icon.svg',
    alt: 'Sample alt 1',
};
