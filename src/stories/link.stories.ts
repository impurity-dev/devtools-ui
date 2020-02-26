import { LinkComponent } from '../../projects/devtools-ui/src/lib/component/link/link.component';
import { storiesOf } from '@storybook/angular';

storiesOf('Link', module)
  .add('Test', () => ({
    component: LinkComponent,
  }));