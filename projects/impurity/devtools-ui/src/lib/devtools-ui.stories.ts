import { CommonModule } from '@angular/common';
import { text } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { mockCustomizableImage } from './../../mocks/image.mock';
import { customizableLinkPage, fewLinksLinkPage, manyLinksLinkPage } from './../../mocks/link-page.mock';
import { DevtoolsUiComponent } from './../lib/devtools-ui.component';
import { DevtoolsUiModule } from './../lib/devtools-ui.module';

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
        title: text('App title', 'Personal Application'),
        icon: mockCustomizableImage,
        pages: [customizableLinkPage],
    },
});

export const NoPages = () => ({
    component: DevtoolsUiComponent,
    props: {
        pages: [],
    },
});

export const FewLinks = () => ({
    component: DevtoolsUiComponent,
    props: {
        pages: [fewLinksLinkPage],
    },
});

export const ManyLink = () => ({
    component: DevtoolsUiComponent,
    props: {
        pages: [manyLinksLinkPage],
    },
});
