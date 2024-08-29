let inputfiled; 
        function numbers(num){
             inputfiled =document.getElementsByClassName("calculation-field")[0];
            inputfiled.value +=num;
            console.log(typeof num);
        }

        function operend(type){

            inputfiled =document.getElementsByClassName("calculation-field")[0];
                
            if(type == 'div'){
                inputfiled.value +=`/`;
            }
            if(type == 'point'){
                inputfiled.value +=`.`;
            }
            else  if(type == 'mul'){
                inputfiled.value +=`*`;
            }
            else  if(type == 'add'){
                inputfiled.value +=`+`;
            }

            else  if(type == 'sub'){
                 inputfiled.value += '-';
                console.log(typeof inputfiled.value);
            }
            else  if(type == 'equal'){
                inputfiled = eval(inputfiled.value);
                document.getElementsByClassName("calculation-field")[0].value = inputfiled;
                
                
                
            }
        }