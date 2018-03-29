let rightButton = document.querySelector('.pager.right');
let leftButton = document.querySelector('.pager.left');
let allThumbs = document.querySelectorAll('.thumbnails li')

let currentImageIndex = 0;
let imageUrls =[
  { src: 'image/01.jpg', label: `Kandírozott savanyú uborka`, lead: `Rendkívül bacon cucc, elkészítése zsíros egyszerű. Rendkívül koleszterinszegény cucc, főzzök nagyon egyszerű. A sütés kényes hűtőben bevásárolni nagyon egyszerű.` },
  { src: 'image/02.jpg', label: `Pacalpörkölt gyümölcsmártással`, lead: `Szinte hiheteten cucc, ha még mindig azt gondoljuk, hogy finom. Persze kevés idő sütésben hőfokon fonnyad. Kivételes alkalmi leves, melynek mindenki örül.` },
  { src: 'image/03.jpg', label: `Asztallapra hányt vacsora`, lead: `Kétségtelen, hogy a desszertek királya. Sokan azt hiszk, nehéz elkészíteni és ez bizony így is van. Kezdőknek ajánlott, kedvenc társa a savanyú uborka.` },
  { src: 'image/04.jpg', label: `Szushi rántott hússal`, lead: `Ha ma csak egy dolgot szeretnél inni, akkor legyen ez, hiszen a tojás miatt romlandó nincs házifeladat. Ha kellő önbizalommal állunk hozzá, akkor elég ha ülve készítjük ezt a remek falatot.` },
  { src: 'image/05.jpg', label: `Érthetelenül nyers zöldségek`, lead: `Elkészítése finom bacon, három tányér friss alma. Gyermekeink kedvence még gyermekkorukból, hiszen minden rohadt napon ezt adtuk nekik. Élvezze ön is kisütve vagy ahogyan csak szereti.` },
  { src: 'image/06.jpg', label: `Nem nyers zöldségek - ennek már van értelme`, lead: `Kilenc húsvéti tojás, házias megfelelője a krémes. Ha mindig elhisszük, hogy képes időben megkelni, akkor a leveles tészta mennyisége eléri holnap.` },
];

function onClickRightButton() {
  let mainImage = document.querySelector('.picture img');
  let h1 = document.querySelector('.info h1');
  let p = document.querySelector('.info p');
  if (currentImageIndex < imageUrls.length - 1) {
  currentImageIndex = currentImageIndex + 1
  }
  mainImage.src = imageUrls[currentImageIndex].src;
  h1.innerText = imageUrls[currentImageIndex].label;
  p.innerText = imageUrls[currentImageIndex].lead;
  leftButton.classList.remove('disabled')
  if (currentImageIndex == imageUrls.length - 1) {
    rightButton.classList.add('disabled');
  }
  updateThumbs();
}

function onClickLeftButton() {
  let mainImage = document.querySelector('.picture img');
  let h1 = document.querySelector('.info h1');
  let p = document.querySelector('.info p');
  if (currentImageIndex > 0) {
  mainImage.src = 'http://lorempixel.com/output/food-q-c-640-360-1.jpg';
  currentImageIndex = currentImageIndex - 1
  }
  mainImage.src = imageUrls[currentImageIndex].src;
  h1.innerText = imageUrls[currentImageIndex].label;
  p.innerText = imageUrls[currentImageIndex].lead;
  rightButton.classList.remove('disabled');
  if (currentImageIndex === 0) {
    leftButton.classList.add('disabled');
  }
  updateThumbs();
  }

function updateThumbs() {
  let selectedThumb = document.querySelector('.select');
  selectedThumb.classList.remove('select');
  allThumbs[currentImageIndex].classList.add('select');
}

rightButton.addEventListener('click', onClickRightButton);
leftButton.addEventListener('click', onClickLeftButton);

document.addEventListener('keyup', function(event) {
    if (event.keyCode === 39) {
        onClickRightButton()
    }
    else if (event.keyCode === 37) {
        onClickLeftButton()
    }
});
