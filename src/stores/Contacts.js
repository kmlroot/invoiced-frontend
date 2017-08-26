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
}

export default new Contacts();