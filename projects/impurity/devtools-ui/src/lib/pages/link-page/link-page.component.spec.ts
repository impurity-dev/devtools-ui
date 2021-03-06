import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LinkPageComponent } from './link-page.component';

describe('LinkPageComponent', () => {
    let component: LinkPageComponent;
    let fixture: ComponentFixture<LinkPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LinkPageComponent],
            imports: [RouterTestingModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LinkPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
