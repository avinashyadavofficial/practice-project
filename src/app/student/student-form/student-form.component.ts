import { Component,Output,EventEmitter } from '@angular/core';
import { FormGroup ,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  @Output() newStudent=new EventEmitter<string>();
  @Output() studentAge=new EventEmitter<number>();
  @Output() studentData = new EventEmitter<{ name: string; age: number }>();


  // studentName='';
  // reset(){
  //   this.studentName='';
  // }
  // submit(){
  //   if(this.studentName){
  //     this.newStudent.emit(this.studentName);
  //     this.studentName='';
  //   }
  // }
  //using reactive forms
  studentForm=new FormGroup({
    name:new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z ]+$')
    ]),
    age:new FormControl(0,[
      Validators.required,
      Validators.maxLength(3),
      Validators.min(1),
      Validators.pattern('^[0-9]+$')
    ])
  });
  onSubmit(){
      this.newStudent.emit(this.studentForm.value.name || '');
      this.studentAge.emit(this.studentForm.value.age || 0);
      this.studentForm.reset();
    
  }
  
}
