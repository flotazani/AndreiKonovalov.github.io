function createCounter() {

   var currentCount = 1;

  return function() { 
    return currentCount++;
  };

}



const count = createCounter();



count(); // 1

count(); // 2

count(); // 3

count(); // 4



console.log(count()); // 5