const meinemAlter = 33;
const meinName ="Kioko";
const meinHobby = "Coding";
const mochteAnNicht = "Moskitos";
//const mannKann = "Deutscher!!"

//Concatenation
//Erste Alternatif
//const werIchBin = "Mein name ist " + meinName + ".Ich bin " + meinemAlter + " jahr alt. Mein Hobby ist " + meinHobby +".Ich mochte an nicht " + mochteAnNicht + ".";


//Zweite Alternativ: We can definitely minimize this code but WTH *wink *wink
const werIchBin = `Mein name ist ${meinName}. Ich bin ${meinemAlter} jahre alt. Mein Hobby ist ${meinHobby}. Ich mochte an nicht ${mochteAnNicht}`;



//Console log .length/.split/.toUpperCase/ .toLowerCase/ .substring.toUpperCase()
console.log(werIchBin);
console.log(werIchBin.length - 1);
console.log(werIchBin.split(''));
console.log(werIchBin.toUpperCase()); //for this to execute on the dev console you need to use parentheses since it's a method(a function associated with an Object).
console.log(werIchBin.toLowerCase()); //Parentheses incl'...
console.log(werIchBin.substring(0, 14)); //Paretheses incl'...
console.log(werIchBin.substring(0, 14).toUpperCase()); //Paretheses incl'...






