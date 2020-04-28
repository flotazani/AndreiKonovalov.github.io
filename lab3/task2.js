let s=0;
function sum() {
ar = Array.from(this);
n=ar.length;
for(let i=0; i<n; i++){
s +=ar[i];
}
return s;
}

console.log(sum.call([5, 5, 5, 5, 5, 5, 5, 5, 5]));