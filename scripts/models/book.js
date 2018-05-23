
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
    Book.all = rows.map( task => new Book(  ) );
  }

  Book.fetchAll = callback =>
    $.get( `${app.ENVIRONMENT.apiUrl}/books` )
      .then( Book.loadAll )
      .then( callback )
      .catch( errorCallback );

  Book.createBook = book =>
    $.post( `${app.ENVIRONMENT.apiUrl}/books/add`,  )
      .then( () => page( '/' ) )
      .catch( errorCallback );

  Book.fetchOne = ( ctx ) => {
    console.log( ctx );
    $( '.book-item' ).hide();
    $( `.book-item[data-book-id="${ctx.params.book_id}"]` ).show();
  };

  module.Book = Book;
} )( app );