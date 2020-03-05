import { UiComponent } from './../lib/apps/ui/ui.component';
import { AppsModule } from './../lib/apps/apps.module';
import { linkWithDescription } from './../mocks/link.mock';
import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';

export default {
    title: 'Devtools Ui',
    decorators: [
        moduleMetadata({
            imports: [CommonModule, AppsModule],
        }),
    ],
};

export const ConfigurablePage = () => ({
    component: UiComponent,
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
            ],
        },
    },
});
