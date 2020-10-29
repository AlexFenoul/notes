import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  notes = [{ value: 'Exemple de note' }];
  constructor() {}

  addNote(index){
    this.notes.push({value: 'Nouvelle note'});
  }

  spliceArray(index){
    this.notes.splice(index, 1);
  }
}
