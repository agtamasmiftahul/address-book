var nameInput = document.getElementById(`name`);
var phoneInput = document.getElementById(`phone`);
var addressInput = document.getElementById(`address`);
var mailInput = document.getElementById(`email`);
var addButton = document.getElementById(`add-button`);
var table = document.getElementById(`address-book`);
var contact = [];
var name;
var phone;
var address;
var mail;

function addContact() {
  var nameA = nameInput.value;
  var phoneA = phoneInput.value;
  var addressA = addressInput.value;
  var mailA = mailInput.value;
  contact.push({
    'name': name,
    'phone': phone,
    'address': address,
    'mail': mail
  });
  name = nameA;
  phone = phoneA;
  address = addressA;
  mail = mailA;
}

function addRow() {

  addContact();
  var row = table.insertRow(2);

  var cellName = row.insertCell(0);
  var cellPhone = row.insertCell(1);
  var cellAddress = row.insertCell(2);
  var cellMail = row.insertCell(3);

  cellName.innerHTML = name;
  cellPhone.innerHTML = phone;
  cellAddress.innerHTML = address;
  cellMail.innerHTML = mail;

  cellName.className = `center`;
  cellPhone.className = `center`;
  cellAddress.className = `center`;
  cellMail.className = `center`;
}

function show() {
  console.log(addContact());
}

addButton.addEventListener(`click`, addRow);