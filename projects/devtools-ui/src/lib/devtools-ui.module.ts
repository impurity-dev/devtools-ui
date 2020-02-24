import { PageModule } from './page/page.module';
import { ComponentModule } from './component/component.module';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [],
  imports: [
    ComponentModule,
    PageModule
  ],
  exports: [
    ComponentModule,
    PageModule
  ]
})
export class DevtoolsUiModule { }
