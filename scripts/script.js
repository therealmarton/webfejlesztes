document.getElementById("mybutton").addEventListener("click", vegosszeg);

function vegosszeg()
		{
		 	let vegosszeg = 0;

            const napi = Number(document.getElementById("napijegy").checked);
            const berlet = Number(document.getElementById("berlet").checked);
            const kerekszallast = Number(document.getElementById("ksz").checked);
            const napiar= 19900;
            const berletar= 59900;
            const satorpernap = 4900;
            const lakopernap = 19900;
            const jurtapernap = 29900;
            const mobilpernap = 49900;
            const kedvezmeny_1 = 0.5;
            const kedvezmeny_2 = 0.25;

  

            let ar = 0;
            /*jegyberlet ara*/
            if(napi == 1){
                const a = Number(document.getElementById("juni20").checked);
                const b = Number(document.getElementById("juni21").checked);
                const c = Number(document.getElementById("juni22").checked);
                const d = Number(document.getElementById("juni23").checked);
                ar = (a+b+c+d)*napiar;
            }
            if(berlet == 1){
                 ar = berletar;   
            }
            /*szallas ara*/
            if(kerekszallast == 1){
               let szallas = document.getElementById("szallas").value;
               let tol = Number(document.getElementById("tolszam").value);
               let ig = Number(document.getElementById("igszam").value);

               napokszama = ig - tol;

               switch(szallas){
                case "satorhely":  ar = ar + (satorpernap*napokszama) ;
                break;
                case "lakokocsi": ar = ar + (lakopernap*napokszama);
                break;
                case "jurta": ar = ar + (jurtapernap*napokszama); 
                break;
                case "mobilhaz": ar = ar + (mobilpernap*napokszama);
                break;

               }
            }
            /*kedvezmeny arhoz adasa*/
            if(Number(document.getElementById("corvinusos").checked) == 1){
                ar = ar-(ar*kedvezmeny_1)
            }
            if(Number(document.getElementById("diak").checked) == 1){
                ar = ar-(ar*kedvezmeny_2)
            }

            document.getElementById("veg").innerHTML = `Végösszeg: ${ar} Ft`;

          

		}
