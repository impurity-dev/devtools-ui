import { NgModule } from '@angular/core';
import { LinkUiModule } from './link-ui/link-ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiComponent } from './ui/ui.component';

@NgModule({
    imports: [LinkUiModule, BrowserAnimationsModule],
    declarations: [UiComponent],
    exports: [UiComponent],
})
export class DevtoolsUiModule {}
