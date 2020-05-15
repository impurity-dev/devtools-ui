import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { SideNavItemListComponent } from './components/side-nav-item-list/side-nav-item-list.component';
import { SideNavItemComponent } from './components/side-nav-item/side-nav-item.component';
import { SideNavRoutingModule } from './side-nav-routing.module';
import { SideNavComponent } from './side-nav.component';

@NgModule({
    declarations: [SideNavComponent, SideNavItemComponent, SideNavItemListComponent],
    imports: [CommonModule, SideNavRoutingModule, MatListModule],
    exports: [SideNavComponent],
})
export class SideNavModule {}
