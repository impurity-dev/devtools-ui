import { storiesOf } from '@storybook/angular';
import { DevtoolsUiComponent } from '../lib/devtools-ui.component';

storiesOf('Link', module)
  .add('Test', () => ({
    component: DevtoolsUiComponent,
  }));