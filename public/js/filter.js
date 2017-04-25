// var catValue

//
// $('#relaxing').click(testHideCategory)
//
// function testHideCategory () {
  // let cTypes = $("selected")
  // console.log('This works')
  // var catName = $('.infotest').attr('data-category')
  // console.log(catName)
//   // if (catName === 'Relaxing') {
//     $("div[data-category='Relaxing']").hide()
//   // }
// }


$('.checkbox').click(function () {
  var catValue = $(this).val()
  console.log(catValue);
  // var catValue = $('input[type="checkbox"]').val()
  // console.log(catValue);
  functionHide(catValue)


})

function functionHide (catValue) {
    $(`div[data-category="${catValue}"]`).toggle()
}
