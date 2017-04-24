
function testGet () {
  var incomingData = ajaxCall()
  console.log('//////////////////////');
  console.log(incomingData);
}

$('#cost').click(testGet)

function ajaxCall() {
  $.ajax({
    url: 'http://localhost:3223/search/data',
    method: 'GET'
  }).then(function (result) {
    console.log('ajax');
    console.log(result);
      return result
  }).catch(function (error) {
    console.log('Error: ', error)
  })
}
