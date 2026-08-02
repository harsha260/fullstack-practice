function fn1 () {
  console.log('normal no par fn');
}

fn1()

function fn2 (a){
    console.log(a,"this is para fn")
}

fn2()
fn2(1)

function fn3 (a = 10){
    console.log(a,"this is default para")
}

fn3()
fn3(20)

function sum(a,b){
    return a+b
}

console.log(sum(1,2), "this is fn with return stmt")

fn4 = function(){
    console.log("this is anonomus fn")
}

fn4()

fn5 = function(a){
    console.log(a,"this is anonomus fn with args i.e fn expression")
}

fn5()
fn5(2)

sq = a => a*a

console.log(sq(2))

;(function (){
    console.log("this fn runs imediatly without calling")
})()

function fn6(callback, a){
    return callback(a/2)
}

double = n => n*2

console.log(fn6(double, 2))

lst = []

console.log(lst)

lst.push(1)
lst.unshift(0)

lst.pop()
lst.shift()

lst.length = 3
console.log(lst)

for(let i = 0; i<lst.length;i++){
    lst[i] = i
}

for(let i = 0; i<lst.length;i++){
    console.log(lst[i])
}

lst.forEach(x => {
    console.log(lst[x])
});

class test{
    
}