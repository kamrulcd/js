// const lists = document.querySelectorAll('li')

// //as node list for each can be used 
// for (const list of lists){
//     list.style.border= "2px solid red "
// }

// const footer = document.getElementById('footer')
// footer.classList.add('footer')
// //adding a class from js on a specific occasion

// // as query selector returns a node we can manipulate the returned node by the following

// console.log(footer.childNodes)
// //gives the childnode of footer

// const mainss = document.querySelector('.main')

// console.log(mainss.childNodes[0])
// // both this gives the first child
// console.log(mainss.firstChild)

// // like this lawst child,
// console.log(mainss.childNodes[1].childNodes[0].nextSibling )
// // this gives the child nodes of the child node itself
// //also here the next sibling is found


// //we can also create  element
// const li = document.createElement('li').innerText = 'new li from document js'
// //now this newly created element can be append in the unordered list as well
// mainss.append(li)
// const li2 = document.createElement('li').innerText = 'new li from document js'
// const place = document.querySelectorAll('#place').childNodes
// console.log(place)
// place.append(li2)

// console.log(mainss.parentNode.parentNode.parentNode.parentNode)
// // ???????????
