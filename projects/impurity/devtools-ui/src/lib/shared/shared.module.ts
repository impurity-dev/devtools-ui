import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ImageComponent } from './components/image/image.component';
import { LinkComponent } from './components/link/link.component';

@NgModule({
    declarations: [ImageComponent, LinkComponent],
    imports: [CommonModule, RouterModule],
    exports: [ImageComponent, LinkComponent],
})
export class SharedModule {}
