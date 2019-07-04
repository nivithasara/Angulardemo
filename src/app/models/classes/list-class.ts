import { ListInterface } from './../interfaces/list-interface';

export class ListClass {
	
	id: number;
	name: string;
	description: string;
	imageUrl: string;
	likes: number; 
	created_by: string;
	created_on: string;
	
	constructor(object: ListClass){
		//console.log(object);
		this.id = object.id;
		this.name = object.name;
		this.description = object.description;
		this.imageUrl = object.imageUrl;
		this.likes = object.likes; 
		this.created_by = object.created_by;
		this.created_on = object.created_on;  
	}


}