// Write our base functions
function showProject(name){
	var sofa = Sofas[name]
	sofa.price
$(".overlay").show();
$(".wrapper").show();
$("#detail-price").text("$" + sofa.price);
$("#detail-title").text(sofa.title);
$("#detail-image").attr("src", sofa.image);
$("#detail-description").text(sofa.description);

}


function hideProject(){
$(".overlay").hide();
$(".wrapper").hide();
}





//var cart ={}
//name of product and quantity in function above
// When the page loads, add in our event handlers
$(function() {


$(".project").click(function(){
	var name = $(this).data("product-id")
	showProject(name);
});	


$(".overlay").click(function() {
  hideProject();
});

});

