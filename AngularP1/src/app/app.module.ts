import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ImgComponent } from './img/img.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { NgModelFormComponent } from './ng-model-form/ng-model-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormWithFormControlComponent } from './form-with-form-control/form-with-form-control.component';
import { FormWithFormGroupComponent } from './form-with-form-group/form-with-form-group.component';
import { FormWithFormBuilderComponent } from './form-with-form-builder/form-with-form-builder.component';
import { ChildrenComponent } from './children/children.component';
import { AddMessagesComponent } from './messages/add-messages/add-messages.component';
import { ListMessagesComponent } from './messages/list-messages/list-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ButtonsComponent,
    ImgComponent,
    TemplateformComponent,
    NgModelFormComponent,
    FormWithFormControlComponent,
    FormWithFormGroupComponent,
    FormWithFormBuilderComponent,
    ChildrenComponent,
    AddMessagesComponent,
    ListMessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
