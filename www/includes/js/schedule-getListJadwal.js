$("#pleasewait").modal();
$.post(
	"http://totalit.co.id/demo/PLN-0.01/web-service/get-listJadwal.php",
	function(data){
		if(data['status'] == 1){
			$("#sch-wrapper").empty();
			for(var x=0; x<data['return_data']['sch_det'].length; x++){
				var num = x + 1;
				$("#list-jadwal").append("<a href=\"form-survey.html?id="+data['return_data']['sch_id'][x]+"&ctr="+data['return_data']['sch_det'][x].counter_id+"\" class=\"btn btn-default btn-lg btn-block clearfix\"><table class=\"table borderless v-mid list-sch\"><tr><td rowspan=\"3\" valign=\"middle\">"+num+".</td><td align=\"left\">"+data['return_data']['sch_det'][x].counter_name+"</td><td rowspan=\"3\" valign=\"middle\"><span class=\"glyphicon glyphicon-chevron-right\"></span></td></tr><tr><td align=\"left\">"+data['return_data']['sch_det'][x].counter_addr+"</td></tr><tr><td align=\"left\">"+data['return_data']['sch_det'][x].counter_telp+"</td></tr></table></a>");
			}
			$("#pleasewait").modal("hide");
		}else{
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
		}
	},
	"json"
);