let rightButton = document.querySelector('.pager.right');
let leftButton = document.querySelector('.pager.left');
let allThumbs = document.querySelectorAll('.thumbnails li');
let mainImage = document.querySelector('.picture img');
let h1 = document.querySelector('.info h1');
let p = document.querySelector('.info p');
let thumbnailLiATags = document.querySelectorAll('.thumbnails ul li a');



let currentImageIndex = 0;
let imageUrls =[
  { src: 'image/01_large.jpg', label: `Kandírozott savanyú uborka`, lead: `Rendkívül bacon cucc, elkészítése zsíros egyszerű. Rendkívül koleszterinszegény cucc, főzzök nagyon egyszerű. A sütés kényes hűtőben bevásárolni nagyon egyszerű.` },
  { src: 'image/02_large.jpg', label: `Pacalpörkölt gyümölcsmártással`, lead: `Szinte hiheteten cucc, ha még mindig azt gondoljuk, hogy finom. Persze kevés idő sütésben hőfokon fonnyad. Kivételes alkalmi leves, melynek mindenki örül.` },
  { src: 'image/03_large.jpg', label: `Asztallapra hányt vacsora`, lead: `Kétségtelen, hogy a desszertek királya. Sokan azt hiszk, nehéz elkészíteni és ez bizony így is van. Kezdőknek ajánlott, kedvenc társa a savanyú uborka.` },
  { src: 'image/04_large.jpg', label: `Szushi rántott hússal`, lead: `Ha ma csak egy dolgot szeretnél inni, akkor legyen ez, hiszen a tojás miatt romlandó nincs házifeladat. Ha kellő önbizalommal állunk hozzá, akkor elég ha ülve készítjük ezt a remek falatot.` },
  { src: 'image/05_large.jpg', label: `Érthetelenül nyers zöldségek`, lead: `Elkészítése finom bacon, három tányér friss alma. Gyermekeink kedvence még gyermekkorukból, hiszen minden rohadt napon ezt adtuk nekik. Élvezze ön is kisütve vagy ahogyan csak szereti.` },
  { src: 'image/06_large.jpg', label: `Nem nyers zöldségek - ennek már van értelme`, lead: `Kilenc húsvéti tojás, házias megfelelője a krémes. Ha mindig elhisszük, hogy képes időben megkelni, akkor a leveles tészta mennyisége eléri holnap.` },
];

function onClickRightButton() {
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
  if (currentImageIndex > 0) {
  mainImage.src = 'image/01_large.jpg';
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


function clickOnThumbnail0() {
  if (currentImageIndex != 0) {
    leftButton.classList.add('disabled');
    currentImageIndex = 0;
    mainImage.src = imageUrls[0].src;
    h1.innerText = imageUrls[0].label;
    p.innerText = imageUrls[0].lead;
    updateThumbs();
    rightButton.classList.remove('disabled');
  }
}

function clickOnThumbnail1() {
  currentImageIndex = 1;
  mainImage.src = imageUrls[1].src;
  h1.innerText = imageUrls[1].label;
  p.innerText = imageUrls[1].lead;
  updateThumbs();
  leftButton.classList.remove('disabled');
  rightButton.classList.remove('disabled');
}

function clickOnThumbnail2() {
  currentImageIndex = 2;
  mainImage.src = imageUrls[2].src;
  h1.innerText = imageUrls[2].label;
  p.innerText = imageUrls[2].lead;
  updateThumbs();
  leftButton.classList.remove('disabled');
  rightButton.classList.remove('disabled');
}
function clickOnThumbnail3() {
  currentImageIndex = 3;
  mainImage.src = imageUrls[3].src;
  h1.innerText = imageUrls[3].label;
  p.innerText = imageUrls[3].lead;
  updateThumbs();
  leftButton.classList.remove('disabled');
  rightButton.classList.remove('disabled');
}

function clickOnThumbnail4() {
  currentImageIndex = 4;
  mainImage.src = imageUrls[4].src;
  h1.innerText = imageUrls[4].label;
  p.innerText = imageUrls[4].lead;
  updateThumbs();
  leftButton.classList.remove('disabled');
  rightButton.classList.remove('disabled');
}

function clickOnThumbnail5() {
  if (currentImageIndex != 5) {
    currentImageIndex = 5;
    mainImage.src = imageUrls[5].src;
    h1.innerText = imageUrls[5].label;
    p.innerText = imageUrls[5].lead;
    updateThumbs();
    leftButton.classList.remove('disabled');
    rightButton.classList.add('disabled');
  }
}

//
// let button = document.getElementsByClassName("thumbpic");
// console.log(button[0].id);
//
//
// function clickOnThumb(){
//   for(let i=0;i<button.length;i+=1){
//
//     if (i === button[i].id - 1) {
//       mainImage.src = imageUrls[i].src;
//       h1.innerText = imageUrls[i].label;
//       p.innerText = imageUrls[i].lead;
//       updateThumbs();
//     }
//   }
// }


thumbnailLiATags[1].addEventListener('click', clickOnThumbnail0);
thumbnailLiATags[1].addEventListener('click', clickOnThumbnail1);
thumbnailLiATags[2].addEventListener('click', clickOnThumbnail2);
thumbnailLiATags[3].addEventListener('click', clickOnThumbnail3);
thumbnailLiATags[4].addEventListener('click', clickOnThumbnail4);
thumbnailLiATags[5].addEventListener('click', clickOnThumbnail5);


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
