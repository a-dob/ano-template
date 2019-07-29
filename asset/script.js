
$(document).ready(function(){
  //подсветка найденных совпадений
  function highlightOverlap(needle, content){
      regexp = new RegExp(needle, "ig");
      newContent = content.replace(regexp, '<span class="lightOn">' + needle + '</span>');
      //newContent = '<i class="fa fa-plus" aria-hidden="true"></i>' + newContent;
      return newContent;
  }


  var tree = $('.tree');
  var tree_link = $('.tree a');
  var tree_ul = $('.tree ul');
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


  //tree search
  var treeSearch = $('#treeSearch');
  treeSearch.on('keyup', function(){
    tree_ul.addClass('collapsed');
    tree.find('i').removeClass('fa-minus');

    var search = $(this).val();
    tree.find('a').each(function(){
      if (~$(this).text().toLowerCase().indexOf(search.toLowerCase())){
        $(this).parents('ul').removeClass('collapsed');
        $(this).parents('ul').each(function(){
          $(this).parent().find('i').addClass('fa-minus');
        });
        $(this).html(highlightOverlap(search, $(this).text()));
        //console.log($(this).text());
      }
    })
  });


  //tree search

});
