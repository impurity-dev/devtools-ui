import { MatCardModule } from '@angular/material/card';
import { LinkComponent } from './link/link.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [LinkComponent],
    imports: [CommonModule, MatCardModule],
    exports: [LinkComponent],
})
export class ComponentsModule {}
