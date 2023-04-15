function find_word(w) {
  for (var i = 0; i < words.length; i++) {
    for (var j = 0; j < words[i].length; j++) {
      if(w === words[i][j])
      {
        return j === 0 ? words[i][1] : words[i][0];
      }
    }
  }
  return false;
}

let words = [];
let word = '';
const xhr = new XMLHttpRequest();
xhr.open('GET', 'words.csv', true);
xhr.onload = function () {
  if (this.status === 200) {
    const csv = this.responseText;
    const rows = csv.split('\n');
    const data = rows.map(row => row.split(',').map(item => item.trim())); 
    Array.prototype.push.apply(words, data);
    words.pop();
  }
};
xhr.send();

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();
  word = document.getElementById('pole').value;
  if(!find_word(word))
  {
    document.getElementById("ann").innerHTML = "Nie znaleziono :(";
  }
  else
  {
    document.getElementById("ann").innerHTML = word + "-" +find_word(word);
  }
  
});





