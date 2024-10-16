const coursesContainer = document.querySelector('.courses');
const imageElement = document.querySelector('.comp img');

const images = [
    './images/Sprite-0001.gif', 
    './images/Sprite-0003.gif', 
    './images/Sprite-0004-export.gif' 
];

coursesContainer.addEventListener('scroll', () => {
    const courseHeight = coursesContainer.scrollHeight / images.length;
    const scrollPosition = coursesContainer.scrollTop;

        const currentCourseIndex = Math.floor(scrollPosition / courseHeight);

        imageElement.src = images[currentCourseIndex];
});

let horizontalScroll = document.querySelector('.layouts_container');
let leftBtn = document.getElementById('leftBtn');
let rightBtn = document.getElementById('rightBtn');

horizontalScroll.style.scrollBehavior = 'smooth'

rightBtn.addEventListener('click', ()=>{
    horizontalScroll.scrollLeft -= 560;
});

leftBtn.addEventListener('click', ()=>{
    horizontalScroll.scrollLeft += 560;
});
   
const logo = document.querySelectorAll('.image');
        const delay = 4000; 
        let currentIndex = 0;

        function showImages() {
            logo.forEach(img => img.style.display = 'none');

            logo[currentIndex].style.display = 'block';

            
            setTimeout(() => {
                logo[currentIndex].style.display = 'none';
                currentIndex = (currentIndex + 1) % logo.length; 
                showImages();
            }, delay);
        }

        showImages();
