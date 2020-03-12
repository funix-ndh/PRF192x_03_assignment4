$(document).ready(() => {
  // elements
  var totalWordLeftEl = $('#total-word-left');
  var wordCountEl = $('.word-count');
  var postTextEl = $('.post-text');
  var formNewPost = $('#new-post');
  var btnLikeEl = $('.btn-like');

  // event handler
  var onChangeEventHandler = function () {
    var wordLeft = 140 - parseFloat(postTextEl.val().length);
    totalWordLeftEl.text(wordLeft);
    if (wordLeft < 0) {
      wordCountEl.css('color', 'red');
    } else {
      wordCountEl.attr('style', '');
    }
  };

  // subscribe events
  postTextEl.on('keyup', onChangeEventHandler);

  formNewPost.on('submit', function (e) {
    e.preventDefault();
    postTextEl.val('');
    onChangeEventHandler();
  });

  btnLikeEl.on('click', function() {
    var count = $(this).text().substring(1) * 1 + 1;
    $(this).text("+" + count);
  })
});
