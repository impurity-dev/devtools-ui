import { boolean, text } from '@storybook/addon-knobs';
import Link from '../src/lib/shared/models/link';

export const mockCustomizableLink: Link = {
    href: text('Link href', 'www.google.com'),
    label: text('Link alt', 'Google link'),
    isInternal: boolean('Internal', false),
};

export const mockInternalLink: Link = {
    href: 'www.google.com',
    label: 'Sample alt 2',
};

export const mockExternalLink: Link = {
    href: 'www.google.com',
    label: 'Sample alt 2',
};
