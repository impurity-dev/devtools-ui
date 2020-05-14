import { Page } from '../../models/page.model';
import { LinkPageComponent } from './../link-page.component';
import { LinkCard } from './link-card.model';

export class LinkPage extends Page {
    linkCards: LinkCard[];

    constructor(title: string, path: string, linkCards: LinkCard[]) {
        super(title, path, LinkPageComponent);
        this.linkCards = linkCards;
    }
}
