$('#calc-wrap-click, #calc-mobile-click').on('click', function() {
  $('#calc-wrap').css('display', 'none')
  $('#calc-cards').css('display', 'none')
  $('#calc-form').css('display', 'none')
  $('#calc-questions').css('display', 'flex')
  $('#calc-workflow').css('display', 'flex')
  const item = questions['start']
  $('#calc-workflow-header').html(item.text)
  for (var i = 0; i < item.answers.length; i++) {
    $('#answer_' + i.toString() + '> span').html(item.answers[i].text)
    $('#answer_' + i.toString()).css('visibility', 'visible')
    $('#answer_' + i.toString()).attr('onClick', "nextQuestion('" + item.answers[i].next + "', 'start', '" + i.toString() + "')")
  }
})

$('#calc-close').on('click', function() {
closeCalc()
})

async function nextQuestion(id, source, ans) {
  $('.answer-text > span').html('')
  $('.answer-text').css('visibility', 'hidden')
  $('.answer-text').attr('onClick', "")
  if (questions[source].answers[ans].prop){
  await $('#'+questions[source].answers[ans].prop).val(questions[source].answers[ans].value)
  }
  if (id == 'end') {
    const outcomes = getOutcomes()
    if (outcomes.length > 0) {
      $('#calc-questions').css('display', 'none')
      $('#calc-cards').css('display', 'flex')
      $('.calc-card-workflow').css('display', 'none')
      for (var i = 1; i < (outcomes.length + 1); i++) {
        $('#calc-workflow-header').css('display', 'none')
        $('#calc-workflow-header').html(labels['cards'])
        setTimeout(() => $('#calc-workflow-header').css('display', 'block'), 1)
        $('#calc-card_' + i.toString() + '-name').html(outcomes[i-1].name)
        $('#calc-card_' + i.toString() + '-desc').html(outcomes[i-1].desc)
        $('#calc-card_' + i.toString() + '-price').html(outcomes[i-1].price)
        $('#calc-card_' + i.toString() + '-time').html(outcomes[i-1].time)
        $('#calc-card_' + i.toString()).css('display', 'flex')
      }
    } else {
      closeCalc()
    }
  } else {
  const item = questions[id]
  $('#calc-workflow-header').css('display', 'none')
  $('#calc-workflow-header').html(item.text)
  setTimeout(() => $('#calc-workflow-header').css('display', 'block'), 1)
  for (var i = 0; i < item.answers.length; i++) {
    $('#answer_' + i.toString()).css('display', 'none')
    $('#answer_' + i.toString() + '> span').html(item.answers[i].text)
    $('#answer_' + i.toString()).css('visibility', 'visible')
    $('#answer_' + i.toString()).attr('onClick', "nextQuestion('" + item.answers[i].next + "','" + id + "','" + i.toString() + "')")
     $('#answer_' + i.toString()).css('display', 'block')
  }
  }
}

function getOutcomes() {
let outcomes = []
const id = $('#type').val()
const budget = parseInt($('#budget').val())
const deadline = parseInt($('#time').val())
console.log(id, budget, ' ', deadline)
const listOutcomes = result_cats[id]
console.log(listOutcomes)
for (out_id of listOutcomes) {
  if (result[out_id]){
    console.log(result[out_id])
    if ((budget >= parseInt(result[out_id].min_price)) && (budget <= parseInt(result[out_id].max_price)) && (deadline >= parseInt(result[out_id].min_deadline))) outcomes.push(result[out_id])
  }
}
console.log(outcomes)
return outcomes
}

function closeCalc() {
  $('.answer-text > span').html('')
  $('.answer-text').css('visibility', 'hidden')
  $('.answer-text').attr('onClick', "")
  $("#calc-workflow").css('display', 'none')
  $('#calc-wrap').css('display', 'flex')
  $('#type').val('')
  $('#budget').val('')
  $('#time').val('')
  $('#desc_calc').val('')
}

$('.calc-card-submit').on('click', function() {
  const id = $(this).attr("parent")
$('#desc_calc').val($('#type').val() + '; ' + $('#budget').val() + '; ' + $('#time').val() + '; ' + $('#' + id + '-name').html())
$('#calc-cards').css('display', 'none')
$('#calc-workflow-header').css('display', 'none')
$('#calc-workflow-header').html(labels['contacts'])
setTimeout(() => $('#calc-workflow-header').css('display', 'block'), 1)
$('#calc-workflow-header').html(labels['contacts'])
$('#calc-form').css('display', 'flex')
})

$('.inner-link').on('click', function() {
  $('#navbar-mobile').toggleClass('out')
  $('#fader').toggleClass('on-mobile')
  $('html,body').toggleClass('disable-scroll')
})
