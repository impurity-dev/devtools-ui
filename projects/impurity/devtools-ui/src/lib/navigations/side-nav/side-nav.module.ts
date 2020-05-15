import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { SideNavItemListComponent } from './components/side-nav-item-list/side-nav-item-list.component';
import { SideNavItemComponent } from './components/side-nav-item/side-nav-item.component';
import { SideNavComponent } from './side-nav.component';

@NgModule({
    declarations: [SideNavComponent, SideNavItemComponent, SideNavItemListComponent],
    imports: [CommonModule, SharedModule, RouterModule, MatListModule, MatRippleModule],
    exports: [SideNavComponent],
})
export class SideNavModule {}
