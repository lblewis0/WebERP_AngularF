import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsChildOneComponent } from './contacts-child-one.component';

describe('ContactsChildOneComponent', () => {
  let component: ContactsChildOneComponent;
  let fixture: ComponentFixture<ContactsChildOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactsChildOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactsChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
