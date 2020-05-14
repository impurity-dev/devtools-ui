import { LinkCard } from './../src/lib/pages/link-page/models/link-card.model';
import { mockInternalLink, mockCustomizableLink } from './link.mock';
import { text } from '@storybook/addon-knobs';
import { mockCustomizableImage, mockImage } from './image.mock';

export const mockCustomizableLinkCard = {
    image: mockCustomizableImage,
    link: mockCustomizableLink,
    description: text('Optional description', 'Repositories'),
} as LinkCard;

export const mockLinkCardWithoutDescription = {
    image: mockImage,
    link: mockInternalLink,
} as LinkCard;

export const mockLinkCardWithDescription = {
    ...mockLinkCardWithoutDescription,
    description: 'Sample description',
} as LinkCard;
