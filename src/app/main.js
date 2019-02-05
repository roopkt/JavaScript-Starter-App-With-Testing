$(function() {
  $('#btnHello').on('click', function() {
    alert(`hello ${$('#name').val()}!`);
  });
});
