// Activity 1: Selecting and Manipulating Elements
//task 1: Select an html element by its id and change its text content

const change_text = document.getElementById('text')
change_text.textContent = `contant change by text contant`;
change_text.innerHTML = `contant change by innerhtml`;
change_text.innerText = `contant change by innertext`;

//task 2: select an html element by its class and change its background color
function changeColor(){
    let bg_changer = document.querySelector(".bg")
          bg_changer.style.backgroundColor = "blue";
}
let bg_changer = document.querySelector(".bg")
bg_changer.style.backgroundColor = "red";

//Activity 2: Creating and Appending elements
//Task 3: Create a new div Element with some text contant and append it to the body.

 const div = document.createElement('div')
 const p = document.createElement('p')
 p.textContent = "hello My name is Shanee"
div.appendChild(p)
document.body.appendChild(div)
//task 4: Create a new li element and add it to an existing ul list.
const ul_element = document.querySelector('ul')
const li_element = document.createElement('li')
li_element.textContent= "mangoes"
ul_element.appendChild(li_element)


//Activity 3: Removing elements
//Task 5: Select an HTML element and remove it from the dom.
change_text.remove();


//Task 6: Remove the last child of a specific HTML element.
let li = document.querySelector('.elementToRemove li:last-child');
li.remove();

//Activity 4: Modifying Attributes and Classes
//Task 7: Select an HTML element and change one of tis atrributes (e.g., src of an img tag).
const img = document.querySelector('.imges img')
img.setAttribute('src',"https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600")

//task 8: Add and remove a css class to/from an html element.

//Activity 5: Event Handling
//Task 9: Add a click event listener to a button that changes the text content of a paragraph.

const btn = document.querySelector('button')
const para = document.querySelector('p')

btn.addEventListener('dbclick', ()=>{ //db for double click
    para.textContent= "twice paragraph changed"
})

//task 10: add a mouseover event listener to an element that changes its border color.

btn.addEventListener('mouseover', ()=>{ //db for double click
    para.textContent= "paragraph changed"
})