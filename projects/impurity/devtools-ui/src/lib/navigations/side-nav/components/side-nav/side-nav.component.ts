import { Component, Input } from '@angular/core';
import { SideNavItem } from './../../models/side-nav-item.model';

@Component({
    selector: 'devtools-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
    @Input() sideItems: SideNavItem[];
}
