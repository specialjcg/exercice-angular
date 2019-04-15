import { Component, OnInit } from '@angular/core';
import {Session} from '../session';
import {FakeSessionItemService} from '../fake-session-item.service';
import {ActivatedRoute} from '@angular/router';
import { SessionHttpService } from 'src/app/session-http-service.service';
import { Observable} from 'rxjs';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-session-edit-form',
  templateUrl: './session-edit-form.component.html',
  styleUrls: ['./session-edit-form.component.css']
})
export class SessionEditFormComponent implements OnInit {
id: { toString: { (): string; (): string; }; };
private sub: any;
session: any;
tracks = ['MEAN', 'Angular',
    'NodeJS', 'Android', 'Swift', 'Xamarin'];

  constructor(private route: ActivatedRoute, private sessionItemService: FakeSessionItemService, private  sessionhttp: SessionHttpService) { }
    ngOnInit() {

      this.sub = this.route.params.subscribe(params => {
      this.id = params.id.toString(); // (+) converts string 'id' to a number
    });
      console.log('Session ID ' + this.id.toString());
    // this.session = this.sessionhttp.getBook(this.id);
      this.sessionhttp.getSession(this.id.toString())
    .subscribe(data => {
      console.log(data);
      this.session = data;
     // console.log('aaaaaaaaaaaaaaaaaaa'+ this.session['name']);
      // this.session = data;
    });

    // console.log(this.sessionhttp.getBook(this.id).pipe());
  }
  editsess(session1) {
    const datePipe = new DatePipe('en - FR');
    const essai = datePipe.transform(session1, 'd MM yy');
    return essai;
  }
editSession(sessionItem) {
    // console.log(sessionItem);
    console.log(sessionItem);
    // sessionItem._id = this.id;
    // console.log('Session ID’ + sessionItem._id);
    // tslint:disable-next-line:whitespace
    this.sessionhttp.updateSession(this.id,sessionItem).subscribe(res => {
        console.log(res);
      }, (err) => {
        console.log(err);
      });

  }
}
