import { ContainersModule } from './../../containers/containers.module';
import { LinkCardComponent } from './components/link-card/link-card.component';
import { LinkCardListComponent } from './components/link-card-list/link-card-list.component';
import { SharedModule } from './../../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { LinkPageComponent } from './link-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

@NgModule({
    declarations: [LinkPageComponent, LinkCardListComponent, LinkCardComponent],
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        SharedModule,
        ContainersModule,
        MatCardModule,
        MatDividerModule,
        MatButtonModule,
        MatIconModule,
    ],
    exports: [LinkPageComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class LinkPageModule {}
