import { ComponentMock } from './../../../../../mocks/component.mock';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageComponent } from './image.component';

class ImageComponentMock extends ComponentMock<ImageComponent> {
    set imageSrc(value: string) {
        this.component.image.src = value;
    }

    set imageAlt(value: string) {
        this.component.image.alt = value;
    }

    get imageSrc(): string {
        this.fixture.detectChanges();
        return this.compiled.querySelector('img').src;
    }

    get imageAlt(): string {
        this.fixture.detectChanges();
        return this.compiled.querySelector('img').alt;
    }
}

describe('ImageComponent', () => {
    let component: ImageComponent;
    let fixture: ComponentFixture<ImageComponent>;
    let page: ImageComponentMock;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ImageComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ImageComponent);
        component = fixture.componentInstance;
        component.image.src = 'oranges';
        component.image.alt = 'grapes';
        page = new ImageComponentMock(component, fixture);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should set link href', () => {
        page.imageSrc = 'oranges';
        expect(page.imageSrc).toContain('oranges');
    });

    it('should set link label', () => {
        page.imageAlt = 'grapes';
        expect(page.imageAlt).toContain('grapes');
    });
});
