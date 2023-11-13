import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsChildTwoComponent } from './contacts-child-two.component';

describe('ContactsChildTwoComponent', () => {
  let component: ContactsChildTwoComponent;
  let fixture: ComponentFixture<ContactsChildTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactsChildTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactsChildTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
