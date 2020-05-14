import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { mockCustomizableHealthCard } from './../../../../mocks/health-card.mock';
import {
    mockFewHealthLinksHealthPage,
    mockManyHealthLinksHealthPage,
    mockCustomizableHealthPage,
} from './../../../../mocks/health-page.mock';
import { HealthPageComponent } from './health-page.component';
import { HealthPageModule } from './health-page.module';

export default {
    title: 'Pages/Health Page',
    component: HealthPageComponent,
    decorators: [
        moduleMetadata({
            imports: [CommonModule, HealthPageModule],
        }),
    ],
};

export const Customizable = () => ({
    component: HealthPageComponent,
    props: {
        healthPage: mockCustomizableHealthPage,
    },
});

export const ManyHealthCards = () => ({
    component: HealthPageComponent,
    props: {
        healthPage: mockManyHealthLinksHealthPage,
    },
});

export const FewHealthCards = () => ({
    component: HealthPageComponent,
    props: {
        healthPage: mockFewHealthLinksHealthPage,
    },
});
