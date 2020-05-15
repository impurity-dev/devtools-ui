import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SideNavModule } from './side-nav/side-nav.module';

@NgModule({
    imports: [BrowserAnimationsModule, CommonModule, SideNavModule],
    exports: [SideNavComponent],
})
export class NavigationsModule {}
