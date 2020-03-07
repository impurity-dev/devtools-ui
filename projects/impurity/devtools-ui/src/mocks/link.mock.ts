import { text } from '@storybook/addon-knobs';
import { Link } from './../lib/pages/link-page/models/link.model';
import { icon75x75, customizableIcon } from './icon.mock';

export const linkWithoutDescription: Link = {
    url: 'www.google.com',
    label: 'Test Label',
    icon: icon75x75,
};
export const linkWithDescription: Link = {
    ...linkWithoutDescription,
    description: 'This is a super awesome long description that is radical!!!',
};

export const customizableLink: Link = {
    url: text('Link Url', 'www.google.com'),
    label: text('Title', 'BitBucket'),
    description: text('Description', 'My Workspace'),
    icon: customizableIcon,
};
