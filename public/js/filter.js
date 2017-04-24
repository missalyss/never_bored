var activityData;

(function ajaxCall () {
  $.ajax({
    url: 'http://localhost:3223/search/data',
    method: 'GET'
  }).then(function (result) {
    activityData = result
  }).catch(function (error) {
    console.log('Error: ', error)
  })
})()

$('#cost').click(testGet)

function testGet () {
  console.log(activityData)
}
