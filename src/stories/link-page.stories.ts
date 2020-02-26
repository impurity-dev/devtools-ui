import { LinkPageComponent } from './../../projects/devtools-ui/src/lib/pages/link-page/link-page.component';
import { storiesOf } from '@storybook/angular';

storiesOf('Link Page', module)
  .add('Test', () => ({
    component: LinkPageComponent,
    props: {
      links: [{ url: 'apples', label: 'oranges' }, { url: 'apples', label: 'oranges' }]
    }
  }));