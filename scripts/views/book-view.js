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


  bookView.initCreateFormPage = function() {
    app.showOnly( '.create-book' );

    $( '#create-form' ).on( 'submit', function( event ) {
      event.preventDefault();


      let book = {
        title: event.target.title.value,
        author: event.target.author.value,
        imageUrl: event.target.imageUrl.value,
        isbn: event.target.isbn.value,
        description: event.target.description.value,
      };

      module.Book.createBook( book );
      
    });
  };

  bookView.initSearchFormPage = function() {
    app.showOnly( '.create-book' );
    $( '#create-form' ).on( 'submit', function( event ) {
      event.preventDefault();
    } )
    let book = {
      title: event.target.title.value || '',
      author: event.target.author.value || '',
      isbn: event.target.isbn.value || '',
    };
    module.book.find( book, bookView.initSearchResultsPage );

    event.target.title.value = '';
    event.target.author.value = '';
    event.target.isbn.value = '';
  }
  

  module.bookView = bookView;

} )(app);