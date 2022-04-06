
//Example 2 of Arrays
/* const kiokoCodes = ["JavaScript","PHP","ReactJS","mongoDB","Python",];
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
    */

    

   /* //Object Literals

    const person = {
      firstName: 'Joseph',
      lastName: 'Kioko',
      age: 33,
      hobbies: ['musikHoren','Kino', 'wandert', 'kochen'],
      address: {
        street: '50 Main Street',
        city: 'Mombasa',
        state: 'Coast'
      }
    }
    */

   // console.table(person); // tabulate the object
   // console.log(person.firstName); //Value access with .DOT Notation
  //  console.log(person.firstName, person.lastName);

  //  console.log(person.hobbies[1]); //Accessing arrays within an Object

  //DESTRUCTURING - New to ES6.
  
  //const { firstName, lastName, address: {city} } = person;

//  console.log(firstName); //Accessing firstName value
 // console.log(city);      //Accessing city value

 //person.email = 'joseph.kkiamba@gmail.com'; //Adding a data point to Object.
 // console.log(person.email);


 //ARRAYS OF OBJECTS

 const todos = [
   {
     id: 1,
     text: 'Eat Out',
     isCompleted: true
   },
   {
    id: 1,
    text: 'Do Laundry',
    isCOmpleted: true
  },
  {
    id: 1,
    text: 'Code Some More',
    isCompleted: false
  }
 ];

 console.table(todos);
 console.log(todos[1].text)
 console.log(todos[2].isCompleted);



  // JSON - Used alot within APIs when sending data to servers
  
  const todoJSON = JSON.stringify(todos);
  console.log(todoJSON);