class Message {
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
  
}

var emptyMessage = new Message();
var textMessage = new Message('Yesterday Message', Date.now() - 86400);

console.log(String(emptyMessage));
console.log(String(textMessage));
