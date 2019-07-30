
$(document).ready(function(){
  //подсветка найденных совпадений
  function highlightOverlap(needle, content){
      regexp = new RegExp(needle, "ig");
      str = content.replace(regexp, '<span class="lightOn">' + needle + '</span>');
      if (!str) return str;
      if(str[0] == '<'){
        console.log(str[27].toUpperCase());
        return str.replace('#lightOn\">.{1}#', 'lightOn">'+str[34].toUpperCase());
      }
      return str[0].toUpperCase() + str.slice(1);
  }

  $('input[name="scales"]').click(function() {
    if ($(this).prop('checked')) $(this).parent().find('form').show();
    if (!$(this).prop('checked')) $(this).parent().find('form').hide();

  });
  var tree = $('.tree');
  var tree_link = $('.tree a');
  var tree_icon = $('.tree i');
  var tree_ul = $('.tree ul');

  tree_link.on('click', function(){
    $(this).next().toggleClass( "collapsed");
    $(this).find('i').eq(0).toggleClass('fa-minus');
  });
  tree_icon.on('click', function(){
    $(this).next().next().toggleClass( "collapsed");
    $(this).toggleClass('fa-minus');
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
    var search = $(this).val().toLowerCase();
    $(this).val(search);
    tree.find('a').each(function(){
      $(this).html(highlightOverlap(search, $(this).text()));
      if (~$(this).text().toLowerCase().indexOf(search)){
        $(this).parents('ul').removeClass('collapsed');
        $(this).parents('ul').each(function(){
          $(this).parent().find('i').eq(0).addClass('fa-minus');
        });
        $(this).prev().removeClass('fa-minus');
      }
    });
  });


  //tree search

});
