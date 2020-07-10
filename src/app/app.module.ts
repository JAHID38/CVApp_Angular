import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { HomeComponent } from './component/home/home.component';
import { CvRegisterComponent } from './component/cv-register/cv-register.component';
import { PersonalComponent } from './component/personal/personal.component';
import { CvViewComponent } from './component/cv-view/cv-view.component';
import { EducationComponent } from './component/education/education.component';
import { ProjectComponent } from './component/project/project.component';
import { SkillComponent } from './component/skill/skill.component';
import { LanguageComponent } from './component/language/language.component';
import { ContactComponent } from './component/contact/contact.component';
import { HeaderComponent } from './component/header/header.component';
import { ErrorComponent } from './component/error/error.component';
import { LogoutComponent } from './component/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    CvRegisterComponent,
    PersonalComponent,
    CvViewComponent,
    EducationComponent,
    ProjectComponent,
    SkillComponent,
    LanguageComponent,
    ContactComponent,
    HeaderComponent,
    ErrorComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
