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

function getMousePos(c, evt) {
	return {
		x: evt.clientX,
		y: evt.clientY
	};
}

var count_click = 0;
function count_click_add() {
  count_click += 1;
}

// document.getElementById('espacio').innerHTML = 'estas haciendo click ' + count_click;


// function coordenadas(event){
// 	x=event.clientX;
// 	y=event.clientY;

// 	document.getElementById("x").value = x;
// 	document.getElementById("y").value = y;
// 	document.getElementById('myCanvas').click = function() {
// 		document.getElementById('espacio').innerHTML = 'estas haciendo click ';
// 		count_click_add();
// 	}

// // }
// /*--version 2 --*/
// c.addEventListener('mousemove', function(evt) {

// 	var x = [], y = [];

// 	var mousePos = getMousePos(c, evt);
// 	// var mousePosition = getMousePosXY(c, evt);
// 	count_click_add();
// 	document.getElementById('espacio').innerHTML = 'estas haciendo click <br> ' + count_click;
// 	// var message = mousePos.x + ',' + mousePos.y;
// 	x[count_click] = mousePos.x;
// 	y[count_click] = mousePos.y;

// 	console.log('-->'+ x[count_click]+','+y[count_click]);

// 	/*-------------------------------------*/
// 	/*--------    DIBUJAR LINEA    --------*/
// 	/*-------------------------------------*/


// 	if(x[1] == x[2])	//revisamos si es una linea vertical
// 	{
// 		for (var i = y[1]; i <= y[2]; i++) 
// 		{
// 			ctx.putImageData(imgData, x[1], i);
// 		}
// 	}
// 	else{
// 			if (y[1] == y[2]) 	//revisamos si es horizontal
// 			{
// 				for (var i = x[1]; i <= x[2]; i++) 
// 				{
// 					ctx.putImageData(imgData, i, y[1]);
// 				}
// 			}
// 			else{
// 				if ((y[2]-y[1])==(x[2]-x[1])) //revisamos si es de 45°
// 				{
// 					for (var i = x[1]; i <x[2]; i++) 
// 					{
// 						console.log(x[1]+x[2]);
// 						ctx.putImageData(imgData, i, i);
// 					}
// 				}
// 			}
// 		}


// 	/*--------------------------------------*/
// 	/*-------  FIN  DIBUJAR LINEA    -------*/
// 	/*--------------------------------------*/

// }, false);


// function getMousePosXY(c,evt){
// 	var x = [],y =[];

// 	x[i] = evt.clientX;
// 	y[i] = evt.clientY;
// 	console.log(x[i]+','+y[i]);

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
