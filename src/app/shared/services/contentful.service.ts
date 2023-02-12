
import { Injectable } from '@angular/core';
import * as marked from 'marked';

@Injectable({
  providedIn: 'root'
})

export class ContentfulService {


  constructor() {
  }

  markdownToHtml(md: string) {
    return (md != undefined && md != null) ? marked(md): "";
  }

}
