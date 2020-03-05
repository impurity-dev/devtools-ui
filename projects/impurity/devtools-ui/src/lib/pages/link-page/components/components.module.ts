import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { LinkComponent } from './link/link.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [LinkComponent],
    imports: [CommonModule, MatCardModule, MatDividerModule, MatButtonModule],
    exports: [LinkComponent],
})
export class ComponentsModule {}
