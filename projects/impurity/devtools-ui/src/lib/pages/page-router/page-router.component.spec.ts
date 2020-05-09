import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRouterComponent } from './page-router.component';

describe('PageRouterComponent', () => {
    let component: PageRouterComponent;
    let fixture: ComponentFixture<PageRouterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PageRouterComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageRouterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
