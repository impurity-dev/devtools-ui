import { DevtoolsUiComponent } from '@impurity/devtools-ui';
import { storiesOf } from '@storybook/angular';

storiesOf('Link', module)
  .add('Test', () => ({
    component: DevtoolsUiComponent,
  }));