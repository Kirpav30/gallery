const images = [
    "img/img1.jfif",
    "img/img2.jfif",
    "img/img3.jfif",
    "img/img4.jfif",
    "img/img5.jfif",
    "img/img6.jfif",
    "img/img7.jfif",
    "img/img8.jfif",
    "img/img9.jfif",
    "img/img10.jfif",
    "img/img11.jfif",
    "img/img12.jfif",
    "img/img13.jfif",
    "img/img14.jfif",
    "img/img15.jfif",
    "img/img16.jfif",
    "img/img17.jfif",
    "img/img18.jfif",
    "img/img19.jfif",
    "img/img20.jfif",
    "img/img21.jfif",
    "img/img22.jfif",
    "img/img23.jfif",
    "img/img24.jfif",
    "img/img25.jfif",
    "img/img26.jfif",
    "img/img27.jfif",
    "img/img28.jfif",
    "img/img29.jfif",
    "img/img30.jfif",
    "img/img31.jfif",
    "img/img32.jfif",
    "img/img33.jfif",
    "img/img34.jfif",
    "img/img35.jfif",
    "img/img36.jfif",
    "img/img37.jfif",
    "img/img38.jfif",
    "img/img39.jfif",
    "img/img40.jfif",
    "img/img41.jfif",
    "img/img42.jfif",
    "img/img43.jfif",
    "img/img44.jfif",
    "img/img45.jfif",
    "img/img46.jfif",
    "img/img47.jfif",
    "img/img48.jfif",
    "img/img49.jfif",
    "img/img50.jfif",
    "img/img51.jfif",
    "img/img52.jfif",
    "img/img53.jfif",
    "img/img54.jfif",
    "img/img55.jfif",
    "img/img56.jfif",
    "img/img57.jfif",
    "img/img58.jfif",
    "img/img59.jfif",
    "img/img60.jfif",
    "img/img61.jfif",
    "img/img62.jfif",
    "img/img63.jfif",
    "img/img64.jfif",
    "img/img65.jfif",
    "img/img66.jfif",
    "img/img67.jfif",
    "img/img68.jfif",
    "img/img69.jfif",
    "img/img70.jfif",
    "img/img71.jfif",
    "img/img72.jfif",
    "img/img73.jfif",
    "img/img74.jfif",
    "img/img75.jfif",
    "img/img76.jfif",
    "img/img77.jfif",
    "img/img78.jfif",
    "img/img79.jfif",
    "img/img80.jfif",
    "img/img81.jfif",
    "img/img82.jfif",
    "img/img83.jfif",
    "img/img84.jfif",
    "img/img85.jfif",
    "img/img86.jfif",
    "img/img87.jfif",
    "img/img88.jfif",
    "img/img89.jfif",
    "img/img90.jfif",
    "img/img91.jfif",
];

let currentImageIndex = 0;
const galleryImage = document.getElementById('galleryImage');

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
}

function updateImage() {
    galleryImage.src = images[currentImageIndex];
    galleryImage.alt = `Image ${currentImageIndex + 1}`;
}

// Обработчик событий для клавиатуры
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        prevImage();
    } else if (event.key === 'ArrowRight') {
        nextImage();
    }
});


// Создаем контейнер для картинок
const imageContainer = document.createElement('div');
imageContainer.style.position = 'absolute';
imageContainer.style.top = '0';
imageContainer.style.left = '0';
imageContainer.style.width = '100%';
imageContainer.style.height = '100%';
imageContainer.style.zIndex = '-1'; // Размещаем за основным контентом
document.body.appendChild(imageContainer);

// Параметры картинок
const numImages = 91;
const imageWidth = 120;
const imageHeight = 120;
const spacing = 10;

// Функция для перерисовки картинок
function redrawImages() {
    imageContainer.innerHTML = ''; // Очищаем контейнер

    const imagesPerRow = Math.floor((window.innerWidth + spacing) / (imageWidth + spacing));

    for (let i = 0; i < numImages; i++) {
        const img = document.createElement('img');
        img.src = `img/img${i + 1}.jfif`; // Путь к изображению (замените на ваш)
        img.style.width = `${imageWidth}px`;
        img.style.height = `${imageHeight}px`;
        img.style.position = 'absolute';

        const row = Math.floor(i / imagesPerRow);
        const col = i % imagesPerRow;
        img.style.left = `${col * (imageWidth + spacing)}px`;
        img.style.top = `${row * (imageHeight + spacing)}px`;

        imageContainer.appendChild(img);
    }
}

// Вызываем redrawImages при изменении размера окна
window.addEventListener('resize', redrawImages);

// Первоначальная отрисовка
redrawImages();


