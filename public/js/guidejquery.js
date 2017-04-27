
$('#g-next1').click(function (e) {
  e.preventDefault()
  $('.guide-div-1').hide()
  $('.guide-div-2').show()
})

// $('#g-form1').submit(function (e) {
//   e.preventDefault()
//   var data = $('#g-form1').serializeArray().reduce(function(obj, item) {
//     obj[item.name] = item.value
//     return obj
// }, {})
//   console.log(data)
  // Ajax call to database
  // $.ajax({
  //       url: `http://localhost:3223/guide/data`,
  //       method: 'GET'
  //   }).then(function(result) {
  //
  //   }).catch(function(error) {
  //       console.log('Error: ', error);
  //   })



  // window.location.href = '/'
// })
