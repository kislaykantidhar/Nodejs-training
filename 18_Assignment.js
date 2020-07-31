let sentence="Three Men on a boat was written by Jerome Kalpka Jerome"
let replaceit=/jerome/ig;//here the g tag is very important for this case as it matches all occurrences
let replacewith="Monroe";
let newsentence=sentence.replace(replaceit,replacewith);
console.log(newsentence);
//Three Men on a boat was written by Monroe Kalpka Monroe
//the old sentence is unchanged though
console.log(sentence);
//Three Men on a boat was written by Jerome Kalpka Jerome
