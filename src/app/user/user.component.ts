import { Component, OnInit, Input } from '@angular/core';
import { User } from '../interfaces/user';
import { userInfo } from 'os';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    @Input() user: User;
    avatar: string;

    constructor() { }

    ngOnInit() {
        this.avatar = this.user.avatar ? this.user.avatar : './assets/avatar.png';
    }

}
