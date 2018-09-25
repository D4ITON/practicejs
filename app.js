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
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

// canvas.addEventListener('click', function(evt) {
//         var mousePos = getMousePos(canvas, evt);
//         var message = mousePos.x + ',' + mousePos.y;
// console.log(message);
// }, false);

function getMousePos(c, evt) {
	return {
		x: evt.clientX,
		y: evt.clientY
	};
}

/*-----CREACION DE LA CLASE LINEA-----*/
class Line {
    constructor(data){
        this.xi = data.xi;
        this.yi = data.yi;
        this.xf = data.xf;
        this.yf = data.yf;
    }
     
    getInicial(){
        return {
        	xi: this.xi,
        	yi: this.yi,
        }
    }

    getFinal(){
        return {
        	xf: this.xf,
        	yf: this.yf,
        }
    }
    setInicial(xi,yi){
        this.xi = xi;
        this.yi = yi;
    }
    setFinal(xf,yf){
        this.xf = xf;
        this.yf = yf;
    }
}

// let data = {
	
// 	xi:10,
// 	yi:10,
// 	xf:100,
// 	yf:100
// }
 


/*---DEFINICION DE NUEVA INSTANCIA---*/

var btn = document.getElementById('btn-submit');

canvas.addEventListener('click', function(evt) {

	var mousePos = getMousePos(canvas, evt);
	var point = [mousePos.x,mousePos.y];

	// console.log(point);

	let data = {
		xi:point[0],
		yi:point[1],
		xf:100,
		yf:100
	}

	var line = new Line(data);
	console.log(line);

	console.log(line.getInicial());

	xi = line.getInicial().xi;
	yi = line.getInicial().yi;
	xf = line.getFinal().xf;
	yf = line.getFinal().yf;

	console.log({xi,yi,xf,yf});

	dibujarLinea(xi,yi,xf,yf);

	
	
}, false);


function dibujarLinea(xi,yi,xf,yf) 
{
	if (yi>=yf || xi>=xf) 
	{
		var aux;
		aux = xf;
		xf = xi;
		xi = aux;
		aux = yf;
		yf = yi;
		yi = aux;
		
	}
		
	var m = (yf-yi)/(xf-xi);
	var b = yi - m*xi;

	for (var i = xi ; i <= xf; i++) {
		var y = (m*i)+b;
		ctx.putImageData(imgData, i, Math.round(y));
		console.log(i);
	}

}





