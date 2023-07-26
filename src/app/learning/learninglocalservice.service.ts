import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LearninglocalserviceService {

  constructor() { }
  getDigitalQuestions(){
    // http://localhost:8080/preptalk/topics/Allcontents
    const data=[{"contentId":1,"courseId":0,"topicId":0,"questions":"tdhytrtry","answers":"tytytryterytytyy"},{"contentId":2,"courseId":1,"topicId":1,"questions":"tdhytrtry","answers":"tytytryterytytyy"},{"contentId":3,"courseId":0,"topicId":0,"questions":null,"answers":null},{"contentId":4,"courseId":0,"topicId":0,"questions":null,"answers":null},{"contentId":5,"courseId":0,"topicId":0,"questions":null,"answers":null},{"contentId":6,"courseId":0,"topicId":0,"questions":null,"answers":null},{"contentId":7,"courseId":0,"topicId":0,"questions":null,"answers":null},{"contentId":8,"courseId":0,"topicId":0,"questions":null,"answers":null},{"contentId":9,"courseId":0,"topicId":0,"questions":null,"answers":null},{"contentId":10,"courseId":0,"topicId":0,"questions":null,"answers":null},{"contentId":11,"courseId":0,"topicId":0,"questions":null,"answers":null},{"contentId":12,"courseId":0,"topicId":0,"questions":null,"answers":null},{"contentId":13,"courseId":1,"topicId":1,"questions":"r4te56y","answers":"teryertyery"},{"contentId":14,"courseId":1,"topicId":1,"questions":"gwert","answers":"wertwet\nrtgrwet\nrt\n\ntr\nt\nrt\n\nrt\nr\nt\nrt\n\nrt\nrt\nr\nt\nretrrrrtttttttttttttttttttttttttttttt\nrt\nttttttttttttttttttttttttttttttttttttttttttttt"},{"contentId":15,"courseId":1,"topicId":1,"questions":null,"answers":"wertwet rtgrwet rt tr t rt rt r t rt rt rt r t retrrrrtttttttttttttttttttttttttttttt rt tttttttttttttttttttttttttttttttttttttttttttttasffffsssssssssss"},{"contentId":16,"courseId":1,"topicId":1,"questions":"wwrwrwr","answers":"wertwet rtgrwet rt tr t rt rt r t rt rt rt r t retrrrrtttttttttttttttttttttttttttttt rt tttttttttttttttttttttttttttttttttttttttttttttasffffsssssssssss"},{"contentId":17,"courseId":2,"topicId":10,"questions":"WHAT IS JAVA BRO ?","answers":"Indentation refers to the spaces at the beginning of a code line.\n\nWhere in other programming languages the indentation in code is for readability only, the indentation in Python is very important.\n\nPython uses indentation to indicate a block of code."},{"contentId":18,"courseId":2,"topicId":10,"questions":"WHAT IS JAVA BRO ?","answers":"Indentation refers to the spaces at the beginning of a code line.\n\nWhere in other programming languages the indentation in code is for readability only, the indentation in Python is very important.\n\nPython uses indentation to indicate a block of code."},{"contentId":19,"courseId":2,"topicId":10,"questions":"WHAT IS JAVA BRO ?","answers":"Indentation refers to the spaces at the beginning of a code line.\n\nWhere in other programming languages the indentation in code is for readability only, the indentation in Python is very important.\n\nPython uses indentation to indicate a block of code."}]
     return data
  }
  getAllCourses(){
    // http://localhost:8080/preptalk/learning/learningcourses
    const data=
    [{"courseId":1,"courseName":"Angular"},{"courseId":2,"courseName":"Java"},{"courseId":3,"courseName":"postgresSql"},{"courseId":4,"courseName":"postgresSql"},{"courseId":5,"courseName":"postgresSql"},{"courseId":6,"courseName":"postgresSql"},{"courseId":7,"courseName":"HTML"},{"courseId":8,"courseName":"CSS"},{"courseId":9,"courseName":"ANGULAR"},{"courseId":10,"courseName":"ANGULAR"},{"courseId":11,"courseName":"postgres"},{"courseId":12,"courseName":"WFTTTTS"},{"courseId":13,"courseName":"ANKITA"},{"courseId":14,"courseName":"ANKITA"},{"courseId":15,"courseName":"ANKITA"},{"courseId":16,"courseName":"ANKITA"},{"courseId":17,"courseName":"DHANAKO_O"}]
    return data
  }
  AllTopicNames(){
    // http://localhost:8080/preptalk/topics/AllTopics
    const data=
    [{"topicId":1,"courseId":1,"topicName":"iopuiop"},{"topicId":2,"courseId":1,"topicName":"ANGULAR!"},{"topicId":3,"courseId":1,"topicName":"ANGULAR!"},{"topicId":4,"courseId":1,"topicName":"ANGULAR!"},{"topicId":5,"courseId":1,"topicName":"ANGULAR!"},{"topicId":6,"courseId":1,"topicName":"ANGULAR!"},{"topicId":7,"courseId":1,"topicName":"ANGULAR!"},{"topicId":8,"courseId":1,"topicName":"ANGULAR!"},{"topicId":9,"courseId":2,"topicName":"JAVA!"},{"topicId":10,"courseId":2,"topicName":"JAVA2"},{"topicId":11,"courseId":2,"topicName":"JAVA3"},{"topicId":12,"courseId":2,"topicName":"JAVA4"},{"topicId":13,"courseId":2,"topicName":"JAVA4"},{"topicId":14,"courseId":2,"topicName":"JAVA4"},{"topicId":15,"courseId":2,"topicName":"JAVA4"},{"topicId":16,"courseId":2,"topicName":"JAVA4"},{"topicId":17,"courseId":2,"topicName":"JAVA4"},{"topicId":18,"courseId":2,"topicName":"JAVA4"}]
    return data
  }
  
}
