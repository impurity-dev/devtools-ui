import { Component, Input } from '@angular/core';
import { LinkUiConfig } from '../../../models/link-ui-config.model';

@Component({
    selector: 'devtools-link-page',
    templateUrl: './link-page.component.html',
    styleUrls: ['./link-page.component.scss'],
})
export class LinkPageComponent {
    @Input() config: LinkUiConfig;
}
