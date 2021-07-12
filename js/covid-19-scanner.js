$(document).ready(function(){
    $("#covidScreen1").show();
    $("#covidScreen2").hide();
    $("#covidScreen3").hide();
    $("#covidScreen4").hide();
    $("#covidScreen5").hide();
    $("#covidScreen6").hide();
    $("#covidScreen7").hide();
    
});

    
function gotoSection(sectionName){
    $("#covidScreen1").hide();
    $("#covidScreen2").hide();
    $("#covidScreen3").hide();
    $("#covidScreen4").hide();
    $("#covidScreen5").hide();
    $("#covidScreen6").hide();
    $("#covidScreen7").hide();
    $('#'+sectionName).show();
}

function check_covidform1(screen){
		if($('#covidform1 input[type=checkbox]:checked').length == 0)
		{
			$("#covidform1 #checkboxError1").show();
        }		
        else{
            $("#covidform1 #checkboxError1").hide();
            gotoSection(screen);
        }
}

function check_covidform2(screen){
    if($('#covidform2 input[type=checkbox]:checked').length == 0)
    {
        $("#covidform2 #checkboxError2").show();
    }		
    else{
        $("#covidform2 #checkboxError2").hide();
        gotoSection(screen);
    }
}

function check_covidform3(screen){
    if($('#covidform3 input[type=radio]:checked').length == 0)
    {
        $("#covidform3 #checkboxError3").show();
    }		
    else{
        $("#covidform3 #checkboxError3").hide();
        gotoSection(screen);
    }
}

function check_covidform4(screen){
    if($('#covidform4 input[type=radio]:checked').length == 0)
    {
        $("#covidform4 #checkboxError4").show();
    }		
    else{
        $("#covidform4 #checkboxError4").hide();
        gotoSection(screen);
    }
}

