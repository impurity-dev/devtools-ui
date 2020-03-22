import { mockInternalLink, mockCustomizableLink } from './link.mock';
import { text } from '@storybook/addon-knobs';
import { mockCustomizableImage, mockImage } from './image.mock';

export const mockCustomizableLinkCard = {
    image: mockCustomizableImage,
    link: mockCustomizableLink,
    description: text('Optional description', 'Repositories'),
};

export const mockLinkCardWithoutDescription = {
    image: mockImage,
    link: mockInternalLink,
};

export const mockLinkCardWithDescription = {
    ...mockLinkCardWithoutDescription,
    description: 'Sample description',
};
