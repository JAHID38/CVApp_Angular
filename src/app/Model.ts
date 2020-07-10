export class User{
    userId: number;
    password: string;
    role: string;
    username: string;

    constructor(){
    }
}

export class PersonalClass{
    dob: Date;    
    fatherName: string;
    firstName: string;
    gender: string;
    lastName: string;
    motherName: string;
    userId: number;

}

export class EducationClass{
    degree: number;
    gpa: string;
    institute: string;
    major: string;
    passingYear: string;
    userId: number;
}

export class ContactClass{
    
    email: string;
    mobile: string;
    presendAddress: string;
    userId: number;
    website: string;
}

export class LanguageClass{

    language: string;
    userId: number;
}

export class SkillClass{

    skill: string;
    userId: number;

}

export class ProjectClass{
    
    description: string;
    link: string;
    projectName: string;
    userId: number;

}