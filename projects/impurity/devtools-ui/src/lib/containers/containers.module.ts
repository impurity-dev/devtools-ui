import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContainerComponent } from './components/page-container/page-container.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationContainerComponent } from './components/navigation-container/navigation-container.component';

@NgModule({
    declarations: [PageContainerComponent, NavigationContainerComponent],
    imports: [CommonModule, MatToolbarModule],
    exports: [PageContainerComponent],
})
export class ContainersModule {}
