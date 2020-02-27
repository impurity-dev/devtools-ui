import { LinkComponent } from './../lib/link-ui/component/link/link.component';
import { storiesOf } from '@storybook/angular';

storiesOf('Link', module)
  .add('Test', () => ({
    component: LinkComponent,
    props: {
      link: { url: "www.google.com", label: "Test Label" }
    }
  }));