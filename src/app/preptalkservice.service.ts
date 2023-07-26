import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreptalkserviceService {
private baseUrl="http://localhost:8080/preptalk/v1"
  constructor(private httpclient:HttpClient) { }

  // getting the data from table 
  getDigitalQuestions():Observable<PreptalkserviceService[]>{
  return this.httpclient.get<PreptalkserviceService[]>(`${this.baseUrl}`+"/digitalquestions")
  }
  //adding a new data from table 
  addnewdigiQuestion(digiAdd:PreptalkserviceService):Observable<Object>{
    return this.httpclient.post(`${this.baseUrl}`+"/digitalquestions",digiAdd);
  }
}
