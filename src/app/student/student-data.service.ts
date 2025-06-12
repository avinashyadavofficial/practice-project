import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; 
@Injectable({
  providedIn: 'root'
})
export class StudentDataService {
  private studentList:string[]=[];

  addStudent(name:string){
    this.studentList.push(name);
    localStorage.setItem('students',JSON.stringify(this.studentList));
  }
  // getStudents(): string[] {
  //   const saved = localStorage.getItem('students');
  //   if (saved) {
  //     this.studentList = JSON.parse(saved);
  //   }
  //   return this.studentList;
  // }
  getStudents(): Observable<string[]> {
    const saved = localStorage.getItem('students');
    if (saved) {
      this.studentList = JSON.parse(saved);
    }
    return of(this.studentList); //of() is an RxJS method that turns any value into an observable.
  }
  clearStudents(){
    this.studentList=[];
    localStorage.removeItem('students');
  }
  constructor() { }
}
