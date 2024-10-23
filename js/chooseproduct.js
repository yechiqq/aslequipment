
$( document ).ready(function() {
  var urlParams = new URLSearchParams(window.location.search);
  var SKU = urlParams.get('SKU');
  $('#'+SKU).removeClass("d-none");
  //alert($('#'+SKU+' .productname').text());
  $('#product').attr('value', $('#'+SKU+' .productname').text());
});