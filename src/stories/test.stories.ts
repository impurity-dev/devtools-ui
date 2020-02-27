import { storiesOf } from '@storybook/angular';
import { DevtoolsUiComponent } from '../../projects/impurity/devtools-ui/src/lib/devtools-ui.component';

storiesOf('Link', module)
  .add('Test', () => ({
    component: DevtoolsUiComponent,
  }));