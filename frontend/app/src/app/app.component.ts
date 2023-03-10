import { Component } from '@angular/core';
import { ethers } from 'ethers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  blockNumber: number | string | undefined = 0;

  constructor() {
    const provider = ethers.getDefaultProvider('goerli');
    provider.getBlock('latest').then((block) => {
      this.blockNumber = block.number;
    });
  }

  clearBlock(){
    this.blockNumber = undefined
  }
}
