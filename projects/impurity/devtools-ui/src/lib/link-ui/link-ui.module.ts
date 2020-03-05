import { LinkPageComponent } from './components/link-page/link-page.component';
import { ComponentsModule } from './components/components.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [CommonModule, ComponentsModule],
    exports: [LinkPageComponent],
})
export class LinkUiModule {}
