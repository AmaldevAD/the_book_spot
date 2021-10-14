import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {



  constructor() { }



  public categories = [{ Name: 'Messi', Image: 'data:image/jpeg;base64,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',
Description:'Messi is the best player in the world' ,IsChecked:false},
{Name:'Cristiano',Image:'https://e7.pngegg.com/pngimages/566/296/png-clipart-christiano-ronaldo-cristiano-ronaldo-real-madrid-c-f-portugal-national-football-team-uefa-champions-league-manchester-united-f-c-portugal-face-head-thumbnail.png',
Description:'Best International player of all time',IsChecked:false}]

onButton(category:any)
{
  category.IsChecked=true;
}



  ngOnInit(): void {
  }

}
