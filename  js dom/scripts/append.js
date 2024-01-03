const places = document.getElementById('place')
const li = document.createElement('li')

li.innerText = "new added as child"
// 1. where to add 
//2. what to add 
// 3. connect
places.appendChild(li)

const mainContainer = document.getElementById('man')

const newUl = document.createElement('ul')
const newLi = document.createElement('li')
newLi.innerText = 'nw list item added '
newUl.appendChild(newLi)

mainContainer.appendChild(newUl)
//creating multiple element

//setting html by inner html
const mainUl = document.getElementById('man')
mainUl.innerHTML = `
<h1> me from inner html</h1>
<p>i am next from innerhtml</p>
`
//it oveerwrite the previous contents . but why?
//the script tag which comes first will be exedcuted first as well

//new added
