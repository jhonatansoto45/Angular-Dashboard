import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemComponent } from './card-item.component';
import { ImagePipe } from '../../../shared/pipe/image.pipe';

describe('CardItemComponent', () => {
  let component: CardItemComponent;
  let fixture: ComponentFixture<CardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardItemComponent, ImagePipe ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
