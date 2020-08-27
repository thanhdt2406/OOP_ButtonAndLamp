let ElectricLamp = function () {
    this.status = false;

    this.turnOff = function () {
        if (this.status) {
            console.log('Turned off!');
            this.status = false;
        }
    }

    this.turnOn = function () {
        if (!this.status) {
            console.log('Turned on!');
            this.status = true;
        }
    }
}