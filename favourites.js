function showFavourites(){
    var pListDuration = JSON.parse(localStorage.getItem("playListDuration"));
    var playListMinutes = Math.floor(pListDuration / 60);
        var playListSeconds = pListDuration - playListMinutes * 60;
    document.getElementById("dur_play").innerHTML=playListMinutes + " minutes " + playListSeconds + "seconds";
	for(i=1;i<20;i++){
	if(localStorage.getItem(i)!=null){
		var table=document.getElementById("ftable");
		var row=table.insertRow(i);
		var cell1=row.insertCell(0);
		var cell2=row.insertCell(1);
		var cell3=row.insertCell(2);
		var cell4=row.insertCell(3);
        var cell5=row.insertCell(4);
        var cell6=row.insertCell(5);
        let durationTime = parseInt(JSON.parse(localStorage.getItem(i)).duration, 10);
        var minutes = Math.floor(durationTime / 60);
        var seconds = durationTime - minutes * 60;
		cell1.innerHTML= JSON.parse(localStorage.getItem(i)).name;
		cell2.innerHTML= JSON.parse(localStorage.getItem(i)).author;
		cell3.innerHTML= JSON.parse(localStorage.getItem(i)).genre;
		cell4.innerHTML= JSON.parse(localStorage.getItem(i)).rating;
        cell5.innerHTML= JSON.parse(localStorage.getItem(i)).dateAndTime;
        cell6.innerHTML= minutes + "minutes " + seconds + "seconds";
        
		
	}
}}
function edit(){

            let bname = prompt("Write Book name")
            let newr = prompt("Write a new rating")
            for(i=1;i>0;i++){
                if(localStorage.getItem(i)!=null){
                    if(JSON.parse(localStorage.getItem(i)).name==bname){
                        var fav = 
                            {name:JSON.parse(localStorage.getItem(i)).name,
						     author:JSON.parse(localStorage.getItem(i)).author,
						     genre:JSON.parse(localStorage.getItem(i)).genre,
						     rating:newr}
                        localStorage.setItem(i, JSON.stringify(fav));
                        alert("edited");
                        break;
                        window.location.href = "#";
                    }
                     
                }
                else break;
                
            }
        }

function del(){

            let bname = prompt("Write Book name")
            
            for(i=1;i>0;i++){
                if(localStorage.getItem(i)!=null){
                    if(JSON.parse(localStorage.getItem(i)).name==bname){
                       localStorage.removeItem(i);
                       alert("deleted");
                }
                
                
            }
            else break;
        }
        
        }

function cl(){
	localStorage.clear()
    alert("cleared");
}