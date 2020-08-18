
let resEle = document.querySelector(".result");
let BtnEle = document.querySelector(".Btn");
let setBtnEle = document.querySelector(".setBtn");
let hasBtnEle = document.querySelector(".hasBtn");
let sizeBtnEle = document.querySelector(".sizeBtn");
let getBtnEle = document.querySelector(".getBtn");
let deleteBtnEle = document.querySelector(".deleteBtn");
let valueBtnEle = document.querySelector(".valueBtn");
let clearBtnEle = document.querySelector(".clearBtn");

class myMap {
    constructor() {
        this.collection = {};
        this.count = 0;
    }
}

//Operations on Map
//set
myMap.prototype.set = function (key, value) {
    this.collection[key] = value;
    this.count++;
};

//has
myMap.prototype.has = function (key) {
    return (key in this.collection);
};

//size
myMap.prototype.size = function () {
    return this.count;
};

//get
myMap.prototype.get = function (key) {
    return (key in this.collection)?this.collection[key]: null;
};

//delete
myMap.prototype.delete = function (key) {
    if (key in this.collection) {
        delete this.collection[key];
        this.count--;
    }
};

//values
myMap.prototype.values = function () {
    let result = new Array();
    for (let key of Object.keys(this.collection)) {
        result.push(this.collection[key]);
    };
    return (result.length> 0)?result: null;
};

//clear
myMap.prototype.clear = function () {
    this.collection = {};
    this.count = 0;
};

//entries
myMap.prototype.entries = function () {
    if (this.count == 0) {
    return "Map is empty";
    }else{
        return (key, value in this.collection);
    }
};

//Create Map
let myMap1 = new myMap();

//EventListener
BtnEle.addEventListener("click", () => {
    resEle.innerHTML = myMap1.entries();
});

setBtnEle.addEventListener("click", () => {
    let key = document.querySelector(".mapKey").value;
    let value = document.querySelector(".mapValue").value;
    resEle.innerHTML = key + " key and " + value + " value is added to the map";
    myMap1.set(key, value);
});

hasBtnEle.addEventListener("click", () => {
    let key = document.querySelector(".mapKey").value;
    resEle.innerHTML = myMap1.has(key);
});

sizeBtnEle.addEventListener("click", () => {
    resEle.innerHTML = myMap1.size() + " is the size of map";
});

getBtnEle.addEventListener("click", () => {
    let key = document.querySelector(".mapKey").value;
    resEle.innerHTML = myMap1.get(key);
});

deleteBtnEle.addEventListener("click", () => {
    let key = document.querySelector(".mapKey").value;
    resEle.innerHTML = myMap1.delete(key);
});

valueBtnEle.addEventListener("click", () => {
    resEle.innerHTML = myMap1.values();
});

clearBtnEle.addEventListener("click", () => {
    resEle.innerHTML = myMap1.clear();
});