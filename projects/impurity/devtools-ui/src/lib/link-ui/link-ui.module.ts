import { ComponentModule } from './component/component.module';
import { ServiceModule } from './service/service.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageModule } from './page/page.module';

@NgModule({
    imports: [CommonModule, PageModule, ServiceModule, ComponentModule],
})
export class LinkUiModule {}
