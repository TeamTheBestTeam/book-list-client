'use strict'

var app = app || {};

( function( module ) {
  
  let productionApiUrl = 'https://jl-ap-booklist.herokuapp.com/'

    let developmentApiUrl = 'http://localhost:3000';
  
  module.isProduction = /^(?!localhost|127)/.test( window.location.hostname );
  
    module.ENVIRONMENT = {
      apiUrl: module.isProduction ? productionApiUrl : developmentApiUrl
    };

  module.showOnly = ( selector ) => {
    $('.container').hide();
    $(selector).show();
  };

  module.render = ( templateId, data ) => {
    if ( !module.bookTemplate ) {
      module.bookTemplate = Handlebars.compile( $( `#${templateId}` ).text() );

    }
    return module.bookTemplate(data);
  
  };

} )( app );