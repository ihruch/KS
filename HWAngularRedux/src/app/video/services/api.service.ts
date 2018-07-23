import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {
  apiURLChannel: string =
    'https://www.googleapis.com/youtube/v3/channels?id=UCVBErcpqaokOf4fI5j73K_w&key=AIzaSyCM2ZSrhTrmFJykFo0VZz7oPmqIfVvSI2Q&part=contentDetails';
  apiURLPlayList: string =
    'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyCM2ZSrhTrmFJykFo0VZz7oPmqIfVvSI2Q&maxResults=10&playlistId='; //${listID}
  apiURLComments: string =
    'https://www.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key=AIzaSyCM2ZSrhTrmFJykFo0VZz7oPmqIfVvSI2Q&maxResults=10&videoId='; //${videoID}`;

  constructor(private http: HttpClient) {}

  getDataChannel() {
    return this.http.get(this.apiURLChannel);
  }

  getDataPlayList(id) {
    return this.http.get(`${this.apiURLPlayList}${id}`);
  }

  getDataComments() {}
}
