'use strict'; 
function Phone(brand, price, color, camera) {
	this.brand = brand;
	this.price = price;
    this.color = color;
    this.camera = camera;
}
Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + ", it has "+this.camera+" camera and the price is " + this.price + ".");
}
Phone.prototype.printOnPage = function() {
    var output = document.getElementById('output');
    output.innerHTML += "The phone brand is " + this.brand + ", color is " + this.color + ", it has "+this.camera+" camera and the price is " + this.price + ".<br>";
}

var iPhoneX = new Phone('Apple', 5699, 'silver', '2x12Mpix');
var GalaxyS9 = new Phone('Samsung', 3998, 'black','2x12Mpix');
var HuaweiMate9 = new Phone('Huawei', 2499, 'silver','20Mpix');
var XperiaXZ1 = new Phone('Sony', 2599, 'silver','19Mpix');

iPhoneX.printOnPage();
GalaxyS9.printOnPage();
HuaweiMate9.printOnPage();
XperiaXZ1.printOnPage();

iPhoneX.printInfo();
GalaxyS9.printInfo();
HuaweiMate9.printInfo();
XperiaXZ1.printInfo();