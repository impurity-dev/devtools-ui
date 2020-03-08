import Link from './../src/lib/shared/models/link';
import Image from './../src/lib/shared/models/image';
import { text, boolean } from '@storybook/addon-knobs';

export const customizableLinkCard = {
    image: {
        src: text('Image src', 'https://cdn.worldvectorlogo.com/logos/bitbucket-icon.svg'),
        alt: text('Image alt', 'BitBucket icon'),
    } as Image,
    link: {
        href: text('Link href', 'www.google.com'),
        label: text('Link alt', 'Google link'),
        isInternal: boolean('Internal', false),
    } as Link,
    description: text('Optional description', 'Repositories'),
};

export const linkCardWithoutDescription = {
    image: {
        src: 'https://cdn.worldvectorlogo.com/logos/bitbucket-icon.svg',
        alt: 'Sample alt 1',
    } as Image,
    link: {
        href: 'www.google.com',
        label: 'Sample alt 2',
    } as Link,
};

export const linkCardWithDescription = {
    ...linkCardWithoutDescription,
    description: 'Sample description',
};
