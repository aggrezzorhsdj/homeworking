'use strict';
function add_input(initiator){
    initiator = document.querySelectorAll(initiator);
    if(initiator){
        [].forEach.call(initiator,function(e){
            e.addEventListener('click',function(){
                var item = document.createElement('div');
                item.className = 'fields__item';
                item.innerHTML = '<input type="text" class="fields__item__input" placeholder="Например \'А\'" maxlength="1"/>';
                var fields = document.querySelector('.fields');
                fields.append(item);
            });
        });
    }
}
function WordIt(word){
    this.word = word;
    this.newText = 'text';
    Object.defineProperty(this,'doneWord',{
        get:function(){
            var mass = this.word.split(',');
            return mass.join('');
        },
        set:function(value){
            var mass = this.word.split(',');
            this.newText = mass.reverse().join('');
        }
    });
}
function getString(selector){
    var selector = document.querySelectorAll(selector);
    var mass = [];
    [].forEach.call(selector,function(e){

        if(!e.value){
            e.classList.add('fields__item__input__error');
        }else{
            e.classList.remove('fields__item__input__error');
            mass.push(e.value);
        }
    });
    if(mass.length != 0){
        mass = mass.join(',');
        var text = new WordIt(mass);
        var endText = text.doneWord;
        text.doneWord = mass
        var reverseText = text.newText;
        var container = document.querySelector('.container__element>.result');
        container.append('Собранное слово: '+endText+' Перевернутое слово: '+reverseText);
    }
}
var createWord = document.querySelector('[name="createWord"]');
var myString = '';
if(createWord){
    createWord.addEventListener('click',function(){
        getString('.fields__item__input');
    });
}
add_input('[name="addFields"]');