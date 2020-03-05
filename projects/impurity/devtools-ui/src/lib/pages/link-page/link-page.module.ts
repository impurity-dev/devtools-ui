import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { LinkComponent } from './components/link/link.component';
import { LinkListComponent } from './components/link-list/link-list.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LinkPageComponent } from './link-page.component';

@NgModule({
    declarations: [LinkListComponent, LinkComponent, LinkPageComponent],
    imports: [CommonModule, MatDividerModule, MatCardModule],
    exports: [LinkPageComponent],
})
export class LinkPageModule {}
