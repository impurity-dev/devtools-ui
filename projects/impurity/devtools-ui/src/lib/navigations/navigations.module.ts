import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { SideNavComponent } from './side-nav/components/side-nav/side-nav.component';
import { SideNavModule } from './side-nav/side-nav.module';

@NgModule({
    declarations: [],
    imports: [BrowserAnimationsModule, CommonModule, RouterModule, SideNavModule],
    exports: [SideNavComponent],
})
export class NavigationsModule {}
