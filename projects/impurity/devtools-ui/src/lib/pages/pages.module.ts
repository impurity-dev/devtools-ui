import { PageRouterComponent } from './page-router/page-router.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LinkPageModule } from './link-page/link-page.module';
import { PageRouterModule } from './page-router/page-router.module';

@NgModule({
    imports: [CommonModule, PageRouterModule, LinkPageModule],
    exports: [PageRouterComponent],
})
export class PagesModule {}
