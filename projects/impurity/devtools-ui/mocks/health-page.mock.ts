import { text } from '@storybook/addon-knobs';
import { HealthPage } from './../src/lib/pages/health-page/models/health-page.model';
import { mockCustomizableHealthCard, mockHealthCard } from './health-card.mock';

export const mockCustomizableHealthPage = new HealthPage(text('Title', 'Health Page'), text('Url path', 'test-path'), [
    mockCustomizableHealthCard,
    mockCustomizableHealthCard,
    mockCustomizableHealthCard,
    mockCustomizableHealthCard,
    mockCustomizableHealthCard,
    mockCustomizableHealthCard,
    mockCustomizableHealthCard,
    mockCustomizableHealthCard,
]);

export const mockFewHealthLinksHealthPage = new HealthPage('Few links on this page', 'few-links', [mockHealthCard, mockHealthCard]);

export const mockManyHealthLinksHealthPage = new HealthPage('Many links on this page', 'many-links', [
    mockHealthCard,
    mockHealthCard,
    mockHealthCard,
    mockHealthCard,
    mockHealthCard,
    mockHealthCard,
    mockHealthCard,
    mockHealthCard,
    mockHealthCard,
    mockHealthCard,
    mockHealthCard,
    mockHealthCard,
    mockHealthCard,
    mockHealthCard,
    mockHealthCard,
    mockHealthCard,
    mockHealthCard,
    mockHealthCard,
    mockHealthCard,
    mockHealthCard,
    mockHealthCard,
    mockHealthCard,
    mockHealthCard,
    mockHealthCard,
]);
