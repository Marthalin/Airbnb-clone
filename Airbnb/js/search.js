var items = new Firebase("https://airbnb-montreal.firebaseio.com/items")
var nowItem = "";


function viewAllItems() {
items.once("value",readItems);
}

function showAllItems() {
items.on("value",readItems);
}


function readItems(snapshot) {
var allData = snapshot.val();
$("#items").empty();
for(var itemData in allData)
{
  var itemView = createItems(allData[itemData],itemData);
  $("#items").append(itemView);
}
}

//------------------------------------------------------------------------
function getItemByURL(suburl) {
  return new Firebase("https://<YOUR ID>.firebaseio.com/"+suburl);
}

function reArrangeItems(snapshot, former) {
  var newDa = snapshot.val();
  $("#items").append(createItems(newDa, newDa.key));
}

function createItems(itemData, key) {
  // var picPart = createPic(itemData.imgD, key);
  var wordPart = createIntro(itemData.title, itemData.price, itemData.room_type);
  // var itemView = $("<div>",{
  //   class: "sale-item",
  // }).append(picPart).append(wordPart);
  var itemView = $("<div>",{
    class: "sale-item",
  }).append(wordPart);
  return itemView;
}
function picBack(imgD) {
  //var bb = new Blob([imgD],{type:'image/jpeg'})
  //var shortURL = URL.createObjectURL(bb);
  //console.log(shortURL);
  return $("<div>",{
    class: "pic",
  }).css("background-image", 'url('+ imgD + ')');
}

function updateModal(e, upData) {
  $("#upload-modal").modal('show');
  $("input:nth-of-type(1)").val(upData.title);
  $("input:nth-of-type(2)").val(upData.price);
  $("textarea").val(upData.descrip);
  $("#ModalLabel").text("Edit Item");
  $("#submitData").css("display","none");
  $("#editData").css("display","inline-block");
  $("#removeData").css("display","inline-block");
}


function createPic(imgD) {
  var picNode = picBack(imgD);
  return picNode;
}


function createIntro(key, title, price, room_type) {
	nowItem=key;
  return $("<div>", {class: "word"}).append(
    $("<div>", {class: "name-price"}).append(
      $("<p>",{text: listing_name})
    ).append(
      $("<p>",{text: '$' + price + '/ night'})
    )
  ).append(
    $("<div>", {class: "room-type"}).append(
      $("<p>",{text: room_type})
    )
  )
}
// show the thumbnail (not yet)
function picShow(event) {
//   var file = event.target.files[0];
//   var picTrans = new FileReader();
//   picTrans.onload = (function (imge) {return function (e) {
//     imge.src = e.target.result;
//     console.log(e.target.result);
//   }})(file);
//   //console.log(file);
//   picTrans.readAsDataURL(file);
//   //console.log(picTrans.readAsDataURL(file).result);
}
//--------------------------------------------------------------------
showAllItems();
//---------------------------------------------------------------------
