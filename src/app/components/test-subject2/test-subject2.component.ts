import { Component, OnInit } from '@angular/core';
import { TestSubjectService } from 'src/app/services/test-subject.service';

@Component({
  selector: 'app-test-subject2',
  templateUrl: './test-subject2.component.html',
  styleUrls: ['./test-subject2.component.css']
})
export class TestSubject2Component implements OnInit {

  constructor(private subjectService: TestSubjectService) { 
    //this.subjectService.subscribe();
  }

  okClick(){
    this.subjectService.getSubject().next(3);
  }

  ngOnInit() {
  }

}
