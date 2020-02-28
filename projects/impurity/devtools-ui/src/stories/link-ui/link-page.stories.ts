import { LinkPageComponent } from './../../lib/link-ui/page/link-page/link-page.component';
import { storiesOf } from '@storybook/angular';

storiesOf('Link Page', module).add('Link with description', () => ({
    component: LinkPageComponent,
    props: {
        link: { url: 'www.google.com', label: 'Test Label', description: 'This link will be a test and you will enjoy that quality.' },
        icon: { image: 'https://via.placeholder.com/75x75', alt: 'image alt' },
    },
}));
