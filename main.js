var mouseevent="empty"
var last_position_of_X, last_position_of_Y
var current_position_of_mouse_X, current_position_of_mouse_Y
canvas=document.getElementById('myCanvas')
ctx=canvas.getContext("2d")
var color="black"
 var width_of_line=1
 canvas.addEventListener("mousedown", my_mousedown)
 function my_mousedown(e){
color= document.getElementById("color").value
width_of_line=document.getElementById("width_of_line").value
mouseevent="mousedown"}
canvas.addEventListener("mouseleave", my_mouseleave)
function my_mouseleave(e)
{
    mouseevent="mouseleave" 
}
canvas.addEventListener("mouseup", my_mouseup)
function my_mouseup(e)
{
    mouseevent="mouseup" 
}
canvas.addEventListener("mousemove", my_mousemove)
function my_mousemove(e)
{
current_position_of_mouse_X= e.clientX-canvas.offsetLeft
current_position_of_mouse_Y= e.clientY- canvas.offsetTop
if (mouseevent=="mousedown")
{
    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidth = width_of_line
    ctx.moveTo(last_position_of_X, last_position_of_Y)
    ctx.lineTo(current_position_of_mouse_X, current_position_of_mouse_Y)
    ctx.stroke()
}
last_position_of_X=current_position_of_mouse_X
last_position_of_Y=current_position_of_mouse_Y
}
function cleararea()
{
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}