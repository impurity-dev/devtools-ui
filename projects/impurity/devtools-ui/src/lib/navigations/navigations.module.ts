import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './components/side-nav/side-nav.component';

@NgModule({
    declarations: [SideNavComponent],
    imports: [BrowserAnimationsModule, CommonModule, RouterModule],
    exports: [SideNavComponent],
})
export class NavigationsModule {}
