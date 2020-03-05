import { LinkUiModule } from '../../../impurity/devtools-ui/src/lib/link-ui/link-ui.module';
import { CommonModule } from '@angular/common';
import { linkWithDescription, linkWithoutDescription } from '../mock/link.mock';
import { LinkPageComponent } from '../../../impurity/devtools-ui/src/lib/link-ui/components/link-page/link-page.component';
import { moduleMetadata } from '@storybook/angular';

export default {
    title: 'Link Page',
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, LinkUiModule],
        }),
    ],
};

export const WithDescriptions = () => ({
    component: LinkPageComponent,
    props: {
        links: [
            linkWithDescription,
            linkWithDescription,
            linkWithDescription,
            linkWithDescription,
            linkWithDescription,
            linkWithDescription,
        ],
    },
});

export const WithoutDescriptions = () => ({
    component: LinkPageComponent,
    props: {
        links: [
            linkWithoutDescription,
            linkWithoutDescription,
            linkWithoutDescription,
            linkWithoutDescription,
            linkWithoutDescription,
            linkWithoutDescription,
        ],
    },
});
