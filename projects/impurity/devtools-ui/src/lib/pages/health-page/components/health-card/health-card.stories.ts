import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { mockCustomizableHealthCard } from './../../../../../../mocks/health-card.mock';
import { HealthPageModule } from './../../health-page.module';
import { HealthCardComponent } from './health-card.component';

export default {
    title: 'Pages/Health Page/Health Card',
    component: HealthCardComponent,
    decorators: [
        moduleMetadata({
            imports: [CommonModule, HealthPageModule],
        }),
    ],
};

export const Configurable = () => ({
    component: HealthCardComponent,
    props: {
        healthCard: mockCustomizableHealthCard,
    },
});
