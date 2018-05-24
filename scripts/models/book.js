
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
  Book.single = null;

  Book.loadAll = rows => {
    Book.all = rows.map( book => new Book( book ) );
  }

  Book.loadOne = book => {
    Book.single = new Book(book);
    console.log(Book.all);
    Book.all = [];
    Book.all.push(new Book (book));
    console.log(Book.all);
  }

  Book.fetchAll = callback =>
    $.get( `${app.ENVIRONMENT.apiUrl}/api/v1/books` )
      .then((data) => {
        Book.loadAll(data.rows);
      })
      .then( callback )
      .catch( errorCallback );

  Book.createBook = book =>
    $.post( `${app.ENVIRONMENT.apiUrl}/api/v1/books`, book )
      .then( () => page( '/' ) )
      .catch( errorCallback );

  Book.fetchOne = (ctx, callback) => {
    $.get(`${app.ENVIRONMENT.apiUrl}/api/v1/books/${ctx.params.id}`)
    .then( data => Book.loadOne(data[0]))
    .then(callback)
    .catch(console.log);

    // $( '.book-item' ).hide();
    // $( `.book-item[data-book-id="${ctx.params.id}"]` ).show();
    
    console.log(ctx.params.id)
  };

  module.Book = Book;
} )( app );