'use strict'

var app = app || {};

( function( module ) {
  const bookView = {};

  bookView.initIndexPage = function( ctx ) {
    app.showOnly( '.book-view' );
    let $bookList = $( '#book-list' );
    $bookList.empty();
    app.Book.all.forEach( book => $bookList.append( book.toHtml() ) );
  };

  bookView.initAddForm = function() {
    app.showOnly('.add-view');

    $( '#add-form' ).on( 'submit', function( event ) {
      event.preventDefault();

      let book = {
        title: event.target.title.value,
        author: event.target.author.value,
        imageUrl: event.target.imageUrl.value,
        isbn: event.target.isbn.value,
        description: event.target.description.value,
      };

      module.Book.createBook(book);
    });
  };

  module.bookView = bookView;

} )(app);