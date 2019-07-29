//selectors
const courses = document.querySelector('#courses-list');
const shoppingCartContent = document.querySelector('#shopping-cart');
const clearCartBtn = document.querySelector('#clear-cart');

//listeners
loadEventListeners();

function loadEventListeners() {
	// new course is added
	courses.addEventListener('click', buyCourse);
	//
	shoppingCartContent.addEventListener('click', removeCourse);
	//
	clearCartBtn.addEventListener('click', clearCart);
	//document ready
	document.addEventListener('DOMContentLoaded', getFromLocalStorage);
}

//Functions

function buyCourse(e) {
	e.preventDefault();
	//use delegation to find the course that was added
	if (e.target.classList.contains('add-to-cart')) {
		//read the course values
		const course = e.target.parentElement.parentElement;
		console.log('course at23', course);
		getCourseInfo(course);
	}
}

//reads the html information of the selected courses

function getCourseInfo(course) {
	//create an object with course data
	const courseInfo = {
		image: course.querySelector('img').src,
		title: course.querySelector('h4').textContent,
		price: course.querySelector('.price span').textContent,
		id: course.querySelector('a').getAttribute('data-id')
	};
	console.log('line no37', courseInfo);
	//inset into the shopping cart
	addIntoCart(courseInfo);
}

function addIntoCart(course) {
	//create a <tr>
	const row = document.createElement('tr');
	//build the template
	row.innerHTML = `
    <tr>
    <td>
    <img src="${course.image}" width= 100>
    </td>
    <td>
     ${course.title}
    </td>
    <td>
    ${course.price}
   </td>
   <td>
   <a href='#' class='remove' data-id="${course.id}">X</a>
   </td>

    `;
	shoppingCartContent.appendChild(row);

	//add course into storage
	saveIntoStorage(course);
}

// Add course into the ls

function saveIntoStorage(course) {
	let courses = getCoursesFromStorage();
	//add the course into array
	courses.push(course);

	//
	localStorage.setItem('courses', JSON.stringify(courses));
}

//get the contents from storage
function getCoursesFromStorage() {
	let courses;

	if (localStorage.getItem('courses') === null) {
		courses = [];
	} else {
		courses = JSON.parse(localStorage.getItem('courses'));
	}
	return courses;
}

//remove course from the dom

function removeCourse(e) {
	let course, courseId;

	//remove from the dom
	if (e.target.classList.contains('remove')) {
		e.target.parentElement.parentElement.remove();
		course = e.target.parentElement.parentElement;
		courseId = course.querySelector('a').getAttribute('data-id');
	}
	console.log(courseId);
	//remove from the local storage
	removeCourseLocalStorage(courseId);
}

//
function removeCourseLocalStorage(id) {
	// get the local storage data
	let coursesLS = getCoursesFromStorage();
	//loop through the array nd find the index to remove
	coursesLS.forEach(function(courseLS, index) {
		if (courseLS.id === id) {
			coursesLS.splice(index, 1);
		}
	});

	// add the rest of the array
	localStorage.setItem('courses', JSON.stringify(coursesLS));
}

//clear the shopping cart

function clearCart() {
	//shoppingCartContent.innerHTML =' '

	while (shoppingCartContent.firstChild) {
		shoppingCartContent.removeChild(shoppingCartContent.firstChild);
	}
	clearLocalStorage();
}

//clear the whole local storage
function clearLocalStorage() {
	localStorage.clear();
}

//load when doc is ready nd print

function getFromLocalStorage() {
	let courseLS = getCoursesFromStorage();

	//loop through nd generate the markup
	courseLS.forEach(function(course) {
		//create a tr
		const row = document.createElement('tr');
		//print the content
		row.innerHTML = `
    <tr>
    <td>
    <img src="${course.image}" width= 100>
    </td>
    <td>
     ${course.title}
    </td>
    <td>
    ${course.price}
   </td>
   <td>
   <a href='#' class='remove' data-id="${course.id}">X</a>
   </td>

    `;
		shoppingCartContent.appendChild(row);
	});
}