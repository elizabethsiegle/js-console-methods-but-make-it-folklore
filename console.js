console.log("%cWARNING: you will be obsessed with folklore", "font: 2em sans-serif; color: yellow; background-color: red;");
function Album(name, year, numSongs) {
      this.name = name;
      this.movie = year;
      this.numSongs = numSongs;
    }
    const fearless = new Album("Fearless", 2008, 13);
    const speakNow = new Album("Speak Now", 2010, 19);
    const folklore = new Album("folklore", 2020, 16);
  console.log([fearless, speakNow, folklore]);
  console.table([fearless, speakNow, folklore], ["name"]);

  const numFolkloreSongs = 16;
const num1989Songs = 13;
console.assert(numFolkloreSongs > num1989Songs, 'folklore has more songs than 1989'); //won't run
console.assert(num1989Songs + 3 > numFolkloreSongs, 'the number of songs on 1989 + 3 is not greater than the number of folklore songs');
console.time('sms timer');
let x = 0;
while (x < 3) {
  console.log("They told me all of my cages were mental/So I got wasted like all my potential");
  x+=1;
}
console.timeEnd('sms timer');

console.group("folklore");
console.log("the 1");
console.log("cardigan");
console.log("the last great american dynasty");
console.log("invisible string");
console.log("my tears ricochet");
console.groupEnd();
console.log("outside");