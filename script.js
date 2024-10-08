const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]


console.log(`reduce ${arr1.reduce((a,b) => a+b)}`);

sum=0
for(let i = 0;i<arr1.length;i++)[
    sum+=arr1[i]
]
console.log(`sum ${sum}`);

sum2 = 0
for(let i of arr1){
    sum2 += i
}
console.log(`sum2 ${sum2}`);

/////////

arr1.push(10,88)
console.log('push',arr1);

//////////
for(let i = 0;i<2;i++){
    arr1.shift()

}
console.log(arr1);

///////////////

numbs =[0,9,11]

arr1.push(numbs)
arr1.push(...numbs)
// console.log(arr1.flat(Infinity));
console.log(arr1);


////////
for(let i = 0;i<4;i++){
    arr1.shift()

}

arr1.splice(0,4)
console.log(arr1);

/////////// TASK 2 /////////////////

const arr2 = ["Sabir", "Fatime", "Rufet", 'Mehman', 'Fatime', 'Gunel',"Fatime", "Cavid", 'Ramin', "Ali", "Polad"]

console.log(arr2.indexOf('Ali'));



console.log(arr2.slice(arr2.indexOf('Rufet'),arr2.indexOf('Ali')+1));
console.log(arr2.slice(2,10));


///////////
arr2.splice(3,1,'Fidan')
console.log(arr2);


/////////////
 

arr2.map((a)=>console.log(a))

//////////////

const test = arr2.filter((a) => a.toLowerCase()=='fatime')
console.log(test);

///////////////////////

for (let i = 0 ; i < arr2.length ; i++ ) {
    if  (arr2[i] == 'Gunel'  ) {
        arr2[i] = 'Nihad'
        console.log(arr2[i])
    }else {
        console.log(arr2[i])
    }
} 
console.log(arr2);

const test2 = arr2.splice(((a) => a.toLowerCase()=='gunel'),1,'Nihad' ) 
console.log(test2);

console.log(arr2);

///////////////

console.log(arr2.reverse().slice(0,2));

///////////////

console.log(arr2.length);


///////////////////////////

const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false]


console.log(arr3.filter((a)=> typeof(a) =='number'));

/////////////

console.log(arr3.filter((item) => item))
//////////////
console.log(arr3.filter((item) => !item))
//////////////

console.log(arr3.filter((a)=> typeof(a) =='string'));



//////////////////////////////////


const numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25]


console.log(numbers.filter((a)=>a%2==0));
//////////
console.log(numbers.filter((a)=>a%2!=0));

////////////////////////////////

const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false]

let test =arr4.map(a =>{
    if(typeof(a)=='number'){
        return a+10

    }else if(typeof(a) =='string'){
        return a + ' is string'
    }else if(typeof(a) != a){
        return 'false is falsy value'
    }
})
console.log(test);

////////////

const sum = arr4.reduce((a,b) => (typeof b ==='number' ? a + b:a),0)

console.log(sum);


console.log(arr4.filter((a) => a))

console.log(arr4.filter((a) => typeof(a)=='string'))

console.log(arr4.filter((a)=>!a));



let fullName = 'James Anderson Alex'


let test = fullName.split('');
console.log(test)




let surname = fullName.split(' ')
console.log(surname);


console.log(`${surname[1]} ${surname[0]} ${surname[2]}`);
let test = [surname[1],surname[0],surname[2]].join(' ')
console.log(test);



let arr = [8, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

let a = 0
for (let i = 0 ; i < arr.length ; i++) {
        if (arr[i] == 5) {
            a += 1
            }
        }
console.log(a);
        
console.log(arr.filter((a)=>a==5).length);
        



console.log(arr.reduce((a,b) => a + b, 0));


var uniq = arr.reduce(function(a,b){
    if (a.indexOf(b) < 0 ) a.push(b);
    return a;
  },[]);

  uniq.sort(function(a, b) {
    return a-b ;
  });
  

console.log(uniq);

let Max = Math.max(...arr)
let MaxCount = arr.filter((num)=>num==Max).length
console.log('Max number',Max,'Max Count',MaxCount);



let name = 'Kenway'.length
console.log(name);

if(arr.includes(name)){
    console.log('there is a number');
    
}else{
    console.log('nope');
    
}



console.log(arr.filter((a)=>a%3==2))

let result = arr.map((a,b)=>{
    if(a%3==2){
        return{a,b}
    }
}).filter((a)=>a)
console.log(result);


let max = Math.max(...arr);
let maxIndex = arr.indexOf(max)

console.log(maxIndex);


let test = [];

for (let i = 0 ; i < arr.length ; i++){
    if(arr[i] == 4){
        test.push(i)
    }
}
arr.forEach((a,b) => {
    if (a == 4) {
        test.push(b);
    }
});
console.log(test);


console.log(arr.indexOf(5),arr.lastIndexOf(5));


let test = arr.filter((a) => a > 2);

console.log(arr.length - test.length);


test = []
for (let i = 0 ; i < arr.length ; i++){
        if(arr[i] == 7){
            test.push(i)
        }
    }

console.log(test.reduce((a,b)=>a+b));





let arr2 = [
    {
        name: 'test',
        key: 1
    },
    {
        name: 'task',
        key: 2
    },
    {
        name: 'tanqo',
        key: 3
    },
    {
        name: 'like',
        key: 4
    },
    {
        name: 'task',
        key: 5
    },
    {
        name: 'trust',
        key: 6
    },
    {
        name: 'test',
        key: 7
    },
    {
        name: 'last',
        key: 8
    },
    {
        name: 'tanqo',
        key: 9
    },
    {
        name: 'elephant',
        key: 10
    },
    {
        name: 'love',
        key: 11
    },
    {
        name: 'small',
        key: 12
    },
    {
        name: 'little',
        key: 13
    },
]




function namefilter(a){
    return a.filter((a)=>a.name.startsWith('t'))
};

console.log(namefilter(arr2));


function NameFilter(a) {
    return a.filter((a) => a.name.startsWith('t') && a.name.endsWith('t')).length;
}
console.log(NameFilter(arr2));




function ReplaceName(a) {
    for(let i of a){
        if(i.name.endsWith('e')){
            i.name = 'SuperDev'
        }
    }
    return a
}
console.log(ReplaceName(arr2))




function KeyFind(a) {
    let length = a.map((a) => a.name.length);
    let MaxLength = Math.max(...length);
    return a.find((a) => a.name.length === MaxLength).key;
}
console.log(KeyFind(arr2))




function squareindex(a) {
    let MaxLength = a.reduce((a, b) => Math.max(a, b.name.length), 0);
    let LongestIndex = a.findIndex((a) => a.name.length == MaxLength);
    return LongestIndex * LongestIndex;
}
console.log(squareindex(arr2))




function filternames(a) {
    return a.filter((a) => a.name.length == 4);
}
console.log(filternames(arr2))




function biggestKey(a) {
    let keys = a.map((a) => a.key);
    let maxKey = Math.max(...keys);
    return a.find((a) => a.key === maxKey).name;
}
console.log(biggestKey(arr2))


/

function findSameLetter(a) {
    let test = [];
    for (let i = 0; i < a.length; i++) {
        let Count = (a[i].name.match(/l/gi) || []).length;
        if (Count == 2) {
            test.push(i);
        }
    }
    return test;
}
console.log(findSameLetter(arr2))






function something(a) {
    let test = [];
    for (let i of a) {
        let Count = (i.name.match(/t/gi) || []).length;
        if (Count == 2) {
            test.push(i.key);
        }
    }
    return test;
}
console.log(something(arr2));