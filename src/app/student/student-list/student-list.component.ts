import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

    @Input() students: string[] = [];

    today=new Date(); // date pipe
     constructor() {
    console.log('constructor - component created');
  }

  ngOnInit(): void {
    console.log('ngOnInit - component initialized');
    // could fetch or filter data here
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges - input changed', changes);
    // maybe update something if input changed
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit - DOM ready');
    // perfect for animations or focusing input
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy - cleanup before destroy');
    // useful for unsubscribing, clearing intervals
  }
   
}
