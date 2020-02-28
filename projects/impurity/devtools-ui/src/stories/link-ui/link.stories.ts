import { LinkComponent } from './../../lib/link-ui/component/link/link.component';
import { storiesOf } from '@storybook/angular';

storiesOf('Link', module)
    .add('Link with description', () => ({
        component: LinkComponent,
        props: {
            link: {
                url: 'www.google.com',
                label: 'Test Label',
                description: 'This link will be a test and you will enjoy that quality.',
                icon: { image: 'https://via.placeholder.com/75x75', alt: 'image alt' },
            },
        },
    }))
    .add('Link without description', () => ({
        component: LinkComponent,
        props: {
            link: { url: 'www.google.com', label: 'Test Label', icon: { image: 'https://via.placeholder.com/75x75', alt: 'image alt' } },
        },
    }));
