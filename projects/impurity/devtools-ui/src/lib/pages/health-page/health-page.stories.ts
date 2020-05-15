import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import {
    mockCustomizableHealthPage,
    mockFewHealthLinksHealthPage,
    mockManyHealthLinksHealthPage,
} from './../../../../mocks/health-page.mock';
import { HealthPageComponent } from './health-page.component';
import { HealthPageModule } from './health-page.module';

export default {
    title: 'Pages/Health Page',
    component: HealthPageComponent,
    decorators: [
        moduleMetadata({
            imports: [CommonModule, HealthPageModule, RouterTestingModule],
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
