import { Component, Input, Output,EventEmitter } from '@angular/core';
import {Product,productFeatures} from './product';

@Component({
  selector: 'app-product-feature',
  templateUrl: "./product-feature.component.html"
})
export class ProductFeatureComponent {
  @Input() childProductField: Product<productFeatures>;
  @Output() parentProductFields = new EventEmitter<Product<productFeatures>>();

  productField: Product<productFeatures> = {
            id: 1,
            productName: '',
            productCode: '',
            description: '',
            productFeatures: [{
              featureName:"",
              featureAddedDate:"",
              featureDescription:""
          }]
    }


addNewProdField(index: number): void {
    let prod: productFeatures =  {
      "featureName": "",
      "featureAddedDate": "",
      "featureDescription": ""
    } ;
    
    this.productField.productFeatures.push(prod);
    console.log(`In method  addNewProdField field index is ${index} and field is ${JSON.stringify(JSON.stringify( this.productField))}`);
    this.parentProductFields.emit(this.productField);

  }

  removeNewProdField(index: number): void {
    this.productField.productFeatures.splice(index, 1);
    console.log(`In method  addNewProdField field index is ${index}`);
     this.parentProductFields.emit(this.productField);

  }


  

}