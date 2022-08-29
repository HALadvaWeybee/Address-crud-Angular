import { Injectable } from '@angular/core';
import { Team } from './team';

@Injectable({
  providedIn: 'root'
})

export class TeamdataService {
  constructor() { 
    this.teamArray = JSON.parse(localStorage.getItem('teamlist')) || [];
  }
  
  teamArray:Team[] = [];
  editObject:any= {};
  addDataInLocalStorage(form: Team) {
     console.log("myForm", form);
     this.teamArray.push({
        id:this.teamArray.length + 1,
        teamName:form.teamName,
        employees:[...form.employees],
     });
     this.upDateInLocalStorage();
  } 

  getTeamDataInService(id:number) {
     const arr = this.teamArray.filter(ele => ele.id == id);
     this.editObject = {
        id:arr[0].id,
        teamName: arr[0].teamName,
        employees: arr[0].employees,
     }
  }

  upDateInLocalStorage() {
    const lists = [];
    this.teamArray.forEach((ele) => {
      lists.push(ele);
    });
    localStorage.setItem('teamlist', JSON.stringify(lists));
  }
}
