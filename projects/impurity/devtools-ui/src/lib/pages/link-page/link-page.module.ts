import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { LinkComponent } from './components/link/link.component';
import { LinkListComponent } from './components/link-list/link-list.component';
import { LinkPageComponent } from './link-page.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [LinkPageComponent, LinkListComponent, LinkComponent],
    imports: [CommonModule, MatCardModule, MatDividerModule],
    exports: [LinkPageComponent],
})
export class LinkPageModule {}
