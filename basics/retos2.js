function distributeGifts(packOfGifts, reindeers) {
    let totalGift=0;
    let totalRenos=0;
    packOfGifts.forEach(
        gift => totalGift += gift.length
    );
    reindeers.forEach(
        reinder=> totalRenos += reinder.length * 2
    );
    return Math.floor( totalRenos/totalGift)
  }

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

console.log(distributeGifts(packOfGifts, reindeers));