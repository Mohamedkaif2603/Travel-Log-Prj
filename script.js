//select the overlay and plusbutton

var contoverlay=document.querySelector(".cont-overlay")
var addbookdetails=document.querySelector(".addbookdetails")
var plusbutton=document.getElementById("pluspopup")
var cancelbook=document.getElementById("cancelbook")

plusbutton.addEventListener("click",function(){
    contoverlay.style.display="block"
    addbookdetails.style.display="block"
    
})
cancelbook.addEventListener("click",function(){
    contoverlay.style.display="none"
    addbookdetails.style.display="none"

})

//selecting the tag which one you want to change

var addbook=document.getElementById("addbook")
var booknameinput=document.getElementById("booknameinput")
var booktittleinput=document.getElementById("booktittleinput")
var bookdescriptioninput=document.getElementById("bookdescriptioninput")
var container=document.querySelector(".container")

addbook.addEventListener("click",function(){
     contoverlay.style.display="none"
    addbookdetails.style.display="none"



    var div=document.createElement("div")
    div.setAttribute("class","cont-book")
    div.innerHTML=`<h2>${booknameinput.value}</h2>
            <h4>${booktittleinput.value}</h4>
            <p>${bookdescriptioninput.value}</p>
            <button id="bookdelete" onclick="del(event)">Delete</button>`
    container.append(div)

})
function del(event){
    event.target.parentElement.remove()

}