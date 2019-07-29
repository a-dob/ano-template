$(document).ready(function(){
  var tree = $('.tree');
  var tree_link = $('.tree a');
  tree_link.on('click', function(){
    $(this).next().toggleClass( "collapsed");
    $(this).find('i').eq(0).toggleClass('fa-minus');
  });
});
