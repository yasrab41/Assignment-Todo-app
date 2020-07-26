var list = document.getElementById("list")


function add_todo_item(){

    var get_input = document.getElementById("todo-item");
    //console.log(get_input.value);


    //create li list
    var li=document.createElement("li");
    var liText=document.createTextNode(get_input.value);


    //create delete button
    var delbtn=document.createElement('button')
    delbtn.setAttribute('class','btn');
    delbtn.setAttribute('onclick','deleteItem(this)');
    var delText=document.createTextNode("Delete");
    delbtn.appendChild(delText);


    //create edit button on some list
    var editbtn=document.createElement('button');
    var editText=document.createTextNode('Edit');
    editbtn.setAttribute('class','btn');
    editbtn.setAttribute('onclick','editItem(this)')
    editbtn.appendChild(editText);


    li.appendChild(liText);
    li.appendChild(delbtn);
    li.appendChild(editbtn)

    list.appendChild(li);

    get_input.value=""

}

function deleteItem(showAllinthatTag){
    //console.log(showAllinthatTag)
    //console.log(showAllinthatTag.parentNode)

    showAllinthatTag.parentNode.remove();
}


function deleteAll(){
    list.innerHTML="";
}

function editItem(e){
    console.log(e)
    //console.log(e.parentNode.childNodes[0]);
    //e.parentNode.childNodes[0].nodeValue+='Yasrab';

    console.log(e.parentNode.firstChild);

    var editValue=prompt("Enter edit Value",e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue=editValue;
    
}