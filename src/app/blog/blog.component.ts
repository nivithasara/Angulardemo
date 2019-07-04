import { Component, OnInit } from '@angular/core';

import { ListInterface } from './../models/interfaces/list-interface';
import { ListClass } from './../models/classes/list-class';

import { ListServiceService } from './../services/list-service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  listData : ListInterface[] = [new ListClass({
  "id":9,
  "name": "SSSS",
  "description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
  "imageUrl" : "assets/img/blog-medium.jpg",
  "likes": 1, 
  "created_by": "Chloé",
  "created_on": "1/12/2019" 
})];
  listError : string;
  constructor(private ls: ListServiceService) { }

  ngOnInit() {
	  this.getListData();
  }
  
  getListData(){ 
	this.ls.getBlogList().subscribe(
		success => {  
			var response = success.map(item => new ListClass(item));	
			this.listData = response.concat(this.listData); 
		}, 
		error => {
			this.listError = error; 
		}
	);  
  }
}
