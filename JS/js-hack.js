





/*  Array와 new Array는 같은 동작!
    When Array is called as a function rather than as a constructor, it creates and 
    initialises a new Array object.Thus the function call Array(…) is equivalent to
    the object creation expressionnew Array(…) with the same arguments.
*/


//iterate 할 수 있다. es6
console.log(Array.from(Array(5)));


// //문자열 함수
// console.log("_".repeat(6));

// // 마찬가지로 iterate 할 수 있다.
// console.log(Array(5).fill(null));


// //제일 짧은 버전
// console.log([...Array(5)]);

// //
// console.log(Array(5));

// //0~9까지 배열 생성됨
console.log([...Array(10).keys()])
console.log(Array(10).fill().map((v,i)=>(i)));
console.log(Array(10).fill().map((v,i)=>{return i}));
console.log("HAHA");
debugger;
console.log([...Array(10)].map(()=>{return Math.random()}));

//Super light templete
var data = {
    firstName: 'Mike',
    lastName: 'Tyson'
}

var template = 'Hello my name is {{firstName}} {{lastName}}'

function render (template, data) {
    return template.replace(/{{(.+?)}}/g, function (m, p1) {
        return data[p1]
    })
}

console.log(render(template, data))