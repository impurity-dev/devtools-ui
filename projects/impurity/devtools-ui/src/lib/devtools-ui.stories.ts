import { CommonModule } from '@angular/common';
import { text } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { mockCustomizableImage } from './../../mocks/image.mock';
import { mockCustomizableLinkCard, mockLinkCardWithDescription, mockLinkCardWithoutDescription } from './../../mocks/link-card.mock';
import { DevtoolsUiComponent } from './../lib/devtools-ui.component';
import { DevtoolsUiModule } from './../lib/devtools-ui.module';
import { LinkPage } from './pages/link-page/models/link-page.model';

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
        linkPages: [
            {
                title: text('Link Page title', 'Developer workspace'),
                linkCards: [
                    mockCustomizableLinkCard,
                    mockCustomizableLinkCard,
                    mockCustomizableLinkCard,
                    mockCustomizableLinkCard,
                    mockCustomizableLinkCard,
                    mockCustomizableLinkCard,
                    mockCustomizableLinkCard,
                    mockCustomizableLinkCard,
                ],
            } as LinkPage,
        ],
    },
});

export const FewLinks = () => ({
    component: DevtoolsUiComponent,
    props: {
        linkPages: [
            {
                title: 'Few links on this page',
                linkCards: [mockLinkCardWithDescription, mockLinkCardWithDescription],
            } as LinkPage,
        ],
    },
});

export const ManyLink = () => ({
    component: DevtoolsUiComponent,
    props: {
        linkPages: [
            {
                title: 'Many links on this page',
                linkCards: [
                    mockLinkCardWithoutDescription,
                    mockLinkCardWithoutDescription,
                    mockLinkCardWithoutDescription,
                    mockLinkCardWithoutDescription,
                    mockLinkCardWithoutDescription,
                    mockLinkCardWithoutDescription,
                    mockLinkCardWithoutDescription,
                    mockLinkCardWithoutDescription,
                    mockLinkCardWithoutDescription,
                    mockLinkCardWithoutDescription,
                    mockLinkCardWithoutDescription,
                    mockLinkCardWithoutDescription,
                    mockLinkCardWithoutDescription,
                    mockLinkCardWithoutDescription,
                    mockLinkCardWithoutDescription,
                    mockLinkCardWithoutDescription,
                    mockLinkCardWithoutDescription,
                    mockLinkCardWithoutDescription,
                    mockLinkCardWithoutDescription,
                    mockLinkCardWithoutDescription,
                    mockLinkCardWithoutDescription,
                    mockLinkCardWithoutDescription,
                    mockLinkCardWithoutDescription,
                    mockLinkCardWithoutDescription,
                ],
            } as LinkPage,
        ],
    },
});
