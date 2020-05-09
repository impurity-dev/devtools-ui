import { SideNavItem } from './../../models/side-nav-item.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'devtools-side-nav-item',
    templateUrl: './side-nav-item.component.html',
    styleUrls: ['./side-nav-item.component.scss'],
})
export class SideNavItemComponent {
    @Input() sideNavItem: SideNavItem;
}
