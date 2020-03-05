import { PagesModule } from './../pages/pages.module';
import { UiComponent } from './ui/ui.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [UiComponent],
    imports: [CommonModule, PagesModule],
    exports: [UiComponent],
})
export class AppsModule {}
