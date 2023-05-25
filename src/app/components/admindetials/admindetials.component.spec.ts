import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindetialsComponent } from './admindetials.component';

describe('AdmindetialsComponent', () => {
  let component: AdmindetialsComponent;
  let fixture: ComponentFixture<AdmindetialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindetialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmindetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
