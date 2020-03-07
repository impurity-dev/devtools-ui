import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { LinkComponent } from './components/link/link.component';
import { LinkListComponent } from './components/link-list/link-list.component';
import { LinkPageComponent } from './link-page.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [LinkPageComponent, LinkListComponent, LinkComponent],
    imports: [BrowserAnimationsModule, CommonModule, MatCardModule, MatDividerModule, MatButtonModule],
    exports: [LinkPageComponent],
})
export class LinkPageModule {}
