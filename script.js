function find_word(w) {
  console.log(w);
  for (var i = 0; i < words.length; i++) {
    for (var j = 0; j < words[i].length; j++) {
      if(w === words[i][j])
      {
        return true;
      }
    }
  }
  return false;
}


let words = [];
let word = 'house';
const xhr = new XMLHttpRequest();
xhr.open('GET', 'words.csv', true);
xhr.onload = function () {
  if (this.status === 200) {
    const csv = this.responseText;
    const rows = csv.split('\n');
    const data = rows.map(row => row.split(',').map(item => item.trim())); // usunięcie białych znaków
    Array.prototype.push.apply(words, data);
  }
  words.pop();
  console.log(find_word(word.trim())); // usunięcie białych znaków
};
xhr.send();
