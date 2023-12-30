import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePhoneListComponent } from './mobile-phone-list.component';

describe('MobilePhoneListComponent', () => {
  let component: MobilePhoneListComponent;
  let fixture: ComponentFixture<MobilePhoneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilePhoneListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobilePhoneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
