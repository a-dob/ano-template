$(document).ready(function(){
  var tree = $('.tree');
  var tree_link = $('.tree a');
  tree_link.on('click', function(){
    $(this).next().toggleClass( "collapsed");
    $(this).find('i').eq(0).toggleClass('fa-minus');
  });

  var step1 = $('#step1');
  var step2 = $('#step2');
  var step3 = $('#step3');
  step2.on('show.bs.collapse', function () {
    $(this).parent().find('.header h4').removeClass('text-secondary');
    $(this).parent().parent().find('[data-target="#step2"]').addClass('d-none');
  });
  step3.on('show.bs.collapse', function () {
    $(this).parent().find('.header h4').removeClass('text-secondary');
    $(this).parent().parent().find('[data-target="#step3"]').addClass('d-none');
  });

  var factory = $('.factory');
  factory.on('click', function(){
    factory.each(function(){
      $(this).removeClass('active');
    });
    $(this).addClass('active');
  });

});
