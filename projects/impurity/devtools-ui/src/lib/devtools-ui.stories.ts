import { CommonModule } from '@angular/common';
import { text } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { mockFewHealthLinksHealthPage, mockManyHealthLinksHealthPage, mockHealthPage } from './../../mocks/health-page.mock';
import { mockCustomizableImage } from './../../mocks/image.mock';
import { fewLinksLinkPage, mockLinkPage } from './../../mocks/link-page.mock';
import { DevtoolsUiComponent } from './../lib/devtools-ui.component';
import { DevtoolsUiModule } from './../lib/devtools-ui.module';

export default {
    title: 'Devtools Ui',
    component: DevtoolsUiComponent,
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
        pages: [mockLinkPage, mockHealthPage],
    },
});

export const NoPages = () => ({
    component: DevtoolsUiComponent,
    props: {
        pages: [],
    },
});
