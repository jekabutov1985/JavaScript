$(function() {
  $accordion_btn = $('.accordion .accordion-item');
  $accordion_cnt = $('.accordion .content');
  $sign = $('.accordion .sign_item');
  console.log($accordion_btn);
  console.log($accordion_cnt);
   $accordion_btn.on('click', function(){
     var elem = $accordion_btn.index(this);
     if($accordion_cnt.hasClass('active_cnt')){
       $accordion_cnt.removeClass('active_cnt');
       $accordion_btn.removeClass('accordion-item-active');
       $sign.html('+')
     }
     $accordion_cnt.eq(elem).addClass('active_cnt');
     $accordion_btn.eq(elem).addClass('accordion-item-active');
     $sign.eq(elem).html('-');
   })

})
