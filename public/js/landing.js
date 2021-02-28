$(".portfolio-image").hover(
  function() {
    const id = $(this).attr("id")
    //window.scrollTo(0, ($("#" + id).offset().top - 50))
    $("#" + id + "-text").css({
      "display": "block",
      "z-index": "1200"
    })
    $("#" + id).css("z-index", "1200")
    //$("#fader").css("visibility", "visible")
  //  $("#fader").animate({
  //    opacity: "70%"
  //  }, 200)
  $('#fader').toggleClass('on')
    $("#" + id + "-text").animate({
      marginLeft: "15%"
    }, 200)
    //$("#fader").css("opacity", "70%")
  },
  function() {
    const id = $(this).attr("id")
    //  window.scrollTo(0, ($("#" + id).offset().top - 50))
    if ($("#" + id + "-text").hasClass("portfolio-right")) {
      $("#" + id + "-text").animate({
        marginLeft: "30%"
      }, 200)
    } else {
      $("#" + id + "-text").animate({
        marginLeft: "0"
      }, 200)
    }
    $("#" + id + "-text").css({
      "display": "none",
      "z-index": "0"
    })
    $("#" + id).css("z-index", "0")
    $('#fader').toggleClass('on')
  //  $("#fader").animate({
  //    opacity: "0"
//    }, 200)
  //  $("#fader").css("visibility", "hidden")
  //  $("#fader").css("opacity", "0%")
  }
)

function validateForm(target) {
  if ($("#submit"+target).hasClass("button-disabled")) {
    return false
  } else {
    return true
  }
}

function toggleButton() {
  if (($('#name-modal').val().length > 0) && $('#agree-modal').prop("checked") && ($('#service-modal').multipleSelect('getSelects').length > 0) && (($('#mail-input-modal').val().length > 0) || ($('#phone-input-modal').val().length > 0) || ($('#tg-input-modal').val().length >
      0) ||
      ($('#whatsapp-input-modal').val().length > 0))) {
    $("#submit-modal").removeClass("button-disabled")
  } else {
    $("#submit-modal").addClass("button-disabled")
  }
}
function toggleButtonCalc() {
  if (($('#name-calc').val().length > 0) && $('#agree-calc').prop("checked") && (($('#mail-input-calc').val().length > 0) || ($('#phone-input-calc').val().length > 0) || ($('#tg-input-calc').val().length >
      0) ||
      ($('#whatsapp-input-calc').val().length > 0))) {
    $("#submit-calc").removeClass("button-disabled")
  } else {
    $("#submit-calc").addClass("button-disabled")
  }
}
$('.validable-modal').on('input', function() {
  toggleButton()
})
$('.validable-calc').on('input', function() {
  toggleButtonCalc()
})

$(function() {
  $('#service-modal').multipleSelect({
    selectAll: false,
    displayDelimiter: ' ; ',
    ellipsis: true,
    showClear: true,
    animate: 'slide',
    onClick: function(view) {
      toggleButton()
    },
    onUncheckAll: function() {
      toggleButton()
    },
    onCheckAll: function() {
      setTimeout(() => $("span:contains('All selected')").html("Всё выбрано"), 1)
      toggleButton()
    },
  })
  $('#contact-modal').multipleSelect({
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
      $("#mail-modal").animate({
        marginLeft: "-7%"
      }, 300)
      $("#mail-modal").css('display', 'none')
      $("#mail-modal > input").val('')
      $("#phone-modal").animate({
        marginLeft: "-7%"
      }, 300)
      $("#phone-modal").css('display', 'none')
      $("#phone-modal > input").val('')
      $("#tg-modal").animate({
        marginLeft: "-7%"
      }, 300)
      $("#tg-modal").css('display', 'none')
      $("#tg-modal > input").val('')
      $("#whatsapp-modal").animate({
        marginLeft: "-7%"
      }, 300)
      $("#whatsapp-modal").css('display', 'none')
      $("#whatsapp-modal > input").val('')
      toggleButton()
    }
  })
  $('#contact-calc').multipleSelect({
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
        $("#" + view.value + '-calc').css('display', 'block')
        $("#" + view.value + '-calc').animate({
          marginLeft: "0"
        }, 300)
      } else {
        $("#" + view.value + '-calc').animate({
          marginLeft: "-7%"
        }, 300)
        $("#" + view.value + '-calc').css('display', 'none')
        $("#" + view.value + '-calc' + " > input").val('')
        $("#" + view.value + '-calc' + " > input").trigger('input')
      }
    },
    onUncheckAll: function() {
      $("#mail-calc").animate({
        marginLeft: "-7%"
      }, 300)
      $("#mail-calc").css('display', 'none')
      $("#mail-calc > input").val('')
      $("#phone-calc").animate({
        marginLeft: "-7%"
      }, 300)
      $("#phone-calc").css('display', 'none')
      $("#phone-calc > input").val('')
      $("#tg-calc").animate({
        marginLeft: "-7%"
      }, 300)
      $("#tg-calc").css('display', 'none')
      $("#tg-calc > input").val('')
      $("#whatsapp-calc").animate({
        marginLeft: "-7%"
      }, 300)
      $("#whatsapp-calc").css('display', 'none')
      $("#whatsapp-calc > input").val('')
      toggleButton('calc')
    }
  })
})

var accordion = (function() {

  var $accordion = $('.js-accordion');
  var $accordion_header = $accordion.find('.js-accordion-header');
  var $accordion_item = $('.js-accordion-item');
  var settings = {
    speed: 500,
  };

  return {
    // pass configurable object literal
    init: function($settings) {
      $accordion_header.on('click', function() {
        accordion.toggle($(this));
      });

      $.extend(settings, $settings);
      $('.js-accordion-item.active').find('> .js-accordion-body').show();
    },
    toggle: function($this) {

      if (settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-header')[0]) {
        $this.closest('.js-accordion')
          .find('> .js-accordion-item')
          .removeClass('active')
          .find('.js-accordion-body')
          .slideUp()
      }

      // show/hide the clicked accordion item
      $this.closest('.js-accordion-item').toggleClass('active');
      $this.next().stop().slideToggle(settings.speed);
    }
  }
})();

$(document).ready(function() {
    setTimeout(() => $('#desc_2_modal').css('display', 'none'), 200)
    setTimeout(() => $('#desc_2-calc').css('display', 'none'), 200)
  accordion.init({
    speed: 300,
    oneOpen: true
  });

  $("label > input").toggleClass("custom-checkbox")
});

var inputs = document.querySelectorAll('.file-input');
Array.prototype.forEach.call(inputs, function(input) {
  var label = input.nextElementSibling,
    labelVal = label.innerHTML;
  input.addEventListener('change', function(e) {
    var fileName = '';
    if (this.files && this.files.length > 1) {
      fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
    } else
      fileName = e.target.value.split('\\').pop();
    if (fileName)
      label.querySelector('span').innerHTML = fileName;
    else
      label.innerHTML = labelVal;
  });
});

drop_modal.ondragover = drop_modal.ondragenter = function(evt) {
  evt.preventDefault();
};

drop_modal.ondrop = function(evt) {
  file_modal.files = evt.dataTransfer.files;
  evt.preventDefault();
  if (document.createEvent) {
    event = document.createEvent("HTMLEvents");
    event.initEvent("change", true, true);
    event.eventName = "change";
    file_modal.dispatchEvent(event);
  } else {
    event = document.createEventObject();
    event.eventName = "change";
    event.eventType = "change";
    file_modal.fireEvent("on" + event.eventType, event);
  }
};
$(document).ready(function() {
            $('.navbar-mobile-toggler').click(function(event){
                $('#navbar-mobile').toggleClass('out')
                $('#fader').toggleClass('on-mobile')
                $('html,body').toggleClass('disable-scroll')
            });
        });
$('.dev-mobile-text').on('click', function() {
$('#services-mobile-text').animate({
  opacity: "0"
}, 200)
const id = $(this).attr("content")
setTimeout(()=> $('#services-mobile-text').html($('#'+id).html()), 200)
$('#services-mobile-text').animate({
  opacity: "1"
}, 200)
})

$('.des-mobile-text').on('click', function() {
$('#designs-mobile-text').animate({
  opacity: "0"
}, 200)
const id = $(this).attr("content")
setTimeout(()=> $('#designs-mobile-text').html($('#'+id).html()), 200)
$('#designs-mobile-text').animate({
  opacity: "1"
}, 200)
})
$("#fader").on('click', function(){
  if($('#navbar-mobile').hasClass('out')) {
    $('#navbar-mobile').toggleClass('out')
    $('#fader').toggleClass('on-mobile')
    $('html,body').toggleClass('disable-scroll')
  }
})
