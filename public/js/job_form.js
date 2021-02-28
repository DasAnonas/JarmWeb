function validateForm(){
  if ($("#submit").hasClass("button-disabled")){
    return false
  } else {
    return true
  }
}
function toggleButton(){
  if (($('#name').val().length > 0) && $('#agree').prop("checked") && ($('#city').val().length > 0) && (document.getElementById("file").files.length == 1) && (($('#mail-input').val().length > 0) || ($('#phone-input').val().length > 0) || ($('#tg-input').val().length > 0) || ($('#whatsapp-input').val().length > 0))){
    $("#submit").removeClass("button-disabled")
  } else {
    $("#submit").addClass("button-disabled")
  }
}
$('.validable').on('input', function(){
  toggleButton()
})

$(function() {
  $('#contact').multipleSelect({
    selectAll: false,
    displayDelimiter: ' ; ',
    ellipsis: true,
    showClear: true,
    animate: 'slide',
    onCheckAll: function() {
      setTimeout(() => $("span:contains('All selected')").html("Всё выбрано"), 1)
      toggleButton()
    },
    onClick: function(view) {
      if (view.selected) {
        $("#" + view.value).css('display', 'block')
        $("#" + view.value).animate({
          marginLeft: "0"
        }, 300)
      } else {
        $("#" + view.value).animate({
          marginLeft: "-7%"
        }, 300)
        $("#" + view.value).css('display', 'none')
        $("#" + view.value + " > input").val('')
        $("#" + view.value + " > input").trigger('input')
      }
    },
    onUncheckAll: function() {
      $("#mail").animate({
        marginLeft: "-7%"
      }, 300)
      $("#mail").css('display', 'none')
      $("#mail > input").val('')
      $("#phone").animate({
        marginLeft: "-7%"
      }, 300)
      $("#phone").css('display', 'none')
      $("#phone > input").val('')
      $("#tg").animate({
        marginLeft: "-7%"
      }, 300)
      $("#tg").css('display', 'none')
      $("#tg > input").val('')
      $("#whatsapp").animate({
        marginLeft: "-7%"
      }, 300)
      $("#whatsapp").css('display', 'none')
      $("#whatsapp > input").val('')
      toggleButton()
    }
  })
})

var inputs = document.querySelectorAll('.file-input');
Array.prototype.forEach.call(inputs, function(input) {
  var label = input.nextElementSibling,
    labelVal = label.innerHTML;
  input.addEventListener('change', function(e) {
    var fileName = '';
    if (this.files)
      fileName = e.target.value.split('\\').pop();
    if (fileName)
      label.querySelector('span').innerHTML = fileName;
    else
      label.innerHTML = labelVal;
  });
});

drop.ondragover = drop.ondragenter = function(evt) {
  evt.preventDefault();
};

drop.ondrop = function(evt) {
  file.files = evt.dataTransfer.files;
  evt.preventDefault();
  if (document.createEvent) {
    event = document.createEvent("HTMLEvents");
    event.initEvent("change", true, true);
    event.eventName = "change";
    file.dispatchEvent(event);
  } else {
    event = document.createEventObject();
    event.eventName = "change";
    event.eventType = "change";
    file.fireEvent("on" + event.eventType, event);
  }
};

$(document).ready(function() {
  let height = $('#footer').height() + $('#header').height()
  $('#wrapper').css('min-height', 'calc(100vh - ' + height + 'px )')
  $("label > input").toggleClass("custom-checkbox")
  setTimeout(() => $('#desc_2').css('display', 'none'), 200)
  $('.navbar-mobile-toggler').click(function(event){
      $('#navbar-mobile').toggleClass('out')
      $('#fader').toggleClass('on-mobile')
      $('html,body').toggleClass('disable-scroll')
  });
})
$("#footer").change('height', function() {
  let height = $('#footer').height() + $('#header').height()
  $('#wrapper').css('min-height', 'calc(100vh - ' + height + 'px )')
})
("#fader").on('click', function(){
  if($('#navbar-mobile').hasClass('out')) {
    $('#navbar-mobile').toggleClass('out')
    $('#fader').toggleClass('on-mobile')
    $('html,body').toggleClass('disable-scroll')
  }
})
