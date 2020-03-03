import { MatCardModule } from '@angular/material/card';
import { LinkPageComponent } from './link-page/link-page.component';
import { LinkComponent } from './link/link.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [LinkComponent, LinkPageComponent],
    imports: [CommonModule, MatCardModule],
    exports: [LinkComponent, LinkPageComponent],
})
export class ComponentsModule {}
