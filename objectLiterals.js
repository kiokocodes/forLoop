//MDN Network code samples
//Using arrays to tabulate a set of values
/*const values = [];
for (let x = 0; x < 10; x++) {
  values.push([
    2 ** x,
    2 * x ** 2,
  ]);
}
console.table(values);

const fruhstuckenMachen = [];
for (let hungrisch = 0; hungrisch < 10; hungrisch++) {
    fruhstuckenMachen.push( [ 10 ** hungrisch, 10 * hungrisch ** 7,])
}
console.table(fruhstuckenMachen); */


//Machen sie viele arrays

/* const randomArr = ["joseph", "kioko", "kiamba",33, true];
console.log(randomArr.length);
console.table(randomArr);
console.warn(randomArr);
console.log(randomArr);
console.error(randomArr);

*/

//Example 2 of Arrays
const kiokoCodes = ["JavaScript","PHP","ReactJS","mongoDB","Python",];
console.log(kiokoCodes);
console.table(kiokoCodes); //Ich mag diese ;)

    // Create a string from an array
    const kiokoStrings = kiokoCodes.join(", ");
    console.log(kiokoStrings);

    // Append an item to an array
    const newLength = kiokoCodes.push('TypeScript');
    console.log(kiokoCodes); //check whether new item has beenadded to array
    console.log(newLength); //Check length of array after addition of item


    //Final Example of a miniaturised DB Entry

    const personen = {
      firstName: "Joseph",
      lastName: "Kioko",
      ocupation: "coder",
      nickName: false,
      age: 33,
      dasHobbys: ["musikHoren",
                  "schwimmen", 
                  "programieren",
                  "schlafen und Essen"],
      address: {
        postleitzahl: "69 Stroke Street",
        telefonNummer: 708199825,
        stat:"StrokeVille",
        Arbeit: "Programieren"
      }
    }
    console.table(personen);