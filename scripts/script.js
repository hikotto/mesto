let editButton = document.querySelector('.profile__edit');
let popup = document.querySelector('.popup');
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');
let inputInfo = document.querySelectorAll('.popup__input');
let closeButton = document.querySelector('.popup__close-btn');
let nameInput = document.querySelector('.popup__input_info_name');
let jobInput = document.querySelector('.popup__input_info_about');
let formElement = document.querySelector('.popup__form');


function openPopup () {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}


function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  closePopup();
}


editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
