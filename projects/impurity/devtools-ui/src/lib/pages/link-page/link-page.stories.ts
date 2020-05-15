import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import {
    customizableLinkPage,
    descriptionLinkPage,
    fewLinksLinkPage,
    manyLinksLinkPage,
    noDescriptionLinkPage,
} from './../../../../mocks/link-page.mock';
import { LinkPageComponent } from './link-page.component';
import { LinkPageModule } from './link-page.module';

export default {
    title: 'Pages/Link Page',
    component: LinkPageComponent,
    decorators: [
        moduleMetadata({
            imports: [CommonModule, LinkPageModule, RouterTestingModule],
        }),
    ],
};

export const Customizable = () => ({
    component: LinkPageComponent,
    props: {
        linkPage: customizableLinkPage,
    },
});

export const WithDescriptions = () => ({
    component: LinkPageComponent,
    props: {
        linkPage: descriptionLinkPage,
    },
});

export const WithoutDescriptions = () => ({
    component: LinkPageComponent,
    props: {
        linkPage: noDescriptionLinkPage,
    },
});

export const FewLinks = () => ({
    component: LinkPageComponent,
    props: {
        linkPage: fewLinksLinkPage,
    },
});

export const ManyLink = () => ({
    component: LinkPageComponent,
    props: {
        linkPage: manyLinksLinkPage,
    },
});
