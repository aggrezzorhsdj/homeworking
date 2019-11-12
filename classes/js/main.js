'use strict';
function Human() {}
Human.prototype.init = function(fullName) {
    this.fullName = fullName;
};
Human.prototype.info = function(age,weight,height){
    this.age = age;
    this.weight = weight;
    this.height = height;
}
Human.prototype.print = function() {
    console.log(this.fullName);
};


function inherit(ParentClass) {

    function ChildClass() {}
    ChildClass.prototype = Object.create(ParentClass.prototype);
    ChildClass.prototype.constructor = ChildClass;
    ChildClass.prototype._super = ParentClass.prototype;

    return ChildClass;
}


var Man = inherit(Human);
var Woman = inherit(Human);

Man.prototype.init = function(fullName) {
    fullName = 'Dorogoy ' + fullName;
    this._super.init.call(this, fullName); // call super
}
Man.prototype.print = function(){
    console.log(this.fullName+' '+' he is Man');
}

Woman.prototype.init = function(fullName) {
    fullName = 'Dorogaya ' + fullName;
    this._super.init.call(this, fullName); // call super
}
Woman.prototype.print = function(){
    console.log(this.fullName+' '+' she is Woman');
}

var man = new Man();
man.init('Vasili ivanovich');
man.print();

var woman = new Woman();
woman.init('Vasili ivanovich');
woman.print();

class EpicHuman{
    init(fullName){
        this.fullName = fullName;
    }
    info(age,weight,height){
        this.age = age;
        this.weight = weight;
        this.height = height;
    }
    print(){
        console.log(this.fullName);
    }

}

class EpicMan extends EpicHuman{
    init(fullName){
        this.fullName = 'Dorogoi ' + fullName;
    }
}

class EpicWoman extends EpicHuman{
    init(fullName){
        this.fullName = 'Dorogaya ' + fullName;
    }
}

var epicman = new EpicMan();
epicman.init('Ivan Pupkin');
epicman.print();

var epicwoman = new EpicWoman();
epicwoman.init('Natalya Petrova');
epicwoman.print();

