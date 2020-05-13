import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './../../shared/shared.module';
import { ContainersModule } from './../../containers/containers.module';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthPageComponent } from './health-page.component';
import { HealthCardListComponent } from './components/health-card-list/health-card-list.component';
import { HealthCardComponent } from './components/health-card/health-card.component';

@NgModule({
    declarations: [HealthPageComponent, HealthCardListComponent, HealthCardComponent],
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
    exports: [HealthPageComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class HealthPageModule {}
