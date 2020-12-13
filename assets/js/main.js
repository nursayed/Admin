// toggle menu icon
$('.menu-button').click(function(){
  $(this).toggleClass('click'),
  $('.sidebar').toggleClass('show'),
  $('.genarel-body').toggleClass('genarel-body-show'),
  $('.main-body .title').toggleClass('genarel-body-show')
});