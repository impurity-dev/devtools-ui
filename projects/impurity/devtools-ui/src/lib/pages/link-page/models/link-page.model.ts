import { Page } from '../../models/page.model';
import { LinkPageComponent } from './../link-page.component';
import { LinkCard } from './link-card.model';

export class LinkPage extends Page {
    constructor(title: string, path: string, public readonly linkCards: LinkCard[]) {
        super(title, path, LinkPageComponent);
    }
}
