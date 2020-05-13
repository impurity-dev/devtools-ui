import { HealthCardListComponent } from './health-card-list.component';
import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { mockCustomizableHealthCard } from '../../../../../../mocks/health-card.mock';
import { HealthPageModule } from '../../health-page.module';

export default {
    title: 'Pages/Health Page/Health Card',
    component: HealthCardListComponent,
    decorators: [
        moduleMetadata({
            imports: [CommonModule, HealthPageModule],
        }),
    ],
};

export const Configurable = () => ({
    component: HealthCardListComponent,
    props: {
        healthCards: [mockCustomizableHealthCard],
    },
});

export const FewCards = () => ({
    component: HealthCardListComponent,
    props: {
        healthCards: [mockCustomizableHealthCard, mockCustomizableHealthCard],
    },
});

export const ManyCards = () => ({
    component: HealthCardListComponent,
    props: {
        healthCards: [
            mockCustomizableHealthCard,
            mockCustomizableHealthCard,
            mockCustomizableHealthCard,
            mockCustomizableHealthCard,
            mockCustomizableHealthCard,
            mockCustomizableHealthCard,
            mockCustomizableHealthCard,
            mockCustomizableHealthCard,
            mockCustomizableHealthCard,
            mockCustomizableHealthCard,
            mockCustomizableHealthCard,
            mockCustomizableHealthCard,
            mockCustomizableHealthCard,
            mockCustomizableHealthCard,
            mockCustomizableHealthCard,
            mockCustomizableHealthCard,
            mockCustomizableHealthCard,
            mockCustomizableHealthCard,
            mockCustomizableHealthCard,
        ],
    },
});
