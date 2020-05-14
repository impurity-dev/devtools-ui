import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainersModule } from './../../containers/containers.module';
import { SharedModule } from './../../shared/shared.module';
import { HealthCardListComponent } from './components/health-card-list/health-card-list.component';
import { HealthCardComponent } from './components/health-card/health-card.component';
import { HealthPageComponent } from './health-page.component';

@NgModule({
    declarations: [HealthPageComponent, HealthCardListComponent, HealthCardComponent],
    imports: [BrowserAnimationsModule, CommonModule, SharedModule, ContainersModule, MatCardModule],
    exports: [HealthPageComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class HealthPageModule {}
