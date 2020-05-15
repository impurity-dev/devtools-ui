import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forRoot([])],
    providers: [{ provide: APP_BASE_HREF, useValue: '' }],
    exports: [RouterModule],
})
export class SideNavRoutingModule {}
