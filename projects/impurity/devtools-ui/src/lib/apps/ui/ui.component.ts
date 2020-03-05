import { LinkPageConfig } from './../../pages/link-page/models/link-page-config.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'devtools-ui',
    templateUrl: './ui.component.html',
    styleUrls: ['./ui.component.scss'],
})
export class UiComponent {
    @Input() linkPageConfig: LinkPageConfig;
}
