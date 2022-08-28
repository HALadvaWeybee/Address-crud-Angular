import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddressdataService } from '../addressdata.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss']
})
export class AddAddressComponent implements OnInit {

  constructor(private router: Router, private addressdataService :AddressdataService) { }

  form:FormGroup;
  
  
  ngOnInit(): void{

     this.form = new FormGroup({
        fname: new FormControl('', [Validators.required]),
        lname: new FormControl('', [Validators.required]),
        companyName: new FormControl('', [Validators.required]),
        country :new FormControl('', [Validators.required]),
        streetAdress:new FormControl('', [Validators.required]),
        postcode:new FormControl('', [Validators.required]),
        town:new FormControl('', [Validators.required]),
        state:new FormControl('', [Validators.required]),
        phone:new FormControl('', [Validators.required]),
     })
  }

  submitData() {
    this.addressdataService.setAddressData(this.form.value);
    this.router.navigate(['/addresslist']);
  }

  get formCtrl() {
    return this.form.controls;
  } 
  
  moveToAddressList() {
    this.router.navigate(['addresslist']);
  }
}
