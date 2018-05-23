
'use strict';

var app = app || {};

( function( module ) {
  function errorCallback( err ) {
    console.error( err );
    module.errorView.initErrorPage( err );
  }

  function Book( bookObject ) {
    Object.keys( bookObject ).forEach( key => this[ key ] = bookObject[ key ] );
  }

  Book.prototype.toHtml = function() {
    return app.render( 'book-template', this );
  }

  Book.all = [];

  Book.loadAll = rows => {
    Book.all = rows.map( book => new Book( book ) );
  }

  Book.fetchAll = callback =>
    $.get( `${app.ENVIRONMENT.apiUrl}/api/v1/books` )
      .then((data) => {
        Book.loadAll(data.rows);
      })
      .then( callback )
      .catch( errorCallback );

  Book.createBook = book =>
    $.post( `${app.ENVIRONMENT.apiUrl}/books/add`, book )
      .then( () => page( '/' ) )
      .catch( errorCallback );

  Book.fetchOne = ( ctx ) => {
    console.log( ctx );
    $( '.book-item' ).hide();
    $( `.book-item[data-book-id="${ctx.params.book_id}"]` ).show();
  };

  module.Book = Book;
} )( app );