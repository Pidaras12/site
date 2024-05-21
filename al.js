const circle = document.querySelector('.slider__circles');

const backgroundImage = document.querySelector('.background');
let prevImage = null;

const images = [
    'slider-image-1',
    'slider-image-2',
    'slider-image-3'
];

circle.addEventListener('click', function(e) {
    if (e.target.classList.contains('circle')) {
        backgroundImage.classList.remove(`slider-image-${prevImage}`);
        backgroundImage.classList.add(`slider-image-${e.target.dataset.slider}`);
        prevImage = e.target.dataset.slider;
    }
});
const reviews = [
    {
        text: "Отличный сервис! Очень доволен!",
        photo: "https://ic.pics.livejournal.com/lika_bo/85881556/263965/263965_original.jpg"
    },
    {
        text: "Все прошло гладко, спасибо!",
        photo: "https://cbgd.ask.fm/319/66a94/c389/4f4c/9205/13456088bdd9/original/4682100.jpg"
    },
    {
        text: "Неожиданно быстро и качественно.",
        photo: "https://get.pxhere.com/photo/man-person-people-photography-male-portrait-child-human-hat-facial-expression-smile-senior-citizen-face-head-caricature-troll-comic-emotion-portrait-photography-720074.jpg"
    },
    {
        text: "Проблемы с доставкой, но поддержка помогла решить.",
        photo: "slider.jfif",
    },
    {
        text: "Превосходный опыт, обязательно вернусь!",
        photo: "https://4x4photo.ru/wp-content/uploads/2023/06/0933b66a-8dc8-46e4-ba2c-4b7ad6b50143.jpg"
    }
];

let currentReviewIndex = 0;

const reviewElement = document.getElementById('client-review');
const photoElement = document.getElementById('client-photo');
const prevBtn = document.getElementById('prevBtn1');
const nextBtn = document.getElementById('nextBtn1');

function updateReview() {
    reviewElement.textContent = reviews[currentReviewIndex].text;
    photoElement.src = reviews[currentReviewIndex].photo;
    prevBtn.disabled = currentReviewIndex === 0;
    nextBtn.disabled = currentReviewIndex === reviews.length - 1;
}

prevBtn.addEventListener('click', () => {
    if (currentReviewIndex > 0) {
        currentReviewIndex--;
        updateReview();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentReviewIndex < reviews.length - 1) {
        currentReviewIndex++;
        updateReview();
    }
});

// Инициализация первого отзыва
updateReview();
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


    document.getElementById('silka').onclick = function() {
        window.location.href = 'why_we.html';
    };
