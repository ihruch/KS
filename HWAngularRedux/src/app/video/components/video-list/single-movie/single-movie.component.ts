import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}//


/*

  templateHTML(item) {
    return `<tr >
               <td class='title-video'> 
                  <h2>${item.snippet.title}</h2>
                  <span data-back-btn="back-btn"> Back </span>
               </td>
            </tr>
            <tr>
               <td>              
                 <iframe src="https://www.youtube.com/embed/${item.snippet.resourceId.videoId}"></iframe></td>
            </tr>
            <tr>
               <td class="channel-title">
                 ${item.snippet.channelTitle} 
               </td> 
            </tr>
            <tr>
             <td>
                <p class='block-description' hidden> ${item.snippet.description}</p>
                <div class='btn-show-description'  data-btn-desk='show-desc' > ЕЩЕ ... </div> 
             </td> 
            </tr>
            `
  }

  templateHTMLComments(item) {
    return ` <tr>
               <td>
          <div class="card">
            <div class="card-block">
                <div class="card-media-block">
                    <img src="${item.snippet.topLevelComment.snippet.authorProfileImageUrl}" class="card-media-image">
                    <div class="card-media-description">
                        <span class="card-media-title">
                            ${item.snippet.topLevelComment.snippet.publishedAt}
                        </span>
                        <span class="card-media-text">
                           ${item.snippet.topLevelComment.snippet.authorDisplayName}
                        </span>
                    </div>
                </div>
                <div class="card-text">
                   ${item.snippet.topLevelComment.snippet.textDisplay}
                </div>
            </div>
          </div>
          </td> 
             </tr>
          `

  }
}
*/