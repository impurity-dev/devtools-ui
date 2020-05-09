import { Component, Input } from '@angular/core';
import { SideNavItem } from './../../models/side-nav-item.model';

@Component({
    selector: 'devtools-side-nav-item-list',
    templateUrl: './side-nav-item-list.component.html',
    styleUrls: ['./side-nav-item-list.component.scss'],
})
export class SideNavItemListComponent {
    @Input() sideNavItems: SideNavItem[];

    trackByFn(index: number, sideNavItem: SideNavItem) {
        return index;
    }
}
