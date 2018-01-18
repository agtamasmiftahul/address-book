var nameInput = document.getElementById(`name`);
var phoneInput = document.getElementById(`phone`);
var addressInput = document.getElementById(`address`);
var mailInput = document.getElementById(`email`);
var addButton = document.getElementById(`add-button`);
var table = document.getElementById(`address-book`);
var searchInput = document.getElementById(`search`);

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
    'name': nameA,
    'phone': phoneA,
    'address': addressA,
    'mail': mailA
  });

  name = nameA;
  phone = phoneA;
  address = addressA;
  mail = mailA;
}

function addRow() {

  addContact();
  var row = table.insertRow(1);

  var cellName = row.insertCell(0);
  var cellPhone = row.insertCell(1);
  var cellAddress = row.insertCell(2);
  var cellMail = row.insertCell(3);
  var cellAction = row.insertCell(4);

  cellName.innerHTML = name;
  cellPhone.innerHTML = phone;
  cellAddress.innerHTML = address;
  cellMail.innerHTML = mail;
  cellAction.innerHTML = `<i class="material-icons prefix delete-icon">delete_forever</i>`

  cellName.className = `center`;
  cellPhone.className = `center`;
  cellAddress.className = `center`;
  cellMail.className = `center`;
  cellAction.className = `center`;

  row.id = name;
}

function search() {
  var filter;
  var tr;
  var td;
  var i;
  filter = searchInput.value.toUpperCase();
  tr = table.getElementsByTagName(`tr`);
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName(`td`)[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = `none`;
      }
    }
  }
}

addButton.addEventListener(`click`, addRow);
searchInput.addEventListener(`keyup`, search);