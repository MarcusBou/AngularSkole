import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { empty } from 'rxjs';
import { DicService } from 'src/app/services/dic.service';
import { HandleDicService } from 'src/app/services/handle-dic.service';

@Component({
  selector: 'app-add-dictator',
  templateUrl: './add-dictator.component.html',
  styleUrls: ['./add-dictator.component.css']
})
export class AddDictatorComponent implements OnInit {

  constructor(private fb: FormBuilder, private dicServ: DicService, private hdc: HandleDicService) {}

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
    window.location.reload();
  }
}
