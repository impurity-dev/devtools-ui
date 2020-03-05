import { AppsModule } from './apps/apps.module';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [BrowserAnimationsModule, AppsModule],
})
export class DevtoolsUiModule {}
