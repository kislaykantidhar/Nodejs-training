//-------example to show deletion of elements from array-----
let heroes=['ironman','batman','superman','green-lantern'];
console.log(heroes);
// removing batman and superman
heroes.splice(1,2);// startting index is 1 from where we want to delete the elements, and 2 shows that we will delete 2 elements from the starting position
console.log(heroes);//[ 'ironman', 'green-lantern' ]

//-------example to show adding extra elements to this array

heroes=['ironman','batman','superman','green-lantern'];
// suppose if we want to add three heroes after superman ,they are- wolverine,captain america,wonder woman
let extra=['wolverine','captain america','wonder woman']
heroes.splice(3,0,...extra);
//here the first argument is the position from which we want to insert elements
//the second argument 0 shows that we dont want to delete anything from  it.
//then with the seperators ... we expanded the contents of the array "extra". 
console.log(heroes);
// [
//     'ironman',
//     'batman',
//     'superman',
//     'wolverine',
//     'captain america',
//     'wonder woman',
//     'green-lantern'
//   ]

//------- example to replace  green lantern and add doctor octopus ,and cable
heroes.splice(heroes.length-1,1,"doctor octopus","cable");
console.log(heroes);
// [
//     'ironman',
//     'batman',
//     'superman',
//     'wolverine',
//     'captain america',
//     'wonder woman',
//     'doctor octopus',
//     'cable'
//   ]

