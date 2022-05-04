    function sumarr(a,b){
    alert(a+b);
    alert("Terminé")
}



    function func_ej1(){
        let ej1_c1 = parseFloat(document.getElementById('ej1_n1').value);
        let ej1_c2 = parseFloat(document.getElementById('ej1_n2').value);
        let ej1_c3 = parseFloat(document.getElementById('ej1_n3').value);
        if(ej1_c1>ej1_c2 && ej1_c1>ej1_c3){
            document.getElementById("ej1_mayor").value = ej1_c1;
        } else if(ej1_c2>ej1_c3 && ej1_c2>ej1_c1){
            document.getElementById("ej1_mayor").value = ej1_c2;
        } else {
            document.getElementById("ej1_mayor").value = ej1_c3;
    }
    if(ej1_c1<ej1_c2 && ej1_c1<ej1_c3){
            document.getElementById("ej1_menor").value = ej1_c1;
        } else if(ej1_c2<ej1_c3 && ej1_c2<ej1_c1){
            document.getElementById("ej1_menor").value = ej1_c2;
        } else {
            document.getElementById("ej1_menor").value = ej1_c3;
        }
    }
    function func_ej2(){
            let ej2_n1 = parseFloat(document.getElementById('ej2_n1').value);
            let ej2_n2 = parseFloat(document.getElementById('ej2_n2').value);
            const ej2_suma= ej2_n1 + ej2_n2;
                document.getElementById("ej2_resultado").value = ej2_suma;
    }
    function func_ej3(){
            let ej3_pal = document.getElementById('ej3_pal').value;
            let ej3_n1 = parseFloat(document.getElementById('ej3_n1').value);
            var ej3_ac ='';
            for (let ej3_for = 0; ej3_for < ej3_n1; ej3_for++) {
                 ej3_ac+= " "+ej3_pal;
            }
            document.getElementById("ej3_resultado").value = ej3_ac;
        }
    function func_celfar(){
            let ej4_cel = parseFloat(document.getElementById('ej4_cel').value)
            var ej4_res_1 = ''
            ej4_res_1= (ej4_cel * 1.8) + 32
            document.getElementById("ej4_res_1").value=ej4_res_1
        }                
    function func_farcel(){
            let ej4_far = parseFloat(document.getElementById('ej4_far').value)
            var ej4_res_2 =''
            ej4_res_2=(ej4_far-32)*(5/9)
            document.getElementById("ej4_res_2").value=ej4_res_2
        }
    function func_ej5(){
            const pal=document.getElementById('ej5_pal').value;
            const ej5_nums = pal.length
            document.getElementById('ej5_nums').value=ej5_nums
             
            }
    function func_ej6(){
                let ej6_num= parseFloat(document.getElementById('ej6_num').value)
                if (ej6_num%2==0){ document.getElementById("ej6_res").value= 'Par'
                    } else {
                         document.getElementById("ej6_res").value = 'Impar'
                    }
            }
    function func_ej7(){
                let ej7_num1=parseFloat(document.getElementById('ej7_num1').value)
                let ej7_num2=parseFloat(document.getElementById('ej7_num2').value)
                var acum=''
                for (let i = ej7_num1; i <= ej7_num2; i++) {             
                if (i % 3==0 ){ 
                    acum += " " + i 
                    
                }
                
            }
            document.getElementById("ej7_mult").value= acum
        }
    function func_ej8(){
            let ej8_n1 = parseFloat(document.getElementById('ej8_n1').value);
            var ej8_test =true;
            var ej8_ac ="";
            for (let ej8_for1 = 2; ej8_for1 < ej8_n1; ej8_for1++) {
                for (let ej8_for2 = 2; ej8_for2 < ej8_for1; ej8_for2++) {
                 if (ej8_for1%ej8_for2===0){
                    ej8_test = false;
                }
            }
            if (ej8_test == true) {
                ej8_ac += ej8_for1 + " // ";
            } else{
                ej8_test = true;
            }
        }
            document.getElementById("ej8_prim").value = ej8_ac;
        }
    function func_ej9(){
            document.getElementById("ej9_parra").value = "Mi nombre es "+ document.getElementById('ej9_nom').value +" "+ document.getElementById('ej9_ape').value +", tengo "+ parseFloat(document.getElementById('ej9_edad').value) + " años. Nací en la ciudad de " + document.getElementById('ej9_ciu').value; 
        }
    function func_ej10(){
            let ej10_n1 = parseFloat(document.getElementById('ej10_n1').value);
            let ej10_n2 = parseFloat(document.getElementById('ej10_n2').value);
            var ej10_ac ="";
            if(ej10_n2>ej10_n1) {
                    for (let ej10_for=ej10_n1+1; ej10_for < ej10_n2; ej10_for++){
                        if (ej10_for==(ej10_n2-1)){
                         ej10_ac += ej10_for;
                     } else{
                            ej10_ac += ej10_for + ",";
                        }
                 }
                 document.getElementById("ej10_entre").value = ej10_ac;
             } else {
                for (let ej10_for=ej10_n1-1; ej10_for > ej10_n2; ej10_for--){
                        if (ej10_for==(ej10_n2+1)){
                         ej10_ac += ej10_for;
                     } else{
                            ej10_ac += ej10_for + ",";
                        }
                 }
                 document.getElementById("ej10_entre").value = ej10_ac;
             }
        }
        function func_ej21(a,b){
            const ej21_suma= a + b; 
                alert(ej21_suma);
    }


