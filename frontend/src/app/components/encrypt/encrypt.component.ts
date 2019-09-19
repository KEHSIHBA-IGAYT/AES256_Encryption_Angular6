import { Component, OnInit } from '@angular/core';
import { EncryptService } from '../../encrypt.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { enRes } from '../../models/encrypt';

@Component({
  selector: 'app-encrypt',
  templateUrl: './encrypt.component.html',
  styleUrls: ['./encrypt.component.css']
})
export class EncryptComponent implements OnInit {

  createForm: FormGroup;
  EnRes: enRes;

  constructor(private encryptService: EncryptService, private fb: FormBuilder, private router: Router) { 
    this.createForm = this.fb.group({
      text: ['', Validators.required],
      result: ''
    });
  }

  encryptText(text) {
    this.encryptService.encryptText(text).subscribe((res:enRes) => { 
      this.EnRes = res;
      console.log(this.EnRes.encrypted);
      this.createForm.get('result').setValue(this.EnRes.encrypted);
    });
  }

  ngOnInit() {
  }

}
