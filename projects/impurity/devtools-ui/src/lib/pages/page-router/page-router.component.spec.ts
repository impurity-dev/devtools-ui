import { RouterTestingModule } from '@angular/router/testing';
import { RouterService } from './services/router.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PageRouterComponent } from './page-router.component';

describe('PageRouterComponent', () => {
    let component: PageRouterComponent;
    let fixture: ComponentFixture<PageRouterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PageRouterComponent],
            providers: [RouterService],
            imports: [RouterTestingModule],
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
