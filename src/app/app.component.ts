import { Component } from '@angular/core';
import {Product,productFeatures} from './products/product';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
productField: Product<productFeatures> = {} as Product<productFeatures>;

  parentProductFields(value) {
    console.log(`calling hour recieved from parent is ${JSON.stringify(value)}`)
    this.productField = value;
  }

}
