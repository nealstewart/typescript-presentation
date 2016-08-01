/**
 * Creates any instrument you could ever want.
 */
var Instrument = (function () {
    function Instrument(sound) {
        this.sound = sound;
    }
    /**
     * Produce a sound, you wonderful inexpensive creation
     */
    Instrument.prototype.makeSound = function () {
        console.log(this.sound);
    };
    return Instrument;
}());
var horn = new Instrument('honk');
horn.makeSound();
