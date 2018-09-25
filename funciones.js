/*FUNCION PARA DIBUJAR LINEA*/

function dibujarLinea(xi,yi,xf,yf) 
{
	var v = validados(xi,yi,xf,yf);
	var m = (v.yf-v.yi)/(v.xf-v.xi);
	var b = v.yi - m*v.xi;

	for (var i = v.xi ; i <= v.xf; i++) {
		var y = (m*i)+b;
		ctx.putImageData(imgData, i, Math.round(y));
		console.log(i);
	}

}