const Message = require('./message.model');
const ImageMessage = require('./image-message.model');
const fs = require('fs');
const path = require('path');

const emptyMessage = new Message();
const emptyPhotoMessage = new ImageMessage();

class MessagesService {
  constructor() {
    let resolvePromise;
    let rejectPromise;
    const filePath = path.join(__dirname, 'messages.json');
    this.messagesPromise = new Promise((resolve, reject) => {
      resolvePromise = resolve;
      rejectPromise = reject;
    });
    fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        rejectPromise(err);
      } else {
        const dataArray = JSON.parse(data);
        const dataObj = dataArray.map((item) => {
          return new Message(item.text, item.created);
        });
        resolvePromise(dataObj);
      }
    });
  }

  get messages() {
    return this.messagesPromise;
  }
}

const messagesService = new MessagesService();
messagesService.messages
  .then((messages) => {
    for (let x = 0; x < messages.length; x++) {
      console.log(String(messages[x]));
    }
  }).catch((err) => {
    console.log(err);
  });

/* class Message {
  constructor(text = '', created = Date.now()){
    this.text = text;
    this._created = created;
  }

  get created() {
    return this._created;
  }

  set created(created) {
    this._created = created;
  }

  toString() {
    return `Message created at: ${this.created} - Text: ${this.text}`;
  }
}

class ImageMessage extends Message {
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

var text = 'Some text';
var created = Date.now();
 */
/* var duckTypeMessage = {
  text: text,
  created: created
}; */

/* var duckTypeMessage = {
  text,
  created
};

var emptyMessage = new Message();
var textMessage = new Message('Yesterday Message', Date.now() - 86400);
var photoMessage = new ImageMessage();

console.log(duckTypeMessage);

console.log(String(emptyMessage));
console.log(String(textMessage));
console.log(String(photoMessage));

console.log(emptyMessage instanceof Message);
console.log(textMessage instanceof Message);
console.log(photoMessage instanceof Message);
console.log(photoMessage instanceof ImageMessage);
console.log(duckTypeMessage instanceof Message);
 */