import { text } from '@storybook/addon-knobs';
import { customizableLink } from './link.mock';
import { Icon } from './../lib/pages/link-page/models/icon.model';

export const icon75x75: Icon = {
    image: 'https://via.placeholder.com/75x75',
    alt: 'image alt',
};

export const customizableIcon: Icon = {
    image: text('Image Link', 'https://cdn.worldvectorlogo.com/logos/bitbucket-icon.svg'),
    alt: text('Image alt', 'BitBucket icon'),
};
