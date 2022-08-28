import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddressdataService } from '../addressdata.service';
import { AddressType } from '../address';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.scss'],
})
export class EditAddressComponent implements OnInit {
  constructor(
    private addressdataService: AddressdataService,
    private router: Router
  ) {}

  editForm: FormGroup;
  dataGetFromAddressList: AddressType = {
    id: null,
    fname: '',
    lname: '',
    companyName: '',
    country: '',
    streetAdress: '',
    postcode: null,
    town: '',
    state: '',
    phone: null,
  };
  ngOnInit(): void {
    this.dataGetFromAddressList = this.addressdataService.editObject;
    this.editForm = new FormGroup({
      fname: new FormControl('', [Validators.required]),
      lname: new FormControl('', [Validators.required]),
      companyName: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      streetAdress: new FormControl('', [Validators.required]),
      postcode: new FormControl('', [Validators.required]),
      town: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
    });
  }

  editData() {
    this.addressdataService.editDataInLocalStorage(
      this.dataGetFromAddressList.id,
      this.editForm.value
    );
    this.router.navigate(['addresslist']);
  }

  moveToAddressList() {
    this.router.navigate(['addresslist']);
  }
}
