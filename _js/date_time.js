/*function date_time(id)
{
        date = new Date;
        year = date.getFullYear();
        month = date.getMonth();
        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
        d = date.getDate();
        day = date.getDay();
        days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
        h = date.getHours();
        if(h<10)
        {
                h = "0"+h;
        }
        m = date.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }
        s = date.getSeconds();
        if(s<10)
        {
                s = "0"+s;
        }
		return days[day]+' '+months[month]+' '+d+' '+year+' '+h+':'+m+':'+s;
       /* result = ''+days[day]+' '+months[month]+' '+d+' '+year+' '+h+':'+m+':'+s;
        document.getElementById(id).innerHTML = result;
        setTimeout('date_time("'+id+'");','1000');
        return true;
}*/
function DisplayTime()
{
	 if (!document.all && !document.getElementById)
	 return
	 timeElement=document.getElementById? document.getElementById("curTime"): document.all.tick2
	 var CurrentDate=new Date();
	 var year=CurrentDate.getFullYear();
	 var month=CurrentDate.getMonth();
	 months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
	 var day=CurrentDate.getDay();
	 days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
	 var numday=CurrentDate.getUTCDate()
	 var hours=CurrentDate.getHours()
	 var minutes=CurrentDate.getMinutes()
	 var seconds=CurrentDate.getSeconds()
	 var DayNight="PM"
	 if (hours<12) DayNight="AM";
	 if (hours>12) hours=hours-12;
	 if (hours==0) hours=12;
	 if (minutes<=9) minutes="0"+minutes;
	 if (seconds<=9) seconds="0"+seconds;
	 var currentTime=days[day]+" "+months[month]+" "+numday+" "+year+" "+hours+":"+minutes+":"+seconds+" "+DayNight;
	 timeElement.innerHTML=currentTime
	// timeElement.innerHTML="<font style='font-family:verdana, arial,tahoma;font-size:12px;color:#E25984; font-weight:bold;'>"+currentTime+"</b>"
	 setTimeout("DisplayTime()",1000)
 }
 window.onload=DisplayTime