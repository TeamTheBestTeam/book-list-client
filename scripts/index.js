'use strict'

var app = app || {};

( function( module ) {
  
  let productionApiUrl =

    let developmentApiUrl = 'http://localhost:3000';
  
  module.isProduction =
  
    module.Environment = {
      apiUrl: module.isProduction ? productionApiUrl : developmentApiUrl
    };

  module.showOnly = ( selector ) => {
    $( '.container' ).hide();
    $().show();
  };

  module.render = (    ) => {
    if ( !module.taskTemplate ) {
      module.taskTemplate = Handlebars.compile( $( `#${templateId}` ).text() );
    }
    return module.taskTemplate();
  
  };




} )( app );