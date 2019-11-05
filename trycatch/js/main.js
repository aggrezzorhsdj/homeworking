'use strict';
function createTryCatch(selector,initiator){
    selector = document.querySelector(selector);
    function CreatorMoodOfVasya(mood) {
        this.name = 'Vasya';
        this.surname = 'Pupkin';
        this.mood = mood;
        Object.defineProperty(this,"itsVasilii",{
            get: function(){
                try {
                    if(mood == 1){
                        return JSON.parse(this.name + ' ' + this.surname+ ' '+ this.mood);
                    }else{
                        return JSON.parse('{"name":"'+this.name+'","surname":"'+this.surname+'"}');
                    }

                } catch(e){
                    return 'Ошибка. Выберите другой вариант.  Подробнее: ' + e.name + ":" + e.message + "\n" + e.stack;
                }
            }
        });
    }
    initiator = document.getElementById(initiator);
    var result = document.getElementById('result');
    if(initiator !==  null){
        initiator.addEventListener('click',function(){
            var v = new CreatorMoodOfVasya(selector.value);
            console.log(v.itsVasilii);
            result.innerHTML = v.itsVasilii;
        });
    }
}
createTryCatch('#errorType','creator');
