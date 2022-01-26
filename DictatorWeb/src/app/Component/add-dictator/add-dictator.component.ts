import { Component, OnInit } from '@angular/core';
import { FormBuilder,  Validators} from '@angular/forms';

@Component({
  selector: 'app-add-dictator',
  templateUrl: './add-dictator.component.html',
  styleUrls: ['./add-dictator.component.css']
})
export class AddDictatorComponent implements OnInit {

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

  onSubmit(): void{
    
  }
}
