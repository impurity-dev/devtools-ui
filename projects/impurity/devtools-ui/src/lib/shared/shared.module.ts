import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './components/image/image.component';
import { LinkComponent } from './components/link/link.component';

@NgModule({
    declarations: [SideNavComponent, ImageComponent, LinkComponent],
    imports: [CommonModule],
    exports: [SideNavComponent],
})
export class SharedModule {}
