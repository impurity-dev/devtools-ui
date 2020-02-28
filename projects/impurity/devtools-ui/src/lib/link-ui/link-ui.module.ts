import { ComponentsModule } from './components/components.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [CommonModule, ComponentsModule],
})
export class LinkUiModule {}
