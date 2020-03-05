import { LinkPageComponent } from './link-page/link-page.component';
import { LinkPageModule } from './link-page/link-page.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule, LinkPageModule],
    exports: [LinkPageComponent],
})
export class PagesModule {}
