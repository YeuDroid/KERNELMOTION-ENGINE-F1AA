var casillas = [8, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//0 vasio
//1 es maquina es X
//2 es humano es O

var M = 1;
var H = 2;
var QuienInicio = -1;


function log(msj)
{
        
}
function getCasilla(casilla){
	return casillas[casilla];
}
function setCasilla(casilla,tipo){
	casillas[casilla] = tipo;	
}
function IAGatoMovs() {
    //alert("eeuu");
    if(movGanar()) return;
	if(movProtection()) return;
	if(movPrimermovimiento())return;
	if(problemsResolved()) return;
	if(movDefault()) return;
	
 
    function movPrimermovimiento() {
		//solo se a movido humano una ves
      if(casillas[1] + casillas[2] + casillas[3] + casillas[4] + casillas[5] + casillas[6] + casillas[7] + casillas[8] + casillas[9] == 2)		
	  {
          //return gatoInicia();
          if (estaLibre(5)) selectX(5);
          else
          {
              gatoInicia();
          }

          return true;
	  }
	  return false;
	}
    function problemsResolved()
    {


    if(movOcupaCentro())
	{return true;}

	if(movEvidTrinit()) 
    {return true;}

	if(movEncProblem())
    {return true;}

	if(movIProblem())
    {return true;}

    if(movEvidBeforeTrinit())
    { return true; }
    
	if(movResolveMHM())
    {return true;}

	return false;
	////////////////////////
    function errorNoPiensaEnInicioMI()
        {
            if (casillas[1] + casillas[2] + casillas[3] + casillas[4] + casillas[5] + casillas[6] + casillas[7] + casillas[8] + casillas[9] == 3)
            {
                selectRandomOption(new Array(1,3,5,7,9,5));
                return true;
            }

            return false;
        }
	function movOcupaCentro(){
       if(casillas[1] + casillas[2] + casillas[3] + casillas[4] + casillas[5] + casillas[6] + casillas[7] + casillas[8] + casillas[9] == 2)	  
		 {
			 if(casillas[5] == 0)
             {
				 //nueva funcionalidad version B
				  selectRandomOption(new Array(5,1,3,5,7,9,5));
				 //decrapitado en version B
				 //selectX(5);
				 return true;
			 }
			 else
			 {
			    return selectRandomOption(new Array(1,3,7,9));
			 }
		    
		 }
	     return false;
	}
	function movResolveMHM(){
		///937
		if(casillas[9] == M  && XOR(new Array(3,7)) && casillas[5] == 0)
		{
			selectX(5);
			return true
		}
		///319
		if(casillas[3] == M  && XOR(new Array(1,9)) && casillas[5] == 0)
		{
			selectX(5);
			return true
		}
		///137
		if(casillas[1] == M  && XOR(new Array(3,7)) && casillas[5] == 0)
		{
			selectX(5);
			return true
		}
		///719
		if(casillas[7] == M  && XOR(new Array(1,9)) && casillas[5] == 0)
		{
			selectX(5);
			return true
		}
		
		return false;
	}
	//problema de 5 =M 9 = M 1=H y xor 6/8 y all free
	function movEvidBeforeTrinit(){
        //A
        
		if((casillas[5]==M && casillas[9]==M && casillas[1]==H)  && (XOR(6,8) && areAllOptionsLibre(new Array(2,3,4,7))))
		{
			if(casillas[6] == H)selectX(7);
			if(casillas[8] == H)selectX(3);
			return true;
		}
		//B
		if((casillas[5]==M && casillas[3]==M && casillas[7]==H)  && (XOR(2,6) && areAllOptionsLibre(new Array(1,4,8,9))))
		{
			if(casillas[2] == H)selectX(9);
			if(casillas[6] == H)selectX(1);
			return true;
		}
		//C
		if((casillas[5]==M && casillas[1]==M && casillas[9]==H)  && (XOR(2,4) && areAllOptionsLibre(new Array(3,6,7,8))))
		{
			if(casillas[2] == H)selectX(7);
			if(casillas[4] == H)selectX(3);
			return true;
		}
		//D
		if((casillas[5]==M && casillas[7]==M && casillas[3]==H)  && (XOR(4,8) && areAllOptionsLibre(new Array(1,2,6,9))))
		{
			if(casillas[4] == H)selectX(9);
			if(casillas[8] == H)selectX(1);
			return true;
		}
		
    	return false;
	}
	function XOR(val1,val2){
    
     if(casillas[val1] == H && casillas[val2] == 0)return true;
     if(casillas[val2] == H && casillas[val1] == 0)return true;
     return false;
     
      
    }
	function movEvidTrinit(){
		//A
      if(casillas[7] == H && casillas[5] == H && casillas[3] == M && areAllOptionsLibre(new Array(1,2,4,6,8,9)))
	  {
		  selectRandomOption(new Array(1,9));
		  return true;
	  }
	    //B
	   if(casillas[1] == H && casillas[5] == H && casillas[9] == M && areAllOptionsLibre(new Array(2,3,4,6,7,8)))
	  {
		  selectRandomOption(new Array(3,7));
		  return true;
	  }
	    //C
	   if(casillas[3] == H && casillas[5] == H && casillas[7] == M && areAllOptionsLibre(new Array(1,2,4,6,8,9)))
	  {
		  selectRandomOption(new Array(1,9));
		  return true;
	  }
	    //D
		 if(casillas[9] == H && casillas[5] == H && casillas[1] == M && areAllOptionsLibre(new Array(2,3,4,6,7,8)))
	  {
		  selectRandomOption(new Array(3,7));
		  return true;
	  }
	  
	  ////ninguno
	  return false;
	  
	}
     //problema si me pone el en dos orillas y yo en centro solo si H inicia   
	function movEncProblem(){
		///
		    	
			if((casillas[7] == H && casillas[5] == M && casillas[3] == 0) && areAllOptionsLibre(new Array(1,2,3,4,6,8,9)))
		    {
				selectX(3);
				return true;
			}
			if((casillas[1] == H && casillas[5] == M && casillas[9] == 0) && areAllOptionsLibre(new Array(2,3,4,6,7,8,9)))
		    {
				selectX(9);
				return true;
			}
			if((casillas[3] == H && casillas[5] == M && casillas[7] == 0) && areAllOptionsLibre(new Array(1,2,4,6,7,8,9)))
		    {
				selectX(7);
				return true;
			}
			if((casillas[9] == H && casillas[5] == M && casillas[1] == 0) && areAllOptionsLibre(new Array(1,2,3,4,6,7,8)))
		    {
				selectX(1);
				return true;
			}
			
			return false;
			
	}
     //problema si me entrapa 2 orilla H y M esta en 5
    function movIProblem() {
		
		if(isValidEntry())
		{
		  movSelect();
		  return true;
		}
		return false;

		////

    function movSelect() {
		//if(!(selectRandomOption(new Array(5))))
		//{
          return selectRandomOption(new Array(2, 4, 6, 8));
	    //}
    }

    function isValidEntry() {
        
        if (areAllLibres() && isValidIProblem()) return true;
        else return false;
		
		////
		function isValidIProblem() {
        if (casillas[1] == H && casillas[5] == M && casillas[9] == H) {
            return true;
        }

        if (casillas[3] == H && casillas[5] == M && casillas[7] == H) {
            return true;
        }

        return false;

    }
	
	    function areAllLibres() {

        if (areAllOptionsLibre(new Array(2, 3, 4, 6, 7, 8)) || areAllOptionsLibre(new Array(1, 2, 4, 6, 8, 9))) {
          
          return true;
        } else
        {
         
         return false;
        }

        ///////////
       
    }
    }
}
	}
    function movGanar() {

        if (selectTree(new Array(1, 2, 3))) return true;
        if (selectTree(new Array(4, 5, 6))) return true;
        if (selectTree(new Array(7, 8, 9))) return true;

        if (selectTree(new Array(1, 4, 7))) return true;
        if (selectTree(new Array(2, 5, 8))) return true;
        if (selectTree(new Array(3, 6, 9))) return true;
        if (selectTree(new Array(1, 5, 9))) return true;
        if (selectTree(new Array(3, 5, 7))) return true;
        return false;

        function selectTree(opciones) {
            function isEntryValid() {

                if (casillas[opciones[0]] == 2 || casillas[opciones[1]] == 2 || casillas[opciones[2]] == 2) {
                    return false;
                } else {
                    if ((casillas[opciones[0]] + casillas[opciones[1]] + casillas[opciones[2]]) == 2) {
                        //console.log('8jj');
                        return true;
                    } else return false;

                }
            }


            if (!(isEntryValid())) {
                //console.log('NO ENTRY TREE');
                return false;
            }
            for (opc in opciones) {
                if (casillas[opciones[opc]] == 0) {
                    selectX(opciones[opc]);
                    //console.log(opciones[opc]);
                    return true;
                }
            }

            //console.log('ERR SELECT TRE');
            return false;
        }
    }
    function movProtection() {
        if (protectTree(new Array(1, 2, 3))) return true;
        if (protectTree(new Array(4, 5, 6))) return true;
        if (protectTree(new Array(7, 8, 9))) return true;

        if (protectTree(new Array(1, 4, 7))) return true;
        if (protectTree(new Array(2, 5, 8))) return true;
        if (protectTree(new Array(3, 6, 9))) return true;

        if (protectTree(new Array(1, 5, 9))) return true;
        if (protectTree(new Array(3, 5, 7))) return true;

        function protectTree(opciones) {
            function isEntryValid() {
                if (casillas[opciones[0]] == 1 || casillas[opciones[1]] == 1 || casillas[opciones[2]] == 1) {
                    //log(67);
                    return false;
                } else {
                    if ((casillas[opciones[0]] + casillas[opciones[1]] + casillas[opciones[2]]) == 4) {
                        return true
                    } else {
                        //log(77);
                        return false
                    }
                }
            }

            if (!(isEntryValid())) return false;
            else {
                function getEmptyItem() {
                    if (casillas[opciones[0]] == 0) return 0;
                    if (casillas[opciones[1]] == 0) return 1;
                    if (casillas[opciones[2]] == 0) return 2;

                    throw 'ERR 666775';
                }

                //console.log(454677777);
                selectX(opciones[getEmptyItem()]);
				return true;
            }
        }

        //fin
        //log(12);
        return false;
    }
    function movDefault() {
		
		//if (selectRandomOption(new Array(5)))return true;
        if (selectRandomOption(new Array(1, 2, 3, 4, 5, 6, 7, 8, 9))) {
          //  console.log('MOV DEFAULT');
            return true;
        } else return false;
    }
	function areAllOptionsLibre(arrOpc) {
         
           for (i in arrOpc) {
                if (casillas[arrOpc[i]] > 0) return false;
            }
            return true;
        }
	
}

function gatoInicia() {
	//error doble proteccion
    return selectRandomOption(new Array(1, 3, 5, 7, 9));
}

function selectRandomOption(opciones) {
    function isArrValid() {

        for (index in opciones) {
            if (casillas[opciones[index]] == 0) {
                return true;
            }
        }
        return false;

    }

    //console.log('ARRAY LLENO NO OPTIONABLE');
    if (!(isArrValid())) return false;

    var opcion = getRandom(opciones.length);

    if (estaLibre(opciones[opcion - 1])) {
        selectX(opciones[opcion - 1]);
        return true;
    } else {
        //console.log(45455);
        return selectRandomOption(opciones);
    }

    return false;
}

//fin ia
function selectX(casilla) {
    if (QuienInicio == -1) {
        if (casillas[1] + casillas[2] + casillas[3] + casillas[4] + casillas[5] + casillas[6] + casillas[7] + casillas[8] + casillas[9] == M) {
        //solo maquina lo ocupo
        QuienInicio = M;
        }
    }

    if (estaLibre(casilla)) {
        casillas[casilla] = 1;
        //pintar
    } else casillaOcupada();

}

function selectO(casilla) {
    //
    if (QuienInicio != -1) {
        if (casillas[1] + casillas[2] + casillas[3] + casillas[4] + casillas[5] + casillas[6] + casillas[7] + casillas[8] + casillas[9] == H) {
            //solo maquina lo ocupo
            QuienInicio = H;
        }
    }

    if (estaLibre(casilla)) {
        casillas[casilla] = 2;
        //pintar
    } else casillaOcupada();

}

function casillaOcupada() {
   // console.log('Casilla ocupada');
}

function getRandom(seed) {
    return Math.floor((Math.random() * seed) + 1);
}

function estaLibre(casilla) {
    if (casillas[casilla] >= 1) return false;
    else return true;
}

function quienGana() {

    //delado
    if (casillas[1] == 1 && casillas[2] == 1 && casillas[3] == 1) return 1;

    if (casillas[4] == 1 && casillas[5] == 1 && casillas[6] == 1) return 1;

    if (casillas[7] == 1 && casillas[8] == 1 && casillas[9] == 1) return 1;

    //acostadas

    if (casillas[1] == 1 && casillas[4] == 1 && casillas[7] == 1) return 1;

    if (casillas[2] == 1 && casillas[5] == 1 && casillas[8] == 1) return 1;

    if (casillas[3] == 1 && casillas[6] == 1 && casillas[9] == 1) return 1;

    //diagonales

    if (casillas[3] == 1 && casillas[5] == 1 && casillas[7] == 1) return 1;

    if (casillas[1] == 1 && casillas[5] == 1 && casillas[9] == 1) return 1;

    //humano

    //delado
    if (casillas[1] == 2 && casillas[2] == 2 && casillas[3] == 2) return 2;

    if (casillas[4] == 2 && casillas[5] == 2 && casillas[6] == 2) return 2;

    if (casillas[7] == 2 && casillas[8] == 2 && casillas[9] == 2) return 2;

    //acostadas

    if (casillas[1] == 2 && casillas[4] == 2 && casillas[7] == 2) return 2;

    if (casillas[2] == 2 && casillas[5] == 2 && casillas[8] == 2) return 2;

    if (casillas[3] == 2 && casillas[6] == 2 && casillas[9] == 2) return 2;

    //diagonales

    if (casillas[3] == 2 && casillas[5] == 2 && casillas[7] == 2) return 2;

    if (casillas[1] == 2 && casillas[5] == 2 && casillas[9] == 2) return 2;

    //nadie gana
    if (casillas[1] >= 1 && casillas[2] >= 1 && casillas[3] >= 1 && casillas[4] >= 1 && casillas[5] >= 1 && casillas[6] >= 1 && casillas[7] >= 1 && casillas[8] >= 1 && casillas[9] >= 1) return 3;

    return 0;
     

}

function quienInicio()
{
    return QuienInicio;
}



