// when user add any text in inputbox 
// it'll display in ul as a list item
// we can create list item through js  
// if user want to delete any list item the 
// another child button also be deleted with
// the current list item
function myFunc() {
    let valueList = document.createElement("li");
    let userText = document.getElementById("invalue").value;
    // valueList.innerHTML = userText;
    document.getElementById("invalue").value = "";
    let x = Math.random() * 100;
    document.getElementById("parent").appendChild(valueList);

    valueList.id = "uniqueId" + x;
    // span 
    let locspan = document.createElement("span");
    valueList.appendChild(locspan);
    locspan.id="spanId"+x;
    locspan.innerHTML = userText;

    let closebutton = document.createElement("button");
    valueList.appendChild(closebutton);
    closebutton.innerHTML = "Delete";
    // button styling 
    closebutton.id = "uniqueId" + x;
    // 
    // edit button 
    let editbutton = document.createElement("button");
    valueList.appendChild(editbutton);
    editbutton.innerHTML = "Edit";
    // edit button 

    editbutton.onclick = function() {
        editvalue("spanId"+x);
    };
    
    // styling
    editbutton.style.backgroundColor = "#0d6efd";
    editbutton.style.border = "#0d6efd";
    editbutton.style.color = "#fff";
    editbutton.style.padding = "8px";
    editbutton.style.borderRadius = "5px";
    editbutton.style.marginBottom = "8px";
    editbutton.style.marginLeft = "8px";
    // close buttonn style
    closebutton.style.backgroundColor = "#0d6efd";
    closebutton.style.border = "#0d6efd";
    closebutton.style.color = "#fff";
    closebutton.style.padding = "8px";
    closebutton.style.borderRadius = "5px";
    closebutton.style.marginBottom = "8px";
    closebutton.style.marginLeft = "8px";
    //===================================//

    closebutton.onclick = function() {
        deletes("uniqueId" + x);
    };

}
// update button hide
document.getElementById("updatebtn").style.display = "none";

var updateglobal = "";
function deletes(id) {
    var y = document.getElementById(id);
    y.remove();
}
// edit button functions
function editvalue(id) {
    updateglobal = id;
    var e = document.getElementById(id).innerHTML;
    var c = document.getElementById("invalue").value = e;
    document.getElementById("updatebtn").style.display = "inline-block";
    document.getElementById("addbtn").style.display = "none";
}
function updatevalue(){
    let t = document.getElementById(updateglobal).innerHTML;
    let m = document.getElementById("invalue").value ;
    document.getElementById(updateglobal).innerHTML = m;
    document.getElementById("updatebtn").style.display = "none";
    document.getElementById("addbtn").style.display = "inline-block";
}