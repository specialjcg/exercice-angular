import { Component, OnInit } from '@angular/core';
import {FakeSessionItemService} from '../fake-session-item.service';
import { SessionHttpService } from 'src/app/session-http-service.service';
@Component({
  selector: 'app-session-add-form',
  templateUrl: './session-add-form.component.html',
  styleUrls: ['./session-add-form.component.css']
})
export class SessionAddFormComponent implements OnInit {

  constructor(private sessionItemService: FakeSessionItemService, private  sessionhttp: SessionHttpService) { }
  ngOnInit() {
  }
addSession(sessionItem) {
    console.log(sessionItem.name);
    const session = {
     name: sessionItem.name,
    theme: sessionItem.track,
    date: sessionItem.date,
    duree: sessionItem.duree,
    adress: sessionItem.adress,
    participants: sessionItem.participants,
    isCompleted: false
    };

    this.sessionhttp.addSession(session).subscribe(res => {
        console.log(res);
      }, (err) => {
        console.log(err);
      });
  }
}
