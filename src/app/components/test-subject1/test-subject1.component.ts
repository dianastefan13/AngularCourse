import { Component, OnInit } from '@angular/core';
import { TestSubjectService } from 'src/app/services/test-subject.service';

@Component({
  selector: 'app-test-subject1',
  templateUrl: './test-subject1.component.html',
  styleUrls: ['./test-subject1.component.css']
})
export class TestSubject1Component implements OnInit {

  constructor(private subjectService: TestSubjectService) { 
    this.subjectService.getSubject().subscribe(x => console.log('test service 1_ ', x));
  }

  ngOnInit() {
  }

}
