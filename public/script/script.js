let elevarThumbnails = document.getElementsByClassName(
  "elevar__image-thumbnail"
);

let chooseColor = document.getElementsByClassName(
  "elevar__choose-color__image"
);

chooseColor[0].style.border = "2px solid red";

let chooseSizeNumber = document.getElementsByClassName(
  "elevar__shoe__description"
);

let chooseSize = document.getElementsByClassName("elevar__size__title");

chooseSizeNumber[0].style.backgroundColor = "black";
chooseSizeNumber[0].style.color = "white";
chooseSize[0].innerHTML = `This <span class = 'elevar__size__title__comaprison'> UK Size 6</span> is equivalent to <span class = 'elevar__size__title__comaprison'> US 7</span> or  <span class = 'elevar__size__title__comaprison'> EU ${41}</span>`;

let selectedThumbnail = document.getElementsByClassName("selected");

let element = document.getElementsByClassName("elevar__image")[0];

const sizeRadio = document.getElementsByClassName("custom-control-input");

let i = 0;

const onThumbnailClick = (index) => {
  i = index;

  console.log(i);

  if (i <= 7) {
    chooseColor[0].style.border = "2px solid red";
    chooseColor[1].style.border = "2px solid  grey";
    chooseColor[2].style.border = "2px solid  grey";
    document.getElementsByClassName(
      "elevar__choose-color__title"
    )[0].style.color = "#800000";
    document.getElementsByClassName(
      "elevar__choose-color__title"
    )[0].innerHTML = "Fiery Red";
  } else if (i > 7 && i <= 15) {
    chooseColor[0].style.border = "2px solid  grey";
    chooseColor[1].style.border = "2px solid blue";
    chooseColor[2].style.border = "2px solid  grey";
    document.getElementsByClassName(
      "elevar__choose-color__title"
    )[0].style.color = "blue";
    document.getElementsByClassName(
      "elevar__choose-color__title"
    )[0].innerHTML = "Cobalt Blue";
  } else if (i > 15) {
    chooseColor[0].style.border = "2px solid  grey";
    chooseColor[1].style.border = "2px solid  grey";
    chooseColor[2].style.border = "2px solid black";
    document.getElementsByClassName(
      "elevar__choose-color__title"
    )[0].style.color = "black";
    document.getElementsByClassName(
      "elevar__choose-color__title"
    )[0].innerHTML = "Carbon Black";
  }

  console.log(selectedThumbnail, i, index);

  if (selectedThumbnail.length > 0) {
    selectedThumbnail[0].classList.remove("selected");
  }

  elevarThumbnails[i].classList.add("selected");
  document.getElementsByClassName("elevar__image-img")[0].src =
    elevarThumbnails[i].src;
};


              // Choose Color
const onThumbnailClickWithoutSlider = (index) => {
  i = index;

  console.log(i);

  if (i == 0) {
    chooseColor[0].style.border = "2px solid red";
    chooseColor[1].style.border = "2px solid  grey";
    chooseColor[2].style.border = "2px solid  grey";
    chooseSizeNumber[4].style.backgroundImage ="none"
    document.getElementsByClassName(
      "elevar__choose-color__title"
    )[0].style.color = "#800000";
    document.getElementsByClassName(
      "elevar__choose-color__title"
    )[0].innerHTML = "Fiery Red";

    document.getElementsByClassName("elevar__image-img")[0].src =
      "/images/show images/0.png";
  } else if (i == 1) {
    chooseColor[0].style.border = "2px solid  grey";
    chooseColor[1].style.border = "2px solid blue";
    chooseColor[2].style.border = "2px solid  grey";
    chooseSizeNumber[4].style.backgroundImage ="none"
    document.getElementsByClassName(
      "elevar__choose-color__title"
    )[0].style.color = "blue";
    document.getElementsByClassName(
      "elevar__choose-color__title"
    )[0].innerHTML = "Cobalt Blue";

    document.getElementsByClassName("elevar__image-img")[0].src =
      "/images/show images/8.png";
      
  } else if (i == 2) {
    chooseColor[0].style.border = "2px solid  grey";
    chooseColor[1].style.border = "2px solid  grey";
    chooseColor[2].style.border = "2px solid black";
    chooseSizeNumber[4].style.backgroundImage ="url('/images/show images/Soldout_image.png')"
    
    console.log(chooseSize[4]);
    document.getElementsByClassName(
      "elevar__choose-color__title"
    )[0].style.color = "black";
    document.getElementsByClassName(
      "elevar__choose-color__title"
    )[0].innerHTML = "Carbon Black";

    document.getElementsByClassName("elevar__image-img")[0].src =
      "/images/show images/16.png";
  }

  // console.log(selectedThumbnail, i, index);

  // if (selectedThumbnail.length > 0) {
  //   selectedThumbnail[0].classList.remove("selected");
  // }

  // elevarThumbnails[i].classList.add("selected");
  // document.getElementsByClassName("elevar__image-img")[0].src =
  //   elevarThumbnails[i].src;
};

const onThumbnailIterator = (iteratorType) => {
  let thumbnailSize = selectedThumbnail[0].offsetWidth;

  if (iteratorType == "prev") {
    i--;
    if (i < 0) {
      i = 22;
      console.log("Prev", i);
      document
        .getElementsByClassName("elevar__image__slider")[0]
        .scrollBy(thumbnailSize * 21, 0);
    } else {
      document
        .getElementsByClassName("elevar__image__slider")[0]
        .scrollBy(-thumbnailSize, 0);
    }
  } else if (iteratorType == "next") {
    i++;
    if (i > 22) {
      console.log("next");
      i = 0;
      document
        .getElementsByClassName("elevar__image__slider")[0]
        .scrollBy(-(thumbnailSize * 21), 0);
    } else {
      console.log(thumbnailSize);
      document
        .getElementsByClassName("elevar__image__slider")[0]
        .scrollBy(thumbnailSize, 0);
    }
  }

  onThumbnailClick(i);

  // if (selectedThumbnail.length > 0) {
  //   selectedThumbnail[0].classList.remove("selected");
  // }

  // console.log(elevarThumbnails);
  // elevarThumbnails[i].classList.add("selected");
  // document.getElementsByClassName("elevar__image-img")[0].src =
  //   elevarThumbnails[i].src;
};

const onSizeIterator = (iterator) => {
  switch (iterator) {
    case 6: {
      chooseSize[0].innerHTML = `This <span class = 'elevar__size__title__comaprison'> UK Size ${iterator}</span> is equivalent to <span class = 'elevar__size__title__comaprison'> US ${
        iterator + 1
      }</span> or  <span class = 'elevar__size__title__comaprison'> EU ${
        40 + (iterator - 5)
      }</span>`;
      chooseSizeNumber[0].style.backgroundColor = "black";
      chooseSizeNumber[0].style.color = "white";
      chooseSizeNumber[1].style.backgroundColor = "#fafafa";
      chooseSizeNumber[1].style.color = "black";
      chooseSizeNumber[2].style.backgroundColor = "#fafafa";
      chooseSizeNumber[2].style.color = "black";
      chooseSizeNumber[3].style.backgroundColor = "#fafafa";
      chooseSizeNumber[3].style.color = "black";
      chooseSizeNumber[4].style.backgroundColor = "#fafafa";
      chooseSizeNumber[4].style.color = "black";
      chooseColor[2].style.backgroundImage = "none";

      break;
    }

    case 7: {
      chooseSize[0].innerHTML = `This <span class = 'elevar__size__title__comaprison'> UK Size ${iterator}</span> is equivalent to <span class = 'elevar__size__title__comaprison'> US ${
        iterator + 1
      }</span> or  <span class = 'elevar__size__title__comaprison'> EU ${
        40 + (iterator - 5)
      }</span>`;
      chooseSizeNumber[0].style.backgroundColor = "#fafafa";
      chooseSizeNumber[0].style.color = "black";
      chooseSizeNumber[1].style.backgroundColor = "black";
      chooseSizeNumber[1].style.color = "white";
      chooseSizeNumber[2].style.backgroundColor = "#fafafa";
      chooseSizeNumber[2].style.color = "black";
      chooseSizeNumber[3].style.backgroundColor = "#fafafa";
      chooseSizeNumber[3].style.color = "black";
      chooseSizeNumber[4].style.backgroundColor = "#fafafa";
      chooseSizeNumber[4].style.color = "black";
      chooseColor[2].style.backgroundImage = "none";

      break;
    }

    case 8: {
      chooseSize[0].innerHTML = `This <span class = 'elevar__size__title__comaprison'> UK Size ${iterator}</span> is equivalent to <span class = 'elevar__size__title__comaprison'> US ${
        iterator + 1
      }</span> or  <span class = 'elevar__size__title__comaprison'> EU ${
        40 + (iterator - 5)
      }</span>`;
      chooseSizeNumber[0].style.backgroundColor = "#fafafa";
      chooseSizeNumber[0].style.color = "black";
      chooseSizeNumber[1].style.backgroundColor = "#fafafa";
      chooseSizeNumber[1].style.color = "black";
      chooseSizeNumber[2].style.backgroundColor = "black";
      chooseSizeNumber[2].style.color = "white";
      chooseSizeNumber[3].style.backgroundColor = "#fafafa";
      chooseSizeNumber[3].style.color = "black";
      chooseSizeNumber[4].style.backgroundColor = "#fafafa";
      chooseSizeNumber[4].style.color = "black";
      chooseColor[2].style.backgroundImage = "none";

      break;
    }

    case 9: {
      chooseSize[0].innerHTML = `This <span class = 'elevar__size__title__comaprison'> UK Size ${iterator}</span> is equivalent to <span class = 'elevar__size__title__comaprison'> US ${
        iterator + 1
      }</span> or  <span class = 'elevar__size__title__comaprison'> EU ${
        40 + (iterator - 5)
      }</span>`;
      chooseSizeNumber[0].style.backgroundColor = "#fafafa";
      chooseSizeNumber[0].style.color = "black";
      chooseSizeNumber[1].style.backgroundColor = "#fafafa";
      chooseSizeNumber[1].style.color = "black";
      chooseSizeNumber[2].style.backgroundColor = "#fafafa";
      chooseSizeNumber[2].style.color = "black";
      chooseSizeNumber[3].style.backgroundColor = "black";
      chooseSizeNumber[3].style.color = "white";
      chooseSizeNumber[4].style.backgroundColor = "#fafafa";
      chooseSizeNumber[4].style.color = "black";
      chooseColor[2].style.backgroundImage = "none";

      break;
    }

    case 10: {
      chooseSize[0].innerHTML = `This <span class = 'elevar__size__title__comaprison'> UK Size ${iterator}</span> is equivalent to <span class = 'elevar__size__title__comaprison'> US ${
        iterator + 1
      }</span> or  <span class = 'elevar__size__title__comaprison'> EU ${
        40 + (iterator - 5)
      }</span>`;
      chooseSizeNumber[0].style.backgroundColor = "#fafafa";
      chooseSizeNumber[0].style.color = "black";
      chooseSizeNumber[1].style.backgroundColor = "#fafafa";
      chooseSizeNumber[1].style.color = "black";
      chooseSizeNumber[2].style.backgroundColor = "#fafafa";
      chooseSizeNumber[2].style.color = "black";
      chooseSizeNumber[3].style.backgroundColor = "#fafafa";
      chooseSizeNumber[3].style.color = "black";
      chooseSizeNumber[4].style.backgroundColor = "black";
      chooseSizeNumber[4].style.color = "white";

      chooseColor[2].style.backgroundImage = "url('/images/show images/Small_soldout_image.png')";

      break;
    }
  }
};

var optionValue = 0
 


const onDropdownOptions = (option) => {
  let checked = false;
  
  optionValue = option? option: optionValue;
  
  console.log(optionValue);
  for (let j = 0; j < sizeRadio.length; j++) {
    if (sizeRadio[j].checked) {
      checked = true;
    }
  }
  

  if(!checked){
    document.getElementsByClassName(
      "dropdown__text"
    )[0].innerHTML = "Please Select above option";
  }

  if (!checked || !optionValue) {
    return 0;
  }


  onSizeIterator(optionValue);

  document.getElementsByClassName("elevar__recommendation")[0].style.display =
    "block";

  switch (optionValue) {
    case 6: {
      document.getElementsByClassName(
        "dropdown__text"
      )[0].innerHTML = "UK 6/US 7";
      document.getElementsByClassName("elevar__recommendation")[0].innerHTML =
        "We recommend you go for an Elevar Arc Racer Size UK 6";
      break;
    }

    case 7: {

      console.log(document.getElementsByClassName("elevar__recommendation")[0].innerHTML);

      document.getElementsByClassName(
        "dropdown__text"
      )[0].innerHTML = "UK 7/US 8";
      document.getElementsByClassName("elevar__recommendation")[0].innerHTML =
        "We recommend you go for an Elevar Arc Racer Size UK 7";
      break;
    }

    case 8: {
      document.getElementsByClassName(
        "dropdown__text"
      )[0].innerHTML = "UK 8/US 9";
      document.getElementsByClassName("elevar__recommendation")[0].innerHTML =
        "We recommend you go for an Elevar Arc Racer Size UK 8";
      break;
    }

    case 9: {
      document.getElementsByClassName(
        "dropdown__text"
      )[0].innerHTML = "UK 9/US 10";
      document.getElementsByClassName("elevar__recommendation")[0].innerHTML =
        "We recommend you go for an Elevar Arc Racer Size UK 9";
      break;
    }

    case 10: {
      document.getElementsByClassName(
        "dropdown__text"
      )[0].innerHTML = "UK 10/US 11";
      document.getElementsByClassName("elevar__recommendation")[0].innerHTML =
        "We recommend you go for an Elevar Arc Racer Size UK 10";
      break;
    }
  }
};

const onImageIterator = (type) => {

    if(type == 'next'){
      i++;
    } else {
      i--;
    }
  
  if(i > 2){
    i = 0
  } else if(i < 0){
    i = 2;
  }

  console.log(i);
  onThumbnailClickWithoutSlider(i);


}

const onModalMetricDisplay = (type) => {

  let cm = document.getElementById('in-cm');
  let inch = document.getElementById('in-in');

  if(type == 'in-cm'){
    cm.style.backgroundColor = "blue";
    cm.style.color = "white";
    inch.style.backgroundColor = "white";
    inch.style.color = "black";
    document.getElementById('inCm').style.display = "block";
    document.getElementById('inInch').style.display = "none";
  } else {
    cm.style.backgroundColor = "white";
    cm.style.color = "black";
    inch.style.backgroundColor = "blue";
    inch.style.color = "white";
    console.log(document.getElementById('inInch'));
    document.getElementById('inCm').style.display = "none";
    document.getElementById('inInch').style.display = "block";
  }


}