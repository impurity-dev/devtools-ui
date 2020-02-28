import { linkWithDescription } from './../../mock/link.mock';
import { LinkPageComponent } from './../../lib/link-ui/page/link-page/link-page.component';
import { storiesOf } from '@storybook/angular';

storiesOf('Link Page', module).add('Link with description', () => ({
    component: LinkPageComponent,
    props: {
        links: [
            linkWithDescription,
            linkWithDescription,
            linkWithDescription,
            linkWithDescription,
            linkWithDescription,
            linkWithDescription,
            linkWithDescription,
            linkWithDescription,
            linkWithDescription,
            linkWithDescription,
            linkWithDescription,
            linkWithDescription,
            linkWithDescription,
        ],
    },
}));
