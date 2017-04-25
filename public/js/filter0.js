// Category checkboxes
$('.checkbox').click(function () {
  var catValue = $(this).val()
  console.log(catValue)
  // var catValue = $('input[type="checkbox"]').val()
  // console.log(catValue);
  functionHideCat(catValue)
})

function functionHideCat (catValue) {
    $(`div[data-category="${catValue}"]`).toggle()
}

// Attribute checkboxes
$('.checkboxA').click(function () {
  var attrValue = $(this).val()
  console.log(attrValue)
  functionHideAttr(attrValue)
})

function functionHideAttr (attrValue) {
  console.log($(`div[data-attr="${attrValue}"]`));
    $(`div[data-attr="${attrValue}"]`).toggle()
}

// Energy checkboxes
$('.checkboxE').click(function () {
  var attrValue = $(this).val()
  console.log(attrValue)
  functionHideEnergy(attrValue)
})

function functionHideEnergy (attrValue) {
    $(`div[data-energy="${attrValue}"]`).toggle()
}
