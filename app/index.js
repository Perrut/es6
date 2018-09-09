import ImageMessage from './models/image-message.model';

const m = new ImageMessage();

console.log('not empty');
console.dir(m);
console.log('updated');
/* webpack-dev-server roda o projeto na memória, atualiza sozinho, mas só client-side, se envolver 
servidor não rola, não é servidor web completo */
