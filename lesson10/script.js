//1
//  const arrCopy = (arr) =>{
//     let arr1 = [];
//     for (const index in arr) {
//       arr1[index] = arr[index];
//     };
//     return arr1;
//  };
//  console.log(arrCopy([1,2,3,[10,20]]))

//2

// const arrToString = (arr2) =>{
// let arr2str = arr2.join(" ")
// return arr2str.split(" ");
// } ;
// console.log(arrToString([10,200,3333]));

//3

// const getLength = (arr3) =>{
//     let arrLength = [];
//     for(let i = 0;i<arr3.length;i++){
//         arrLength[i] = arr3[i].length;
//     }
//     return arrLength;
// } ;
// console.log(getLength(['Ivan','Pavlo','Ira']));
// console.log(getLength(['Oleksiy','Andriana']));

//4 
const removeDuplicates = (arr4) =>{
    let lowercaseArray = arr4.map(item => item.toLowerCase());
    return arr4.filter((el, id) => arr4.indexOf(el) === id);
} ;
console.log(removeDuplicates(['html','css','js','html','js','python','js','scss']));
console.log(removeDuplicates(['html','css','html','js']));