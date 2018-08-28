import { Message } from './message.model';

export default class ImageMessage extends Message {
  constructor(
    text = '', created = Date.now(),
    url = '', thumbnail = ''){
      super(text, created);
      this.url = url;
      this.thumbnail = thumbnail;
  }

  toString(){
    return `Photo${super.toString()} ` +
           `- Url: ${this.url} ` +
           `Thumbnail: ${this.thumbnail}`;
  }
}
