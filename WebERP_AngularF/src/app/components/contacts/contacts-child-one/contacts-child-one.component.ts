import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacts-child-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacts-child-one.component.html',
  styleUrl: './contacts-child-one.component.scss'
})
export class ContactsChildOneComponent {

}
