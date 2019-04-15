import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FakeSessionItemService} from '../fake-session-item.service';
import { SessionHttpService } from 'src/app/session-http-service.service';

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})export class SessionItemComponent implements OnInit {
  @Input() session;
  constructor(private sessionItemService: FakeSessionItemService, private sessionhttp: SessionHttpService) { }
  ngOnInit() {
  }
  onDelete() {
  console.log(this.session);
  this.sessionhttp.deleteSession(this.session).subscribe(res => {
    console.log(res);
  }, (err) => {console.log(err); });
  }
}

