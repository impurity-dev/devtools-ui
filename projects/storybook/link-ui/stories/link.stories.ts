import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { LinkComponent } from '../../../impurity/devtools-ui/src/lib/link-ui/components/link/link.component';
import { LinkUiModule } from '../../../impurity/devtools-ui/src/lib/link-ui/link-ui.module';
import { linkWithDescription, linkWithoutDescription } from '../mock/link.mock';

export default {
    title: 'Link',
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, LinkUiModule],
        }),
    ],
};

export const WithDescription = () => ({
    component: LinkComponent,
    props: {
        link: linkWithDescription,
    },
});

export const WithoutDescription = () => ({
    component: LinkComponent,
    props: {
        link: linkWithoutDescription,
    },
});
