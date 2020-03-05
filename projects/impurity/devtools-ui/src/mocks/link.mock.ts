import { Link } from './../lib/pages/link-page/models/link.model';
import { icon75x75 } from './icon.mock';

export const linkWithoutDescription: Link = {
    url: 'www.google.com',
    label: 'Test Label',
    icon: icon75x75,
};
export const linkWithDescription: Link = {
    ...linkWithoutDescription,
    description: 'This is a super awesome long description that is radical!!!',
};
