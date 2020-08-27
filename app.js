let button = new SwitchButton();
let lamp = new ElectricLamp();

button.connectToLamp(lamp);
for (let i = 0; i < 10; i++) {
    button.switchOn();
    button.switchOff();
}
