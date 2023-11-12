import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class DbContactsService {

  contacts: Contact[] = [
    {
      firstname: 'Louis',
      lastname: 'Boeckmans',
      phone: null,
      cellphone: 495724810,
      mail: 'louis.boeckmans@outlook.com',
      street: 'Quai de Gaulle',
      nstreet: 17,
      box: '051',
      postalcode: 4020,
      locality: 'Liege'
    },
    {
      firstname: 'Carole',
      lastname: 'Maziers',
      phone: null,
      cellphone: 498735522,
      mail: 'carole.maziers@outlook.com',
      street: 'Bassinnes',
      nstreet: 6,
      box: null,
      postalcode: 5372,
      locality: 'Mean'
    }
  ];
    
  constructor() { }

  getOneById(index: number) : Contact
  {
    return this.contacts[index];
  }

  getAll() : Contact[]
  {
    return this.contacts;
  }

  createOne(contact: Contact) : void
  {
    this.contacts.push(contact);
  }

  updateOneById(index: number, contact: Contact) : void
  {
    this.contacts[index] = contact;
  }

  deleteOneById(index: number) : void
  {
    this.contacts.splice(index, 1);
  }
}
