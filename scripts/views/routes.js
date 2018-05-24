'use strict'

page('/', ctx => app.Book.fetchAll(app.bookView.initIndexPage));
page('/books/:id', ctx => app.Book.fetchOne(ctx, app.bookView.initDetailPage));











page();
