import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { HomeComponent } from './component/home/home.component';
import { CvRegisterComponent } from './component/cv-register/cv-register.component';
import { PersonalComponent } from './component/personal/personal.component';
import { EducationComponent } from './component/education/education.component';
import { ContactComponent } from './component/contact/contact.component';
import { LanguageComponent } from './component/language/language.component';
import { SkillComponent } from './component/skill/skill.component';
import { ProjectComponent } from './component/project/project.component';
import { ErrorComponent } from './component/error/error.component';
import { LogoutComponent } from './component/logout/logout.component';
import { CvViewComponent } from './component/cv-view/cv-view.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'signin',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'home/:role/:id',
    component: HomeComponent
  },
  {
    path: 'cv-register',
    component: CvRegisterComponent
  },
  {
    path: 'view/cv/:role/:id',
    component: CvViewComponent
  },
  {
    path: ':role/:id/personal',
    component: PersonalComponent
  },
  {
    path: ':role/:id/education',
    component: EducationComponent
  },
  {
    path: ':role/:id/contact',
    component: ContactComponent
  },
  {
    path: ':role/:id/language',
    component: LanguageComponent
  },
  {
    path: ':role/:id/skill',
    component: SkillComponent
  },
  {
    path: ':role/:id/project',
    component: ProjectComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
