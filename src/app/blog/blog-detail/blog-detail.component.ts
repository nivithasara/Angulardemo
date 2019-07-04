import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
	 console.log('Detail', this.route); 
	 console.log('Detail', this.route.snapshot.params); 
	  this.route.paramMap.subscribe(params => {
		console.log(params.params);
	  });
  }

}
