import { linkWithDescription } from './../../link-ui/mock/link.mock';
import { DevtoolsUiModule } from './../../../impurity/devtools-ui/src/lib/devtools-ui.module';
import { UiComponent } from './../../../impurity/devtools-ui/src/lib/ui/ui.component';
import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';

export default {
    title: 'Devtools Ui',
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, DevtoolsUiModule],
        }),
    ],
};

export const ConfigurablePage = () => ({
    component: UiComponent,
    props: {
        linkUiConfig: {
            links: [
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
