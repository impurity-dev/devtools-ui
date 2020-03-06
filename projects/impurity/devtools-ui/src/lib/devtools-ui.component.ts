import { LinkPageConfig } from './pages/link-page/models/link-page-config.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'devtools-ui',
    templateUrl: './devtools-ui.component.html',
    styleUrls: ['./devtools-ui.component.scss'],
})
export class DevtoolsUiComponent {
    @Input() linkPageConfig: LinkPageConfig;
}
