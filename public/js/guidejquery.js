$('input').click(function() {
  $('.guide-buttons').show()
})

$('#g-next1').click(function (e) {
  e.preventDefault()
  $('.guide-buttons').hide()
  $('#guide-div-1').hide()
  $('#guide-div-2').show()
})

$('#g-next2').click(function (e) {
  e.preventDefault()
  $('.guide-buttons').hide()
  $('#guide-div-2').hide()
  $('#guide-div-3').show()
})

$('#g-next3').click(function (e) {
  e.preventDefault()
  $('.guide-buttons').hide()
  $('#guide-div-3').hide()
  $('#guide-div-4').show()
})

$('#g-next4').click(function (e) {
  e.preventDefault()
  $('.guide-buttons').hide()
  $('#guide-div-4').hide()
  $('#guide-div-5').show()
})
