import { linkWithoutDescription, linkWithDescription } from './../../mock/link.mock';
import { LinkComponent } from './../../lib/link-ui/component/link/link.component';
import { storiesOf } from '@storybook/angular';

storiesOf('Link', module)
    .add('Description', () => ({
        component: LinkComponent,
        props: {
            link: linkWithDescription,
        },
    }))
    .add('No description', () => ({
        component: LinkComponent,
        props: {
            link: linkWithoutDescription,
        },
    }));
