import { LinkPageConfig } from './models/link-page-config.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'devtools-link-page',
    templateUrl: './link-page.component.html',
    styleUrls: ['./link-page.component.scss'],
})
export class LinkPageComponent {
    @Input() config: LinkPageConfig;
}
