
function dibujar() 
{
	
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