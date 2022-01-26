import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DicService } from 'src/app/services/dic.service';

@Component({
  selector: 'app-add-dictator',
  templateUrl: './add-dictator.component.html',
  styleUrls: ['./add-dictator.component.css']
})
export class AddDictatorComponent implements OnInit {

  constructor(private fb: FormBuilder, private dicServ: DicService) {}

  ngOnInit(): void {
  }

  addDicForm = this.fb.group({
    DicFName: ['', Validators.required],
    DicLName: ['', Validators.required],
    DicBYear: ['', Validators.required],
    DicDYear: [''],
    DicDesc: ['', Validators.required]
  })

  onSubmit(): void{
    console.log(this.addDicForm.value)
    this.dicServ.addDictator(this.addDicForm.value).subscribe();
  }
}
