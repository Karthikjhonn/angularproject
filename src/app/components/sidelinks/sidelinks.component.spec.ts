import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidelinksComponent } from './sidelinks.component';

describe('SidelinksComponent', () => {
  let component: SidelinksComponent;
  let fixture: ComponentFixture<SidelinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidelinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidelinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
