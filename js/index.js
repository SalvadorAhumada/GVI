//Welcome div
window.setTimeout(function(){
    $('#logo_welcome').addClass("animated");
    $('#logo_welcome').addClass("fadeOut");
    $('#logo_welcome').addClass("slower");
  }, 3000);

window.setTimeout(function(){
    $('#logo_welcome').addClass("hide");
}, 5000);

//Sticky nav menu

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 300) {
        $("nav").addClass("sticky");
        $("nav").addClass("animated");
        $("nav").addClass("fadeIn");
    } else {
        $("nav").removeClass("sticky");
        $("nav").removeClass("fadeIn");
    }
    });

//Galeria
$(document).ready(function(){
    $grid = $('.list').isotope({
      // options
      itemSelector: '.list__item',
      layoutMode: 'masonry',
      masonry: {
        gutter: 0
      }
    });
    // filter items on button click
    $('.js-filter').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
      $( '.js-filter button' ).removeClass( 'is-active' );
      $( this ).addClass( 'is-active' );
    });
  });

  //reqres
  $.ajax({
    url: "https://reqres.in/api/users?per_page=8",
    data: {},
    beforeSend: function(){}
}).done(function(response) {
    var trArr = new Array();
    $.each(response.data, function(i, v){
      trArr.push('<div class="images"><img src="' + v.avatar + '" width="120px" /></div>');
    });
    $('#info-container').append(trArr.join('\n'));
});
