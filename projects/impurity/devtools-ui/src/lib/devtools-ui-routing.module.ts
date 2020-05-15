import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forRoot([], { useHash: true })],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    exports: [RouterModule],
})
export class DevtoolsUiRoutingModule {}
