var dw=750;
function resize(){
	var kw=document.documentElement.clientWidth;
	var bl=kw/dw*100;
	document.documentElement.style.fontSize=bl+'px';
}
resize();
window.addEventListener('resize',resize);