import { ComponentModule } from './../component/component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkPageComponent } from './link-page/link-page.component';

@NgModule({
    declarations: [LinkPageComponent],
    imports: [CommonModule, ComponentModule],
    exports: [LinkPageComponent]
})
export class PageModule {}
