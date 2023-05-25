import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSubcontentComponent } from './text-subcontent.component';

describe('TextSubcontentComponent', () => {
  let component: TextSubcontentComponent;
  let fixture: ComponentFixture<TextSubcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextSubcontentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextSubcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
