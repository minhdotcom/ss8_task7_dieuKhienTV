function Remote (nameCode) {
    this.nameCode = nameCode; // string
    this.setTVChannel = function (tv, channel) {
        tv.setChannel(channel);
    }
    this.adjustTVVolume = function (tv, volume) {
        tv.adjustVolume(volume);
    }
    this.power = function (tv, status) {
        tv.power(status);
    }
}