import { LinkComponent } from '../../projects/devtools-ui/src/lib/components/link/link.component';
import { storiesOf } from '@storybook/angular';

storiesOf('Link', module)
  .add('Test', () => ({
    component: LinkComponent,
    props: {
      link: { url: 'apples', label: 'oranges' }
    }
  }));