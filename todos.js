// check of specific todos by clicking
//$("li").click(function(){
//	// if li is gray 
//	
//	if($(this).css("color") === "rgb(128, 128, 128)"){
//		// turn it black
//		$(this).css({
//			color : "black",
//			textDecoration : "none"
//	});
//	}
//	// else
//	else{
//		// turn it gray
//		$(this).css({
//			color : "gray",
//			textDecoration : "line-through"
//	});
		
//	}
	
	
//});

// we can also write above code in a single line
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});
// this will even work in a same way as above in a short code :)

// click on X to delete todo
// here we are adding listner to ul tag and not to li tag as 
// li will apply this listeer only on existing elements
// whereas ul will add elements to the new lis also
// when an li is hit inside this ul run this code
$("ul").on("click","span",function(event){
	// .parent to retrieve the li 
	// and the fading is done and after that remove is done
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	// event.prpagation is used as clicking the span landed up clicking all its parent 
	//elements as well and hence stops it to bubbling upto other elements
	event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input 
		var todoText = $(this).val();
		// ater typing the new todo we need to empty the box therefore
		// assigning empty string to it
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash-o' ></i></span> " + todoText + " </li>");
	}
});
$(".fa-pencil").click(function(){
	$("input[type='text'").fadeToggle();
});