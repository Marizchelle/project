import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gadget',
  templateUrl: './gadget.page.html',
  styleUrls: ['./gadget.page.scss'],
})
export class GadgetPage {

  isAlertOpen = false;
    public alertButtons = ['OK'];
  
    setOpen(isOpen: boolean) {
      this.isAlertOpen = isOpen;
    }
}
