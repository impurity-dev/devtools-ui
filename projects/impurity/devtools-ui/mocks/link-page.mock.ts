import { text } from '@storybook/addon-knobs';
import { LinkPage } from './../src/lib/pages/link-page/models/link-page.model';
import { mockCustomizableLinkCard, mockLinkCardWithDescription, mockLinkCardWithoutDescription } from './link-card.mock';

export const customizableLinkPage = new LinkPage(text('Title', 'Health Page'), text('Url path', 'test-path'), [
    mockCustomizableLinkCard,
    mockCustomizableLinkCard,
    mockCustomizableLinkCard,
    mockCustomizableLinkCard,
    mockCustomizableLinkCard,
    mockCustomizableLinkCard,
    mockCustomizableLinkCard,
    mockCustomizableLinkCard,
]);

export const noDescriptionLinkPage = new LinkPage('No links with description on this page', 'no-description-links', [
    mockLinkCardWithoutDescription,
    mockLinkCardWithoutDescription,
    mockLinkCardWithoutDescription,
    mockLinkCardWithoutDescription,
]);

export const descriptionLinkPage = new LinkPage('Links with description on this page', 'description-links', [
    mockLinkCardWithDescription,
    mockLinkCardWithDescription,
    mockLinkCardWithDescription,
    mockLinkCardWithDescription,
]);

export const fewLinksLinkPage = new LinkPage('Few links on this page', 'few-links', [
    mockLinkCardWithDescription,
    mockLinkCardWithDescription,
]);

export const manyLinksLinkPage = new LinkPage('Many links on this page', 'many-links', [
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
]);
