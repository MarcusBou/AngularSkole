import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dictator-register',
  templateUrl: './dictator-register.component.html',
  styleUrls: ['./dictator-register.component.css']
})
export class DictatorRegisterComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {
  }

  DicRegistration = this.fb.group({
    DicFName: ['', Validators.required],
    DicLName: ['', Validators.required],
    DicBYear: ['', Validators.required],
    DicDYear: [''],
    DicDesc: ['', Validators.required] 
  })


  onSubmit():void{

  }
}
