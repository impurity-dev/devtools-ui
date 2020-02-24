import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [],
  imports: [
    ComponentsModule,
    PagesModule
  ],
  exports: [
    ComponentsModule,
    PagesModule
  ]
})
export class DevtoolsUiModule { }
