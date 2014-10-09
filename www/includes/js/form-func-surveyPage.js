var id				=	GetURLParameter("ctr");
var sch				=	GetURLParameter("id");
var bil				=	GetURLParameter("bills");

$("#schedule_id").val(sch);

$.post(
	"http://totalit.co.id/demo/PLN-0.01/web-service/get-surveyDetail.php",
	{ id: id },
	function(data){
		if(data['status'] != 1){
			$("#myDialogs").empty();
			$("#myDialogs").html("<div class=\"text-danger\">Alert !</div>");
			
			$("#myDialogsText").removeClass("alert-success alert-info alert-warning alert-danger");
			$("#myDialogsText").addClass("alert-danger");
			$("#myDialogsText").html(data['message']);
			
			$("#button-DialogYes").removeClass("btn-info btn-danger btn-warning btn-primary hide");
			$("#button-DialogNo").removeClass("hide");
			$("#button-DialogClose").removeClass("hide");
			
			$("#button-DialogYes").unbind();
			$("#button-DialogNo").unbind();
			$("#button-DialogClose").unbind();
			
			$("#button-DialogClose").bind("click", function(){
				$("#AppDialogs").modal("hide");
				setTimeout(
					function(){
						window.location.href="main-page.html";
					},500
				);
			});
			
			$("#button-DialogYes").addClass("hide");
			$("#button-DialogNo").addClass("hide");
			
			$("#pleasewait").modal("hide");
			$("#AppDialogs").modal();
		}else{
			
			$("#counter_name").val(data['return_data']['counter_name']);
			$("#counter_addr").val(data['return_data']['counter_addr']);
			$("#counter_telp").val(data['return_data']['counter_telp']);
			$("#counter_owner").val(data['return_data']['counter_owner']);
			$("#counter_bills").val(bil);
			
		}
	},
	"json"
);