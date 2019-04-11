function TV (status, channel, volume) {
    this.status = status; // boolean
    this.channel = channel; // int
    this.volume = volume; // int
    this.power = function (status) { // boolean
        this.status = status;
    }
    this.setChannel = function (channel) {
        this.channel = channel;
    }
    this.adjustVolume = function (volume) {
        if ((this.volume + volume) < 0) {
            this.volume = 0;
        } else {this.volume += volume;}
    }
    this.getInfo = function () {
        if (this.status) {
            console.log ("TV is on. Channel " + this.channel + " volume " + this.volume);
        } else {
            console.log ("TV is off.");
        }
    }
}