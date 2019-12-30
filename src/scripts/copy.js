$( document ).ready(function() {
	setTimeout(function(){ 
    //copy to clipboard event on items
  	function copyToClipboard(element) {
		 var $temp = $("<input>");
		 $("body").append($temp);
		 $temp.val($(element).html()).select();
		 document.execCommand("copy");
		 $temp.remove();
	};
  	$(".copy").click(function(){
  		var copied = $(event.target).closest("li").find(".campaign_id");
  		copyToClipboard(copied);
  		$("#errormessage").slideDown().text("Copied");
  		setTimeout(function(){
			$('#errormessage').slideUp();
		}, 2000);
  	});
  	}, 2000);
});

