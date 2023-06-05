const draggableElements=document.querySelectorAll('.draggable');
const droppableElements=document.querySelectorAll('.droppable');

draggableElements.forEach(elem=>{
    elem.addEventListener('dragstart',dragStart);
    elem.addEventListener('dragenter',dragEnter);
    elem.addEventListener('dragleave',dragLeave);

});

droppableElements.forEach(elem =>{
    elem.addEventListener("dragover",dragOver);
    elem.addEventListener("drop",drop);
});

function dragStart(event){
    event.dataTransfer.setData("text",event.target.id);
}

function dragEnter(event){
    if(!event.target.classList.contains("dropped")){
        event.target.classList.add('droppable-hover');
    }
    
}

function dragOver(event){
    if(!event.target.classList.contains("dropped")){
    event.preventDefault();

}
}
function dragLeave(event){
    event.target.classList.remove('droppable-hover');
}

function drop(event){
    event.preventDefault();
    event.target.classList.remove('droppable-hover');
    const draggableElementdata=event.dataTransfer.getData("text");
    const droppableElementdata=event.target.getAttribute('data-draggable-id');
    if(draggableElementdata===droppableElementdata){
        event.target.classList.add('dropped');
        const draggableElement=document.getElementById(draggableElementdata);
        event.target.style.backgroundColor=draggableElement.style.color;
        draggableElement.classList.add('dragged');
        draggableElement.setAttribute("draggable","false");
        event.target.insertAdjacentHTML("afterbegin",`<i class="fas fa-${draggableElementdata}"></i>`)


    }
}