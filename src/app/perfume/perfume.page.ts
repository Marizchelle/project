import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfume',
  templateUrl: './perfume.page.html',
  styleUrls: ['./perfume.page.scss'],
})
export class PerfumePage  {

  isAlertOpen = false;
    public alertButtons = ['OK'];
  
    setOpen(isOpen: boolean) {
      this.isAlertOpen = isOpen;
    }

}
