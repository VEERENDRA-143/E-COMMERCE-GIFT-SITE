const carousel = document.querySelector(".carousel");

let isDragstart = false;

const dragstart = (e) =>{
    isDragstart=true;
}

const dragging = (e)=>{
    if (!isDragstart) return;
    e.preventDefault();
    carousel.scrollLeft=e.pageX;
}

const dragstop=() => {
    isDragstart=false;
}
carousel.addEventListener("mousemove",dragstart)
carousel.addEventListener("mousemove",dragging)
carousel.addEventListener("mousemove",dragstop)