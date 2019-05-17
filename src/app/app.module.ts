import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { MessageListComponent } from './message-list/message-list.component';
import { UserComponent } from './user/user.component';
import { MessageComponent } from './message/message.component';
import { MessageFormComponent } from './message-form/message-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    MessageListComponent,
    UserComponent,
    MessageComponent,
    MessageFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
