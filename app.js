/*-----Programa que dibuja lineas y rectas con javascript-----*/
/* -----CODIGO NECESARIO PARA MOSTRAR LOS PIXELES-----*/

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var imgData = ctx.createImageData(1, 1);
var i;
for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i+0] = 0;
    imgData.data[i+1] = 0;
    imgData.data[i+2] = 0;
    imgData.data[i+3] = 255;
}

// c.addEventListener('mousemove', function(evt) {
//         var mousePos = getMousePos(c, evt);
//         var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
// console.log(message);
// }, false);

// function getMousePos(c, evt) {
// 	return {
// 	  x: evt.clientX,
// 	  y: evt.clientY
// 	};
// }

/*------------ACA COMIENZAN LAS FUNCIONES------------*/

function dibujar() 
{
	var x0 = document.getElementById("x0").value;
	var xf = document.getElementById("xf").value;
	var y0 = document.getElementById("y0").value;
	var yf = document.getElementById("yf").value;

	
	if(x0 == xf)	//revisamos si es una linea vertical
	{
		for (var i = y0; i <= yf; i++) 
		{
			ctx.putImageData(imgData, x0, i);
		}
	}
	else{
		if (y0 == yf) 	//revisamos si es horizontal
		{
			for (var i = x0; i <= xf; i++) 
			{
				ctx.putImageData(imgData, i, y0);
			}
		}
		else{
			if ((yf-y0)==(xf-x0)) //revisamos si es de 45°
			{
				for (var i = x0; i <xf; i++) 
				{
					console.log(x0+xf);
					ctx.putImageData(imgData, i, i);
				}
			}
		}
	}

}
