import { NgModule } from '@angular/core';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ImageComponent } from './components/image/image.component';
import { LinkComponent } from './components/link/link.component';

@NgModule({
    declarations: [ImageComponent, LinkComponent],
    imports: [CommonModule, RouterModule.forRoot([])],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    exports: [ImageComponent, LinkComponent],
})
export class SharedModule {}
