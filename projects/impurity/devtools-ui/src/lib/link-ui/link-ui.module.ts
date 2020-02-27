import { ModelModule } from './model/model.module';
import { ServiceModule } from './service/service.module';
import { PageModule } from './page/page.module';
import { ComponentModule } from './component/component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ComponentModule, ModelModule, PageModule, ServiceModule],
  imports: [
    CommonModule
  ],
  exports: [ComponentModule, ModelModule, PageModule, ServiceModule]
})
export class LinkUiModule { }
