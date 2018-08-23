var names=["arjun","raja","zalaji","cbishek","india","finland","ragul","rajpreet","ankita","shriya","shrijith","swapnil"];
var makeEmpty="";
var text="";
var iterator=0;
var Length=names.length;
var dynamicList="";
var currentId=0;
names.sort();
//when user clicks outside suggestion div
window.addEventListener("click", function(){
  var hideMe = document.getElementById("dropDown");
    document.onclick = function(clicker){
    if(clicker.target.id !== 'hideMe' && clicker.target.id !=='inputBox'){
     hideMe.style.display="None";
    }
  };
});
//user suggestion
function display()
{
  let count=1;
    currentId=0;
  text=document.getElementById("inputBox").value;
  document.getElementsByClassName("clear-button")[0].style.display="none";//If user press backspace after entering a value ("X") hidden
  document.getElementById("dropDown").innerHTML=makeEmpty;
   if(text.length>0)//if input string 
   {
    document.getElementsByClassName("clear-button")[0].style.display="block";
    for(iterator=0;iterator<Length;iterator++)
    { 
      if(names[iterator].toUpperCase().includes(text.toUpperCase()))
        {
         dynamicList="<li id='"+count+"' onclick='moveIntoTextBox(this.innerHTML)'>" +names[iterator]+ "</li>";    
         document.getElementById("dropDown").innerHTML+=(dynamicList);
         count++;
        }
        
    }
    if( document.getElementById("dropDown").innerHTML.length===0)
    document.getElementById("dropDown").innerHTML="No suggestion";
   }
    
}
//drop-down selection 
function moveIntoTextBox(data) 
{
   document.getElementById("inputBox").value=data; 
   document.getElementById("dropDown").innerHTML=makeEmpty;
}
//To change display of "X" button
function changeStyle()
{
  document.getElementById("dropDown").style.display="block";
}
//To clear input-Screen on "X" click
function clearScreen()
{
  document.getElementById("inputBox").value=makeEmpty;  
  document.getElementsByClassName("clear-button")[0].style.display="none";  
}

//Arrow-navigation
function arrowNavigation(event)
{    
  if(event.which!=13 && event.which!=38 && event.which!=40)
  {
    display();
  }
  else if(event.which===13 && currentId>0)
  {
    document.getElementById("inputBox").value=document.getElementById(currentId).innerText;
    document.getElementById("dropDown").innerHTML=makeEmpty;
  }
  else if(event.which===38)
  {
  if(currentId===0)
  currentId++;
  if((currentId)>1)
  document.getElementById("dropDown").scrollBy(0,-20);
  if(document.getElementById(currentId).previousSibling===null)
  {  
    document.getElementById(currentId).style.backgroundColor="#DF6021";
    let check=document.getElementById("dropDown").lastChild;
    currentId=(check.id);
    document.getElementById(currentId).style.backgroundColor="#f2f2f2";
    document.getElementById("dropDown").scrollTop= document.getElementById("dropDown").scrollHeight;
  }       
  else
  {
    document.getElementById(currentId).style.backgroundColor="#DF6021";
    currentId--;
    document.getElementById(currentId).style.backgroundColor="#f2f2f2";
  }
        
 }
 else if(event.which==40)
{
        if((currentId)>1)
         document.getElementById("dropDown").scrollBy(0,20);
     if(currentId==0)
      {
        currentId++;
        document.getElementById(currentId).style.backgroundColor="#f2f2f2";
       }
       else if(currentId!=null && document.getElementById(currentId).nextSibling===null)
      {  
          document.getElementById(currentId).style.backgroundColor="#DF6021";
          currentId=1;
          document.getElementById(currentId).style.backgroundColor="#f2f2f2";
          document.getElementById("dropDown").scrollTop=0;
      }  
     else
     {     
           document.getElementById(currentId).style.backgroundColor="#DF6021";
            currentId++;
           document.getElementById(currentId).style.backgroundColor="#f2f2f2";
         
     }    
    }
    
}
