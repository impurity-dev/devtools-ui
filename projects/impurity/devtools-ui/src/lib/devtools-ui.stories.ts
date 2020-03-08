import { LinkPage } from './pages/link-page/models/link-page.model';
import { text } from '@storybook/addon-knobs';
import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { DevtoolsUiComponent } from './../lib/devtools-ui.component';
import { DevtoolsUiModule } from './../lib/devtools-ui.module';
import { customizableLinkCard, linkCardWithDescription, linkCardWithoutDescription } from '../../mocks/link-card.mock';

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
        linkPages: [
            {
                title: text('Link Page title', 'Developer workspace'),
                linkCards: [
                    customizableLinkCard,
                    customizableLinkCard,
                    customizableLinkCard,
                    customizableLinkCard,
                    customizableLinkCard,
                    customizableLinkCard,
                    customizableLinkCard,
                    customizableLinkCard,
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
                linkCards: [linkCardWithDescription, linkCardWithDescription],
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
                    linkCardWithoutDescription,
                    linkCardWithoutDescription,
                    linkCardWithoutDescription,
                    linkCardWithoutDescription,
                    linkCardWithoutDescription,
                    linkCardWithoutDescription,
                    linkCardWithoutDescription,
                    linkCardWithoutDescription,
                    linkCardWithoutDescription,
                    linkCardWithoutDescription,
                    linkCardWithoutDescription,
                    linkCardWithoutDescription,
                    linkCardWithoutDescription,
                    linkCardWithoutDescription,
                    linkCardWithoutDescription,
                    linkCardWithoutDescription,
                    linkCardWithoutDescription,
                    linkCardWithoutDescription,
                    linkCardWithoutDescription,
                    linkCardWithoutDescription,
                    linkCardWithoutDescription,
                    linkCardWithoutDescription,
                    linkCardWithoutDescription,
                    linkCardWithoutDescription,
                ],
            } as LinkPage,
        ],
    },
});
