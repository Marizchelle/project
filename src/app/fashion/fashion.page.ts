import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.page.html',
  styleUrls: ['./fashion.page.scss'],
})
export class FashionPage {

  isAlertOpen = false;
    public alertButtons = ['OK'];
  
    setOpen(isOpen: boolean) {
      this.isAlertOpen = isOpen;
    }

}
