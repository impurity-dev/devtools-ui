import { Page } from './../../../shared/models/page.model';
import { LinkCard } from './link-card.model';

export interface LinkPage extends Page {
    linkCards: LinkCard[];
}
