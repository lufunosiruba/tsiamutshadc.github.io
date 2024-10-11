const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', ()=>{
	navLinks.classList.toggle('nav-active');
});

// slides
let slideIndex = 0;
showSlides();

function showSlides(){
	let slides = document.querySelectorAll('.slide');
	let dots = document.querySelectorAll('.dot');

	slides.forEach(slide => slide.style.display = "none");
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}

	dots.forEach(dot => dot.className = dot.className.replace(" active",""));
	slides[slideIndex -1].style.display = "block";
	dots[slideIndex - 1].className += " active";
	setTimeout(showSlides, 5000); // change every 5 seconds
}

function currentSlide(n){
	slideIndex = n;
	showSlides();
}

function openModal(element){
	let modal = document.getElementById('myModal');
	let modalImg = document.getElementById("modal-img");
	let captionText = document.getElementById("caption");

	modal.style.display = "block";
	modalImg.src = element.src;
	captionText.innerHTML = element.alt;
}

function closeModal(){
	let modal = document.getElementById('myModal');
	modal.style.display = "none";
}

// toggle service details
function toggleDetails(id){
	const element = document.getElementById(id);
	const allDetails = document.querySelectorAll('.service-details');

	// hide all except the one clicked
	allDetails.forEach(detail =>{
		if(detail.id !== id){
			detail.style.display = 'none';
		}
	});

	// toggle the display of the clicked service details
	if(element.style.display === 'block'){
		element.style.display = 'none';
	}else{
		element.style.display = 'block';
	}
}