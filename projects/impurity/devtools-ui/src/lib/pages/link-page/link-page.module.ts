import { LinkPageComponent } from './link-page.component';
import { ComponentsModule } from './components/components.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [LinkPageComponent],
    imports: [CommonModule, ComponentsModule],
    exports: [LinkPageComponent],
})
export class LinkPageModule {}
