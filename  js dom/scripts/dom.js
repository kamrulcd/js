// console.log("hello")

// console.log(document)

// console.log(document.body)


// // object declaration
// const student = {
//     name: 'abul',
//     id:23,
//     study: function (time){
//         console.log(time, "studying")
//     }
// }

// // like this the whole document is a object

// student.study(23)
// console.log(student.name)

// console.log(document.getElementsByTagName('li'))
// // selecting the tags

// const liCollection = document.getElementsByTagName('li')

// // for loop to go through the selected tags
// for(const li of liCollection){
//     console.log(li)
//     console.log(li.innerText)
//     console.log(li.innerHTML)
// }


// // get element by id which selects a specific one 
// console.log(document.getElementById('mango').innerHTML)

// //using by classname
// console.log(document.getElementsByClassName('fruit').innerText) 
// // innertext or innerhtml does not work here because it returns multiple element????


// const fruits = document.getElementsByClassName('fruit')

// for(const fruit of fruits){
//     console.log(fruit.innerText)
// }

// // 3 are getelemntbyid, getelementsbyclassname, getelementbytagname to select specific way
// //these  return html collection which are dyanmic and have live connection..have to use for of. cant use for each
// // there are other two queryselector


// console.log(document.querySelectorAll('main'))
// console.log(document.querySelector('#mango'))
// //selecting with css selectors

// const someLi = document.querySelectorAll('.main li')
// console.log(someLi)
// for(li of someLi){
//     console.log(li)
// }

// //queryselectorall gives every elements but query selector gives only the first element
// // these two return nodelist which is "static".. for each can be used


document.getElementById('mango').style.textAlign= 'center'
//setting the style selecting with js selector
 const mango = document.getElementById('mango')

console.log(mango.getAttribute('class'))
//in mango the element is returned 
//and from the mango we can get the specific attribute by mentioning it in the getattribute method as parameter

mango.classList.add('blue')
console.log(mango.getAttribute('class'))
mango.classList.remove('blue')
console.log(mango.getAttribute('class'))
//here we are manipulating attributes from only js by js dom?
mango.setAttribute('title','its a mango set by js')
//setting tooltip where title is the tooltip and the next one shows when the cursor is on it

const fruitss = document.getElementsByClassName('fruit')[0].innerHTML = '<h1>not aple</h1>'
//gives the first element by indexing we get this one
// the element is set and shows not apple



