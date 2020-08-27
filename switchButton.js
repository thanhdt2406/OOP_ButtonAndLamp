let SwitchButton = function () {
    this.connectStatus = false;
    this.lamp = {};

    this.connectToLamp = function (ElectricLamp) {
        this.lamp = ElectricLamp;
        this.connectStatus = true;
    }

    this.switchOff = function () {
        if (this.connectStatus) {
            this.lamp.turnOff();
        } else {
            console.log('Not connected');
        }
    }

    this.switchOn = function () {
        if (this.connectStatus) {
            this.lamp.turnOn();
        } else {
            console.log('Not connected');
        }
    }
}