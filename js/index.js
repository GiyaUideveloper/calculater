const canvas = document.querySelector("canvas"),
toolBtns = document.querySelectorAll(".tool"),
ctx = canvas.getContext("2d");


let isDrawing = false,
selectorTool = "brush",
brushWidth = 5;

window.addEventListener("load",() =>{
	canvas.width = canvas.offsetWidth;
	canvas.height = canvas.offsetHeight;
});

const startDraw = () => {
	isDrawing = true;
	ctx.beginPath();
	ctx.lineWidth = brushWidth;
}
const drawing = (e) => {
	if(!isDrawing) return;
	
	if(selectorTool === "brush") {
		ctx.lineTo(e.offsetX, e.offsetY);
		ctx.stroke();
	}
	
}

toolBtns.forEach(btn => {
	btn.addEventListener("click", () =>{
		document.querySelector(".options .active").classList.remove("active");
		btn.classList.add("active");
		selectorTool = btn.id;
		console.log(selectorTool);
	})
})
 canvas.addEventListener("mousedown", startDraw);
 canvas.addEventListener("mousemove", drawing);
 canvas.addEventListener("mouseup", () => isDrawing = false);