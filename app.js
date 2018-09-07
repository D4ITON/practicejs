var c = document.getElementById("myCanvas");
/* -----CODIGO NECESARIO PARA MOSTRAR LOS PIXELES-----*/

var ctx = c.getContext("2d");
var imgData = ctx.createImageData(1, 1);
var i;
for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i+0] = 0;
    imgData.data[i+1] = 0;
    imgData.data[i+2] = 0;
    imgData.data[i+3] = 255;
}

/*------------ACA COMIENZAN LAS FUNCIONES------------*/



function dibujar(x0,xf) 
{
	for (var i = x0; i <xf; i++) 
	{
		console.log(x0+xf);
		ctx.putImageData(imgData, i, i);
	}
}
