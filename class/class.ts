/**
 * Creates any instrument you could ever want.
 */
class Instrument {
	/**
	 * The beautiful sound that this object is capable of making
	 */
	sound: string

	constructor(sound: string) {
		this.sound = sound;
	}

	/**
	 * Produce a sound, you wonderful inexpensive creation
	 */
	makeSound(): void {
		console.log(this.sound);
	}
}

var horn = new Instrument('honk');
horn.makeSound();
