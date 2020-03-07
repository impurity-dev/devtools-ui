import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { DevtoolsUiComponent } from './../lib/devtools-ui.component';
import { DevtoolsUiModule } from './../lib/devtools-ui.module';
import { customizableLink, linkWithDescription } from './../mocks/link.mock';

export default {
    title: 'Devtools Ui',
    decorators: [
        moduleMetadata({
            imports: [CommonModule, DevtoolsUiModule],
        }),
    ],
};

export const ConfigurablePage = () => ({
    component: DevtoolsUiComponent,
    props: {
        linkPageConfig: {
            links: [
                customizableLink,
                customizableLink,
                customizableLink,
                customizableLink,
                customizableLink,
                customizableLink,
                customizableLink,
                customizableLink,
            ],
        },
    },
});

export const FewLinks = () => ({
    component: DevtoolsUiComponent,
    props: {
        linkPageConfig: {
            links: [linkWithDescription, linkWithDescription],
        },
    },
});

export const ManyLink = () => ({
    component: DevtoolsUiComponent,
    props: {
        linkPageConfig: {
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
    },
});
