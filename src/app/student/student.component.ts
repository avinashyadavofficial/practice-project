import { Component,OnInit,ViewChild} from '@angular/core';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDataService } from './student-data.service';
import { HighlightDirective } from '../shared/highlight.directive';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent  implements OnInit{
  // @ViewChild(StudentFormComponent) formComponent!:StudentFormComponent;
  // clearFormFromParent(){
  //   this.formComponent.reset();//calling child method
  // }

  
  studentList:string[]=[];
  constructor(private studentService:StudentDataService){}
   ngOnInit(): void {
      this.studentService.getStudents().subscribe((studentsFromService)=>
      this.studentList=studentsFromService);
      this.createCustomObservable();
  }
  addStudent(name:string){
    this.studentService.addStudent(name);

    this.studentService.getStudents().subscribe((students)=>
    this.studentList=students);
  }
  // ngOnInit(): void {
  //     this.studentList=this.studentService.getStudents();
  //     this.createCustomObservable();
  // }
  // addStudent(name:string){
  //   console.log('Adding Student',name);
  //   this.studentService.addStudent(name);
  //   this.studentList=this.studentService.getStudents();
  // }
  clearStudents(){
    this.studentService.clearStudents();
    this.studentList=[];
  }

  //Below was without implementing services
  // ngOnInit(): void {
  //   const saved=localStorage.getItem('students');
  //   if(saved){
  //     this.studentList=JSON.parse(saved);
  //   }
  // }
  // addStudent(name:string){
  //   this.studentList.push(name);
  //   localStorage.setItem('students',JSON.stringify(this.studentList));
  // }
  // clearStudents(){
  //   this.studentList=[];
  //   localStorage.removeItem('students');
  // }

  createCustomObservable() {
  //  Create observable
  const myObservable = new Observable<string>((observer) => {
    observer.next('Student 1');
    observer.next('Student 2');
    observer.next('Student 3');
    observer.error('An error occurred'); //tells: error occurred
    observer.complete(); //tells: all done
  });
  //subscribe
  myObservable.subscribe({
    next: (data) => console.log('Received:', data),
    error: (err) => console.error('Error:', err),
    complete: () => console.log('All data received')
  });
}
showList:boolean=true;
toggleList(){
  this.showList=!this.showList;
}
findAge(age:number){
  console.log(age);
}


}
