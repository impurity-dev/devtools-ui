import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { SideNavComponent } from './side-nav.component';
import { SideNavItemComponent } from './components/side-nav-item/side-nav-item.component';
import { SideNavItemListComponent } from './components/side-nav-item-list/side-nav-item-list.component';

@NgModule({
    declarations: [SideNavComponent, SideNavItemComponent, SideNavItemListComponent],
    imports: [CommonModule, RouterModule.forRoot([])],
    providers: [{ provide: APP_BASE_HREF, useValue: '' }],
    exports: [SideNavComponent],
})
export class SideNavModule {}
