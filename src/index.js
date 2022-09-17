const emptyButton = document.getElementById("empty-table");
emptyButton.addEventListener("click", emptyTable);
let table = document.getElementById("table");

function emptyTable() {
  let rowCount = table.rows.length;
  for (let i = rowCount - 1; i > 0; i--) {
    table.deleteRow(i);
  }
}

document.getElementById("submit-data").onclick = function () {
  let username = document.getElementById("input-username").value;
  let email = document.getElementById("input-email").value;
  let address = document.getElementById("input-address").value;
  const checkbox = document.querySelector("#input-admin");
  let rows = table.querySelectorAll("tbody tr");
  let inputImage = document.querySelector("#input-image");

  for (let j = 0; j <= rows.length; ++j) {
    if (rows.length === 0) {
      let newrow = table.insertRow(-1);
      let cell1 = newrow.insertCell(0);
      let cell2 = newrow.insertCell(1);
      let cell3 = newrow.insertCell(2);
      let cell4 = newrow.insertCell(3);
      let cell5 = newrow.insertCell(4);

      cell1.innerText = username;
      cell2.innerText = email;
      cell3.innerText = address;
      if (checkbox.checked) {
        cell4.innerText = "X";
      } else {
        cell4.innerText = "-";
      }
      if (document.getElementById("input-image").files.length === 0) {
        console.log("not add image");
      } else {
        let file = inputImage.files[0];

        let url = URL.createObjectURL(file);
        let img = document.createElement("img");
        img.style.height = "64px";
        img.style.width = "64px";
        img.src = url;
        cell5.appendChild(img);
      }
    } else if (rows[j].cells[0].innerText === username) {
      rows[j].cells[1].innerText = email;
      rows[j].cells[2].innerText = address;
      console.log(j);
      if (checkbox.checked) {
        rows[j].cells[3].innerText = "X";
      } else {
        rows[j].cells[3].innerText = "-";
      }
      if (document.getElementById("input-image").files.length === 0) {
        console.log("not add image");
      } else {
        let file = inputImage.files[0];
        let url = URL.createObjectURL(file);
        let img = document.createElement("img");
        img.style.height = "64px";
        img.style.width = "64px";
        img.src = url;
        rows[j].cells[4].appendChild(img);
      }
      break;
    } else if (j === rows.length - 1) {
      let newrow = table.insertRow(-1);
      let cell1 = newrow.insertCell(0);
      let cell2 = newrow.insertCell(1);
      let cell3 = newrow.insertCell(2);
      let cell4 = newrow.insertCell(3);
      let cell5 = newrow.insertCell(4);

      cell1.innerText = username;
      cell2.innerText = email;
      cell3.innerText = address;
      if (checkbox.checked) {
        cell4.innerText = "X";
      } else {
        cell4.innerText = "-";
      }

      if (document.getElementById("input-image").files.length === 0) {
        console.log("not add image");
      } else {
        let file = inputImage.files[0];
        let url = URL.createObjectURL(file);
        let img = document.createElement("img");
        img.style.height = "64px";
        img.style.width = "64px";
        img.src = url;
        cell5.appendChild(img);
      }
      break;
    }
  }
};
