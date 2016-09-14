// JavaScript Document

function setNavigation(page) {
	console.log("page: "+ page);
	var output;
	if(page !== "index"){
		output='<li><a href="index.html" class="first">Home</a></li>';
	}else{}
	if(page == "index"){
		output='<li><a>Amateur Radio</a>';
	}else{
		output+='<li><a>Amateur Radio</a>';
	}
		output+='<ul>';
			if(page !== "amateurRadioClubs"){
				output+='<li><a href="amateurRadioClubs.html">Amateur Radio Clubs</a></li>';
			}else{}
			 if(page !== "frequencies"){
			//output+='<li><a href="frequencies.html">Frequencies</a></li>';
			}else{}
			 if(page !== "bandInfo"){
				output+='<li><a href="bandInfo.html">Band Info</a></li>';
			}else{}
			if(page !== "amateurRadioOther"){
				output+='<li><a href="amateurRadioOther.html">Amateur Radio Other</a></li>';
			}else{}
		output+='</ul>';
	output+='</li>';  
	output+='<li><a href="#">Running</a>';
		output+='<ul>';
			if(page !== "runningClubs"){
			output+='<li><a href="running.html" >Running Clubs</a></li>';
			}else{}
			if(page !== "runningOther"){
			output+='<li><a href="runningOther.html" >Running Other</a></li>';
			}else{}
		output+='</ul>';
	output+='</li>';
	output+='<li><a href="#">Photos</a>';
		output+='<ul>';
			if(page !== "soapstone"){
			output+='<li><a href="soapstone.html" >Soapstone Prairie Natural Area</a></li>';
			}else{}
		if(page !== "RNMP"){
			output+='<li><a href="RMNP.html" >Rocky Mountian National Park</a></li>';
			}else{}
		output+='</ul>';
	output+='</li>';
	output+='<li><a href="contact.html" >Contact</a></li>';
	document.getElementById("navigation").innerHTML = output;
}


/****
$(document).ready(function() {
	$('.tabs a').bind('click focus',function() {
		var $this = $(this);
		
		// hide panels
		$this.parents('.tabbedPanels')
			.find('.panel').hide().end()
			.find('.active').removeClass('active');
			
		// add active state to new tab
		$this.addClass('active').blur();	
		
		// retrieve href from link (is id of panel to display)
		var panel = $this.attr('href');
		// show panel
		$(panel).show();
		// don't follow link
		return false;
	}); // end click
	
	$('.tabs').find('li:first a').click();
}); // end ready
**/