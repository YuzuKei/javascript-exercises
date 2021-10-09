const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

const getTheTitles = function(library) {
    titles = [];
    for (i = 0; i < library.length; i++) {
        titles.push(library[i].title)
    } return titles
};

console.log(getTheTitles(books));


// Do not edit below this line
module.exports = getTheTitles;
