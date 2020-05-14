import { HealthCard } from './../src/lib/pages/health-page/models/health-card.model';
import { mockInternalLink, mockCustomizableLink } from './link.mock';
import { text } from '@storybook/addon-knobs';
import { mockCustomizableImage, mockImage } from './image.mock';

export const mockCustomizableHealthCard = {
    title: text('Page title', 'Customizable Health Page'),
    endpoint: text('Health Endpoint', 'test'),
} as HealthCard;

export const mockHealthCard = {
    title: 'Test title',
    endpoint: 'testUrl',
} as HealthCard;
