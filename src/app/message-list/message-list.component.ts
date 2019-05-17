import { Component, OnInit } from '@angular/core';

import { Message } from '../interfaces/message';
import { User } from '../interfaces/user';

import { MESSAGES } from '../mock-messages';
import { USERS } from '../mock-users'

@Component({
    selector: 'app-message-list',
    templateUrl: './message-list.component.html',
    styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
    messages: Message[] = MESSAGES;
    users: User[] = USERS;

    constructor() { }

    ngOnInit() {
    }

}
