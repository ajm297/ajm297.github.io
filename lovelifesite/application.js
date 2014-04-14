// Write our base functions
function showProject(name){
	var sofa = Sofas[name]
	sofa.price
$(".overlay").show();
$(".wrapper").show();
$("#detail-price").text("$" + sofa.price);
$("#detail-title").text(sofa.title);
$("#detail-image").attr("src", sofa.image2);
$("#detail-main").attr("src", sofa.image1);
$("#detail-description").text(sofa.description);
$("#addToCart").click(function(){
 var quantity= parseInt($('#detail-quantity').val()); 
  addItem(name, quantity); 
 });
 $("#cart").click(function(){
 	checkOut(); 
});
}


function hideProduct(){
$(".overlay").hide();
$(".wrapper").hide();
$("#addToCart").off("click");
}

var Cart = {};

   function subtotal() {
    var items= 0;
    var total= 0;
    for(var key in Cart) {
      var quantity = Cart[key]; //1
      var sofa = Sofas[key]
      var itemPrice = quantity * sofa.price;
      total += itemPrice;
      items += quantity; //1
    }
    $("#cart").text(items + " items " + "$" + total.toFixed(2));
    $(".check-out").text();
   }

  function addItem(name, quantity){
      if(!Cart[name]) {Cart[name]= 0; }
  Cart[name] += quantity;
  subtotal();
     
}

function showItem(name, quantity, price){
    var item = $("<div class='item'>");
    item.append( $("<div class='name'>").text(name) );
  item.append( $("<div class='price'>").text(quantity + " X $" + price + "=") );
  item.append( $("<div class='subtotal''>").text("$" + (quantity * price).toFixed(2)) );

$(".check-out").append(item);
}


function checkOut() {

  var stripeKey = 'pk_test_V0SJ6QOh3rXO9s6Ysw0eHzzE';
  
  var description = $("#cart").text();
  var amount = subtotal() * 100;

  var handler = StripeCheckout.configure({
    key: stripeKey,
    image: 'images/detailsofa3.png',
    token: function(token, args) {
      }
  });


  handler.open({
    name: 'Sofa So Good',
    description: description,
    amount: amount
  });

}



//var cart ={}
//name of product and quantity in function above
// When the page loads, add in our event handlers
$(function() {


$(".project").click(function(){
	var name = $(this).data("product-id")
	showProject(name);



$(".overlay").click(hideProduct); 

});

});

