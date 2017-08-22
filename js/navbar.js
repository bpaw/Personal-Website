/*------------------------------------------------------------------------------
  This JavaScript file is used to calculate when to convert the navbar from
  a transparent navbar to a colored navbar.
------------------------------------------------------------------------------*/

var window_height = $(window).height();
var navbar_height = $('#navbar-id').height();
var height = window_height - navbar_height;
$('#navbar-id').affix({
  offset: {
    top: height
  }
});
