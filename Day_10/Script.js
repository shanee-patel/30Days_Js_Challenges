//Activity 1 Basic Event Handling
//Task 1: Add a click event listener to a button that changes the text content of a pragraph

const btn = document.querySelector('button')
const p = document.querySelector('p')

btn.addEventListener('click',()=>{
p.textContent="shanee is great"
btn.style.backgroundColor = "red"
btn.style.color = "white"
})

// Task 2: Add a double-click event listener to an images that toggles its visibility
function toggles (){
const imgg = document.querySelector('img')

imgg.addEventListener('dblclick',()=>{
    const opacity = imgg.style.opacity
    console.log(opacity)
    if (opacity == 1){
        imgg.style.opacity = 0.4;
    }
    else{
        imgg.style.opacity = 1;
    }
});
}

// const img = document.querySelector('img')

// img.addEventListener('dblclick',()=>{
//     img.style.opacity = 0.4
    
// })

//Activity 2 : Mouse Events
//Task3: Add a mouseover event listener to an element that changes its background color

btn.addEventListener('mouseover', ()=>{
    btn.style.backgroundColor = "Aqua"
})

//Task 4: Add a mouseout that reset its background color
btn.addEventListener('mouseout', ()=>{
    btn.style.backgroundColor = "green"
})


//Activity 3: Keyboard Events
//Task 5: Add a keydown event listener to an input field that logs the key pressed to the console

// function myfunction (){
//     const forms =  document.getElementById('form')
//     forms.value.style.background = this.value
// }

//Task6 : Add a keyup event listener to an input field that displays the current value in a paragrph
function myfunction (){
    const forms =  document.getElementById('form')
    forms.style.backgroundColor = "green"
}

//Activity 4: form Events
//Task 7: Add a submit event listener to a form that prevents the defalut submission and log the form data to the console.
const form = document.getElementById('myForm');
        
        form.addEventListener('submit', (event)=> {
            event.preventDefault();
            
            const formData = new FormData(form);
            
            for (const [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }
        });
//Task 8: Add a change event listener to a select dropdown that dispalys the selected value in a paragraph.

const option = document.querySelector('#selectOption')
option.addEventListener('change',(e)=>{
    const para = document.querySelector('#optionSelcted')
    para.innerText = `slected option is ${e.target.value}`
})
//Activity 5: Event Delegation
//Task 9: Add a click event listner to a list that logs the text content of the clicked list items using event delegation.

const list = document.querySelector('#list')
list.addEventListener('click',(e)=>{
    if(e.target.tagName === 'LI'){
        console.log(e.target.textContent)
    }
})
//Task 10: Add an event listner to a parent element that listner for events from dynamically added child elements.
const addList = document.querySelector('#addItemButton')
addList.addEventListener('click',(e)=>{
    const newList = document.createElement("li")
    newList.textContent = `Item ${list.children.length +1}`
    list.appendChild(newList)
})