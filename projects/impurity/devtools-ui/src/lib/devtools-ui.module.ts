import { DevtoolsUiRoutingModule } from './devtools-ui-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainersModule } from './containers/containers.module';
import { DevtoolsUiComponent } from './devtools-ui.component';
import { NavigationsModule } from './navigations/navigations.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [DevtoolsUiComponent],
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        DevtoolsUiRoutingModule,
        SharedModule,
        PagesModule,
        NavigationsModule,
        ContainersModule,
        MatSidenavModule,
        MatToolbarModule,
    ],
    exports: [DevtoolsUiComponent],
})
export class DevtoolsUiModule {}
