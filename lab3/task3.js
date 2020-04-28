const object1 = {

	name: 'Boris',

	weight: 15

};



const object2 = {

	name: 'Boris',

	weight: 15

};



const object3 = {

	name: 'Rex',

	weight: 20,

};



function isEquivalent(ob1,ob2){
if ((ob1.name == ob2.name)&&(ob1.weight == ob2.weight)){
return true;
} else {
  return false;
}
}



console.log(isEquivalent(object1, object2)); // true

console.log(isEquivalent(object1, object3)); // false