//called from html
function makeBlue(){
    document.body.style.backgroundColor = 'blue'
}

//calling from external here
const yellowId = document.getElementById('yellow')
yellowId.onclick = makeYellow
//here function should not be called with the braces 
//which will set by default 

function makeYellow(){
    document.body.style.backgroundColor = 'yellow'
}


//here code is shorter
const orangeId = document.getElementById('orange')
orangeId.onclick = function makeOrange(){
    document.body.style.backgroundColor = 'orange'
}

//another option 
//here event listener is a simple one where we can specify our action pressing or clicking 
// const purple = document.getElementById('purple')
// purple.addEventListener('click', makePurple)
// function makePurple(){
//     document.body.style.backgroundColor = 'purple'
// }

// const purple = document.getElementById('purple')
// purple.addEventListener('click', function makePurple(){
//     document.body.style.backgroundColor = 'purple'
// })


//final way
document.getElementById('purple').addEventListener('click', function(){
    document.body.style.backgroundColor = 'purple'
})


// function clicked(){
//     const text = document.getElementById('text')
//     text.innerText = "unique text"
// }

//final way to do 
document.getElementById('button').addEventListener('click', function(){
    const textt = document.getElementById('text')
    textt.innerText = "a unique text from new way"
})

//event listener is a versatile way to do 
//another way?


document.getElementById('btn').addEventListener('click', function(){
    const inputText = document.getElementById('input')
    inputTextt = inputText.value
    document.getElementById('default').innerText = inputTextt

    const p = document.createElement('p')
    p.innerText = 'newly created element'

    const container = document.getElementById('container')
    container.appendChild(p)
    //clearing the input field after taking the value
    inputText.value = ''
})
// instead of input text area can also be used
//we can also create an element and add that to ny element

//there are other event listener like  mouse enter, mouse move,focus, blur, 
// above are for mouse. these are for keyboard keys

document.getElementById('button').addEventListener('focus',function(){
    document.getElementById('button').style.color = 'red'
})

// mouseenter meaning just taking the mouse on that button and mouse move meaning the times we are moving the mouse inside that button. and focus means when we click any field or button than that is focused and worked. it also highlights the element on which focus is added


//keydown meaning when 
document.getElementById('input').addEventListener('keydown',function(event){
    console.log(event.target.value)
})
// also keypress, keydown is complicated
// but keyup is okay to use
document.getElementById('textField').addEventListener('keyup',function(event){
    if(event.target.value === 'delete'){
        document.getElementById('delete').removeAttribute('disabled')
    }
    else{
        document.getElementById('delete').setAttribute('disabled', true)
    }
})
document.getElementById('delete').addEventListener('click', function(){
            document.getElementById('secret').style.display = 'none'
            document.getElementById('textField').value = ""
})
// event bubble
// delegate 
// when we select class then we get html list. and we can get every element by looping through. and on that every element we can add event listener.
const items = document.getElementsByClassName('item')
for(const item of items){
    item.addEventListener('click', function(event){
        //console.log(event.target.parentNode)// gets the parent of ul
        event.target.parentNode.removeChild(event.target)
        //when i click on a li the ul gets notified to remove the clicked child

    })
}
// the above code will delete the item but if we add new item it will not delete thats why we use delegate
//instead of selecting list we select that 
document.getElementById('listContainer').addEventListener('click', function(event){
    event.target.removeChild(event.target)
})

document.getElementById('btnAdd').addEventListener('click', function(){
    const listContainer = document.getElementById('listContainer')
    const li = document.createElement('li').innerText = 'you added new item'
    li.classList.add('item')
    listContainer.appendChild(li)
})