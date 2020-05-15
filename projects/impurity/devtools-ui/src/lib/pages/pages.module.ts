import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HealthPageModule } from './health-page/health-page.module';
import { LinkPageModule } from './link-page/link-page.module';
import { PageRouterComponent } from './page-router/page-router.component';
import { PageRouterModule } from './page-router/page-router.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
    imports: [CommonModule, SharedModule, PageRouterModule, LinkPageModule, HealthPageModule],
    exports: [PageRouterComponent],
})
export class PagesModule {}
