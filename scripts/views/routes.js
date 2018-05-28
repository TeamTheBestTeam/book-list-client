'use strict'

page( '/' ), ( ctx, next ) => app.Book.fetchAll( () => app.bookView.initIndexPage( ctx, next ) );

page( '/book/:id', ctx => app.Book.fetchOne( ctx, app.bookView.initDetailPage ) );

page( '/books/new', ctx => app.bookView.initCreateFormPage( ctx ) );

page( '/books/search', ctx => app.bookView.initSearchFormPage() );



page();