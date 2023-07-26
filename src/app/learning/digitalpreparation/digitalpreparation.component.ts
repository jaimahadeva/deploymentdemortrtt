import { Component, OnInit } from '@angular/core';
import { digiAddnewQ1 } from './digiAddnewQ1';
import { Router } from '@angular/router';
//  import { LearningserviceService } from '../learningservice.service';
import { learningcourse } from './learningcourse';
import { addNewTopic } from './addnewTopic';
import { addnewContent } from './addnewContent';
  import { LearninglocalserviceService } from '../learninglocalservice.service';

@Component({
  selector: 'app-digitalpreparation',
  templateUrl: './digitalpreparation.component.html',
  styleUrls: ['./digitalpreparation.component.css']
})


export class DigitalpreparationComponent implements OnInit {

  digiAdd:any=new addnewContent();

  addnewcourse:any=new learningcourse();
  addnewTopi:any=new addNewTopic();
  digiQuestions:any=[];
  constructor( 
//  private preptalksservice:LearningserviceService,
 private preptalksservice:LearninglocalserviceService,
   
    private router:Router ) { }

  ngOnInit(): void {
    this.getdigiQuestions();
    this.getAllCourses()
  }
  // service calls starts here 
  onsibmit(){  
     alert("thank you "+ this.digiAdd.questions+ " For the registration")
    //  while service
    this.digiAdd.courseId= this.addnewContentArray.courseId;
    this.digiAdd.topicId=this.addnewContentArray.topicId
    //  this.preptalksservice.addnewdigiQuestion(this.digiAdd).subscribe(data=>{
    //   this.getdigiQuestions();
    //  })
    //  while deploying empty

 }
  getdigiQuestions(){
    // while service
    // this.preptalksservice.getDigitalQuestions().subscribe(data=>{
    // while Deploying
    this.digiQuestions= this.preptalksservice.getDigitalQuestions()
      // this.digiQuestions=data;
      
    // })

    
    
  }

  allCourseNames:any=[];
  getAllCourses(){
    // while service
    // this.preptalksservice.getAllCourses().subscribe(data=>{
      // while Deploying
  this.allCourseNames= this.preptalksservice.getAllCourses()
    // this.allCourseNames=data;
    this.getAllTopics();
  //  })
    
  }
   addnewCourses(){
    // this.preptalksservice.AddNewCourse(this.addnewcourse).subscribe(data=>{
    //   this.getAllCourses();
    //  })

   }
   allTopicNames:any=[];
  getAllTopics(){
    // while service
    // this.preptalksservice.AllTopicNames().subscribe(data=>{
    //   this.allTopicNames=data;
    //   console.log("älltopics",data)
    //  })

     // while Deploying
     this.allTopicNames=this.preptalksservice.AllTopicNames()
 }
 addNewTopic(){
  // while service
  // this.addnewTopi.courseId= this.clickedCourseName
  // this.preptalksservice.addNewTopics(this.addnewTopi).subscribe(data=>{
  //   this.getAllTopics()
  // })

 }

 getAllContent(){
  // while service
  // this.preptalksservice.AllTopicNames().subscribe(data=>{
  //   this.allTopicNames=data;
  //   console.log("älltopics",data)
  //  })

   // while Deploying
    this.allTopicNames=this.preptalksservice.AllTopicNames()
}
addNewContent(){
// while service
// this.addnewTopi.courseId= this.clickedCourseName
// this.preptalksservice.addNewTopics(this.addnewTopi).subscribe(data=>{
//   this.getAllTopics()
// })

}
   




  // service calls ends here 




















  // local calls starts here 
  clickedCourseName:number=0;
  getClickedCourse(courses:any){
    this.clickedCourseName=courses.courseId;
    console.log("courseId",this.clickedCourseName)
  }
  addnewContentArray:any={}
  getClickedTopicName(topicNames:any){
    this.addnewContentArray.courseId=topicNames.courseId;
    this.addnewContentArray.topicId=topicNames.topicId;
    console.log("1", this.addnewContentArray)
  }
  makeAddnewTrue:boolean=false;
  makeAddTopicTrue(){
    this.makeAddnewTrue=true;
  }
  showAnswer(questions:any){
    questions.view=!questions.view;
  }
 
  // local calls ends here 


}
