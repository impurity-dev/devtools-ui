import { LinkPage } from './pages/link-page/models/link-page.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'devtools-ui',
    templateUrl: './devtools-ui.component.html',
    styleUrls: ['./devtools-ui.component.scss'],
})
export class DevtoolsUiComponent {
    @Input() linkPages: LinkPage[];
}
