import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  notes = ['Exemple de note'];
  constructor() {}

  addNote(){
    this.notes.push('Nouvelle note');
  }
}
