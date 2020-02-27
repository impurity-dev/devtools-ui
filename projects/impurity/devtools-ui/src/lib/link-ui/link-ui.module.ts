import { ServiceModule } from './service/service.module';
import { PageModule } from './page/page.module';
import { ComponentModule } from './component/component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [ComponentModule, PageModule, ServiceModule]
})
export class LinkUiModule { }
