import { MatSidenavModule } from '@angular/material/sidenav';
import { PagesModule } from './pages/pages.module';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { DevtoolsUiComponent } from './devtools-ui.component';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    declarations: [DevtoolsUiComponent, SideNavComponent],
    imports: [BrowserAnimationsModule, CommonModule, PagesModule, MatSidenavModule, MatToolbarModule],
    exports: [DevtoolsUiComponent],
})
export class DevtoolsUiModule {}
