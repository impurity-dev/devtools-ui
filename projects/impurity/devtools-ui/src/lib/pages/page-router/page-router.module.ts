import { HealthPageComponent } from './../health-page/health-page.component';
import { LinkPageComponent } from './../link-page/link-page.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageRouterComponent } from './page-router.component';

@NgModule({
    declarations: [PageRouterComponent],
    imports: [CommonModule, RouterModule],
    exports: [PageRouterComponent],
    entryComponents: [LinkPageComponent, HealthPageComponent],
})
export class PageRouterModule {}
