import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsChildThreeComponent } from './contacts-child-three.component';

describe('ContactsChildThreeComponent', () => {
  let component: ContactsChildThreeComponent;
  let fixture: ComponentFixture<ContactsChildThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactsChildThreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactsChildThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
