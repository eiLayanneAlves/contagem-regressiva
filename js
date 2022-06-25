<!doctype html>
<html>
    <head>
        <title>Javascript Completo 2022</title>
        <meta charset="utf-8">
        
        <script>
            
            (function(){
                var dataAtual = new Date();
                dataAtual.setHours(0);
                dataAtual.setMinutes(0);
                dataAtual.setSeconds(0);
                dataAtual.setMilliseconds(0);
                var anoAtual = dataAtual.getFullYear();                
                        
                var dataNiver = new Date(anoAtual, 11, 22);
                
                var dataAtualTS = dataAtual.getTime();
                var dataNiverTS = dataNiver.getTime();
                
                if (dataNiverTS === dataAtualTS){
                    alert('Parabens pelo seu aniversario');
                    return;
                }
                if(dataNiverTS < dataAtualTS){
                    dataNiver.setFullYear(++anoAtual);
                    dataNiverTS = dataNiver.getTime();
                }
                
                const UM_DIA_TS  = 24 * 60 * 60 * 1000;
                var diferenca = dataNiverTS - dataAtualTS;
                console.log(diferenca / UM_DIA_TS);            
                
                
            })()
            
            
        </script>
        
    </head>
    <body>
        <h1> Javascript 2022</h1>      
         
        
    </body>
</html>
