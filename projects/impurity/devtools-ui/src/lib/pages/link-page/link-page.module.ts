import { LinkCardComponent } from './components/link-card/link-card.component';
import { LinkCardListComponent } from './components/link-card-list/link-card-list.component';
import { SharedModule } from './../../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { LinkPageComponent } from './link-page.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [LinkPageComponent, LinkCardListComponent, LinkCardComponent],
    imports: [BrowserAnimationsModule, CommonModule, SharedModule, MatCardModule, MatDividerModule, MatButtonModule],
    exports: [LinkPageComponent],
})
export class LinkPageModule {}
