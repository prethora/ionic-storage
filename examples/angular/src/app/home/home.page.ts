import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

import IonicSecureStorageDriver from '@ionic-enterprise/secure-storage/driver';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private storage: Storage) {
  }

  ionViewWillEnter() {
    this.storage.defineDriver(IonicSecureStorageDriver);
    this.storage.create();
    this.storage.setEncryptionKey('fake');
  }

  async setValue() {
    await this.storage.set('name', 'Max');
  }

  async getValue() {
    const value = await this.storage.get('name');
    console.log('Got value', value);
  }

}