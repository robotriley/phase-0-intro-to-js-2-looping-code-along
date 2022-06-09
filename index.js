/*
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);

}
*/
/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}

wrapGifts(gifts);
*/

function writeCards(array, event){
    const cart = [];
  
    for (let i = 0; i < array.length; i++) {
      cart.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
  }
  return cart
  
  };


  function countDown(number) {
      while (number > -1) {
          console.log(number--);
      }
    };

    countDown();