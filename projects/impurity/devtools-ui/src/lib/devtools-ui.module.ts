import { SharedModule } from './shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PagesModule } from './pages/pages.module';
import { CommonModule } from '@angular/common';
import { DevtoolsUiComponent } from './devtools-ui.component';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    declarations: [DevtoolsUiComponent],
    imports: [BrowserAnimationsModule, CommonModule, SharedModule, PagesModule, MatSidenavModule, MatToolbarModule],
    exports: [DevtoolsUiComponent],
})
export class DevtoolsUiModule {}
