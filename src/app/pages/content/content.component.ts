import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  private id: number | null = 0;

  contentImgCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      //console.log(value.get('id');
      const paramId = value.get('id') ? value.get('id') : '0';
      if (paramId) {
        this.id = parseInt(paramId);
      }
    });

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: number | null) {
    const result = dataFake.filter((article) => article.id == id)[0];

    console.log('dataFake \n', result);

    if (result) {
      this.contentImgCover = result.photo;
      this.contentTitle = result.title;
      this.contentDescription = result.description;
    }
  }
}
