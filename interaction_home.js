// access elements in html
let toggleIcon = document.querySelector('svg');
let navigation = document.querySelector('ul');
let header = document.querySelector('header');

let sections = document.querySelectorAll('section');

let key = document.querySelector('.key');


// function 1: toggle header svg icon
function toggleNav()
{
	navigation.classList.toggle('expand');
	header.classList.toggle('expand');
}

// function 2: add section background color when pointer over
function highlightBgColor()
{
	this.style.backgroundColor = 'lightblue';
}

// function 3: remove section background color when pointer out
function removeBgColor()
{
	this.style.backgroundColor = 'revert-layer';
}

// function 4: update page content in Quiz Time
function revealKey()
{
	key.textContent = "1985";
}

console.log(sections);

// call functions
toggleIcon.addEventListener('click', toggleNav);

for (let i=0; i<sections.length; i++)
{
	sections[i].addEventListener('pointerover', highlightBgColor);
}

for (let i=0; i<sections.length; i++)
{
	sections[i].addEventListener('pointerout', removeBgColor);
}

key.addEventListener('click', revealKey);

