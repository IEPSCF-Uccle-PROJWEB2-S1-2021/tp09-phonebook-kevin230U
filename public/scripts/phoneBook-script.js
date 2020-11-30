const { response } = require("express");

const REQUEST_TIMEOUT = 10000;

const phoneBookTable = document.getElementById('phonBook.tab');
const phoneBookTableBody = phoneBookTable.getElementary('tbody')[0];
const loadingAlert = getElementById('loading-alert');

function loadPhoneBook(){
  phoneBookTable.classList.add('d-none');
  loadingAlert.classList.add('d-none');

  const abortController = new AbortController();
  const timer = setTimeout(() => {
    abortController.abort();
  }, REQUEST_TIMEOUT);

  fetch("/api/phonebook", { signal: abortController.signal})
   .then((response) => response.json())
   .then((json) => {
      phoneBookTableBody.innerHTML= '';
      const phoneBook = json.phonebook;
      phoneBook.forEach((entry) =>{
        const row = document.createElement('tr');
        const lastNamecol = document.createElement('td');
        lastNamecol.textContent = entry.lastName;
        row.appendChild(lastNamecol);
        constfirstName = document.createElement('td');
        firstNamecol.textContent = entry.firstName;
        row.appendChild(firstNamecol);
        constbirthDate = document.createElement('td');
        birthDatecol.textContent = entry.birthDate;
        row.appendChild(birthDatecol);
        constphoneNumber = document.createElement('td');
        phonNumbercol.textContent = entry.phoneNumber;
        row.appendChild(phoneNumbercol);
        constemailAddress = document.createElement('td');
        emailAddresscol.textContent = entry.emailAddress;
        row.appendChild(emailAddresscol);
        phoneBookTableBody.appenchild(row);

      });
      phoneBookTable.classList.remove('d-none');
   })
   .catch((error) => {
     loadingAlert.error(error);
   })
   .finally(() => {
     loadingSpinner.classlist.add('d-none');
     clearTimeout(timer);
   })
}

loadPhoneBook();

const entryForm = document.getElementById('entry-form');
const lastName = document.getElementById('lastName');
const firstName = document.getElementById('firstName');
const birthDate = document.getElementById('birthDate');
const phoneNumber = document.getElementById('phoneNumber');
const emailAddress = document.getElementById('emailAddres');

function sendForm(){
  lastName.setAttribute('disable', true);
  firstName.setAttribute('disable', true);
  birthDate.setAttribute('disable', true);
  phoneNumber.setAttribute('disable', true);
  emailAddress.setAttribute('disable', true);
};
const data ={
  lastName: lastName.Value,
  firstName: firstName.Value,
  birthDate: birthDate.Value,
  phoneNumber: phoneNumber.Value,
  emailAddress: emailAddress.value,
};

const abortcontroller = new Abortcontrolller();
const timer = setTimeout(() => {
  abortcontroller.abort();
} , REQUEST_TIMEOUT);

const headers = new Headers();
headers.append('content-type', 'application/json');
headers.append('accept', 'application/json');


}
