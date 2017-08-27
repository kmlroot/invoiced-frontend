import { observable, action } from 'mobx';

class Contacts {
  @observable all = [
    { id: 1, name: 'Mauricio Serna', email: 'mauricioserf@gmail.com' },
    { id: 2, name: 'Leigh Halliday', email: 'leigh@gmail.com' },
    { id: 3, name: 'Marian Serna', email: 'marian@gmail.com' },
  ];

  @action add(data) {
    const existing = this.all;
    this.all = existing.concat(data);
  }

  @action find(contactId) {
    return (
      this.all.slice().filter(
        contact => contact.id === parseInt(contactId, 10)
      )[0]
    );
  }

  @action remove(contactId) {
    const existing = this.all;
    this.all = existing.filter(
      contact => contact.id !== contactId
    );
  }
}

export default new Contacts();