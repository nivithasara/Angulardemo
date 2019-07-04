import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'; 
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { ListInterface } from './../models/interfaces/list-interface';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {
	
  private baseUrl: string;
  private httpOptions = {
	  headers: new HttpHeaders({
		  'Content-type':'application/json',
		  'Authorization':'AppToken goes here'
	  })
  }
  constructor(private http: HttpClient) { 
  
	this.baseUrl = "assets/data/";
	
  }
    
  private handleError(error: HttpErrorResponse){ 
    var errorStr;
	if(error.error instanceof ErrorEvent){
		// Issue from client end
		errorStr = error.statusText+". Something went wrong. Please check again";  	 
	}	else{
		// Issue from WCS end
		errorStr = "We are experiencing some technical difficulties. Please try again.";  	 
	} 
	return throwError(errorStr);
  }
	 
  getBlogList(){    
	 
	 return this.http.get(this.baseUrl+'list.json')
		.pipe(
	//	 retry(1),
		  catchError(this.handleError)
		);
	  
  }
}
