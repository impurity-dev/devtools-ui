import { NgModule } from '@angular/core';
import { LinkUiModule } from './link-ui/link-ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [LinkUiModule, BrowserAnimationsModule],
})
export class DevtoolsUiModule {}
