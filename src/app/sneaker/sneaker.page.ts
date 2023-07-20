import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sneaker',
  templateUrl: './sneaker.page.html',
  styleUrls: ['./sneaker.page.scss'],
})
export class SneakerPage {

  
    isAlertOpen = false;
    public alertButtons = ['OK'];
  
    setOpen(isOpen: boolean) {
      this.isAlertOpen = isOpen;
    }

}
