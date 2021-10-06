var foodWidget = {
  init:function(){      
    $('.right').panelSnap({
      panelSelector: 'section',
      onSnapStart: function($target){foodWidget.moveTime($target);},
      onSnapFinish: function($target){foodWidget.AddImage($target);},
      directionThreshold: 50,
      slideSpeed: 500,
      keyboardNavigation: {
        enabled: true,
        nextPanelKey: 40,
        previousPanelKey: 38,
        wrapAround: false
      }
    });
  },
  AddImage:function(el){
    var self = $(el),
        step = self.attr('data-step');
    
        $('.img-bk').each(function(){
          if($(this).attr('data-img') === step){
            $(this).addClass('active');
          }else{
            $(this).removeClass('active');
          }
        })
  },
  moveTime:function(el){
    var self = $(el),
        stepTime = self.attr('data-time');
    
        $('.time').text(stepTime);
    
    if(el.selector === '> section:eq(0)'){
        $('.time-wrap').removeClass('running');
      }else{
        $('.time-wrap').addClass('running');
    }
    console.log(el);
  }
};
foodWidget.init();
$.fn.waypoint.defaults = {
  context: '.right',
  continuous: true,
  enabled: true,
  horizontal: false,
  offset: 0,
  triggerOnce: false
}
/* $('.ingredients').waypoint(function(direction) {
   $(this).toggleClass('fixed');
   $('.right').toggleClass('fixed');
    });*/

