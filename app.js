const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const p = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const listItems = document.getElementsByTagName('li');
const lis = listUl.children;
const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;

// Just playing around with first and last element child.
// firstListItem.style.backgroundColor = 'red';
// lastListItem.style.backgroundColor = 'blue';

function attachListItemButtons(li){
  let up = document.createElement('button');
  up.className = 'up';
  up.textContent = 'Up';
  li.appendChild(up);
  
  let down = document.createElement('button');
  down.className = 'down';
  down.textContent = 'Down';
  li.appendChild(down);
  
  let remove = document.createElement('button');
  remove.className = 'remove';
  remove.textContent = 'Remove';
  li.appendChild(remove);
};

for (let i = 0; i < lis.length; i++){
  attachListItemButtons(lis[i]);
}; 

listUl.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    if (event.target.className == 'remove'){
    let li = event.target.parentNode;
    let ul = li.parentNode;
    ul.removeChild(li);
    }
     if (event.target.className == 'up'){
    let li = event.target.parentNode;
    let prevLi = li.previousElementSibling;
    let ul = li.parentNode;
    if(prevLi){   
      ul.insertBefore(li, prevLi)
      }
    }
  }
});

listUl.addEventListener('click', (event) => {
  if (event.target.className == 'down'){
    let li = event.target.parentNode;
    let afterLi = li.nextElementSibling;
    let ul = li.parentNode;
    if(afterLi){
    ul.insertBefore( afterLi, li);
    }
  }
});

toggleList.addEventListener('click', () => {
  if(listDiv.style.display == 'none'){
    toggleList.textContent = "Hide List";
    listDiv.style.display = 'block';                    
  }else{
    toggleList.textContent = "Show List";
    listDiv.style.display = 'none';
  }
});                            

descriptionButton.addEventListener('click', () => {
  p.innerHTML = descriptionInput.value + ':';
  addItemInput.value = '';                                 
});


addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value; 
  attachListItemButtons(li);
  ul.appendChild(li);
  addItemInput.value = '';
});