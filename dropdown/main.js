'use strict';
function dropdown(menu,selector){
    let output ='';
    for(let prop in menu){
        if(menu[prop]['attaches'] == undefined){
            output +='<li class="dropdown-button_submenu_item"><a class="dropdown-button_submenu_item_link" href="javascript:void(0)">'+menu[prop]['value']+'</a>';
        }else{
            output +='<li class="dropdown-button_submenu_item has-submenu dropdown-button"><a class="dropdown-button_submenu_item_link" href="javascript:void(0)">'+menu[prop]['value']+'</a>';
            output +='<ul class="dropdown-button_submenu">';
            for(let key in menu[prop]['attaches']){
                output += '<li class="dropdown-button_submenu_item"><a>'+menu[prop]['attaches'][key]['value']+'</a></li>';
            }
            output +='</ul>'
        }
        output +='</li>';

    }
    selector.innerHTML = output;
}

let mainMenu = {
    item1:{
        value:'Item 1'
    },
    item2:{
        value:'Item 2'
    },
    item3:{
        value:'Item 3',
        attaches:{
            initem1:{
                value:'In Item 1'
            },
            initem2:{
                value:'In Item 1'
            }
        }
    },
};
let customSelector = document.getElementById('custom_menu');
dropdown(mainMenu,customSelector);