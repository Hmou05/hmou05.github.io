
var len = 0;

onEnterKeyPressedInInput();
storeIdInBtn();

addLines(30);

function addLines(n = 1) {
  for (var i = 0; i < n; i++) {
    addLine();
  }
}

function storeIdInBtn() {
  let line_number = document.getElementById("gotoline");
  let btn = document.getElementById("goto-btn");
  line_number.addEventListener("input", () => {
    btn.setAttribute("href", `#_${Number(line_number.value) - 1}`);
  });
}

function set_IDs() { }

function update() {
  let gotoline = document.getElementById("gotoline");
  gotoline.setAttribute("max", len);
}

function onEnterKeyPressedInInput() {
  let gotoInput = document.getElementById("gotoline");
  gotoInput.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
      document
        .getElementById("goto-btn")
        .setAttribute("href", `#_${gotoInput.value}`);
      document.getElementById("goto-btn").click();
    }
  });
}

function onEnterKeyPressedInCell() {
  if (len > 1) {
    var ID = len;
    ["dest", "qte", "puht"].forEach(c => {
      let destCell = document.getElementById(`${c}_${ID - 1}`);
      // Using Enter
      destCell.addEventListener("keypress", (e) => {
        if (e.key == "Enter") {
          document
            .getElementById(`${c}_${ID}`).focus();
          document.getElementById(`_${ID}`).style.backgroundColor = '#e2dbff';
          setInterval(() => {
            document.getElementById(`_${ID}`).style.backgroundColor = '#ffffff';
          }, 1000);
        }
      });
      // Using Buttom Arrow
      destCell.addEventListener("keypress", (e) => {
        if (e.keyCode == 41) {
          document
            .getElementById(`${c}_${ID}`).focus();
          document.getElementById(`_${ID}`).style.backgroundColor = '#e2dbff';
          setInterval(() => {
            document.getElementById(`_${ID}`).style.backgroundColor = '#ffffff';
          }, 1000);
        }
      });
    });
  }
}


function oninputEvent() {
  let line = document.querySelector(`#_${len}`);
  let cells = line.children;
  cells[1].oninput = () => {
    cells[1].value = (cells[1].value).toUpperCase();
  };
  [cells[2], cells[3]].forEach((cell) => {
    cell.oninput = () => {
      var puttc = 1.2 * Number(cells[3].value);
      cells[4].textContent = puttc.toFixed(3);
      cells[5].textContent = (puttc * Number(cells[2].value)).toFixed(3);
    };
  });
}

function addLine() {
  len++;
  table.insertAdjacentHTML(
    "beforeend",
    `<div class="table-row" id="_${len}">
        <span class="number no-selection">${len}</span>
          <input type="text" class="inputs DESIGNATION left" id="dest_${len}" autocomplete="off" />
          <input type="number" min=1 class="inputs QUANTITE center" id="qte_${len}" autocomplete="off" />
          <input type="number" class="inputs PU-HT center" id="puht_${len}" autocomplete="off" />
          <div class="PU-TTC center"></div>
          <div class="MONTANT-TTC center"></div>
      </div>`
  );
  oninputEvent();
  update();
  onEnterKeyPressedInCell();
}

function deleteLine() {
  let line = document.querySelector(`#_${len}`);
  if (len > 1) {
    line.remove();
    len--;
    update();
  }
}

function gotoNextCell() {
  return 0;
}

























































function createTableFromFile(file) {
  function addFileLine(DESIGNATION, QUANTITE, PUHT) {
    len++;
    table.insertAdjacentHTML(
      "beforeend",
      `<div class="table-row" id="_${len}">
            <span class="number no-selection">${len}</span>
                <input type="text" class="inputs DESIGNATION left" autocomplete="off" value="${DESIGNATION}" />
                <input type="number" min=1 class="inputs QUANTITE center" id="qte" autocomplete="off" value="${QUANTITE}" />
                <input type="number" min=0.5 class="inputs PU-HT center" id="puht" autocomplete="off" value="${PUHT}" />
                <div class="PU-TTC center">${(PUHT * 1.2).toFixed(3)}</div>
                <div class="MONTANT-TTC center">${(PUHT * 1.2 * QUANTITE).toFixed(3)}</div>
            </div>`
    );
    oninputEvent();
    update();
  }
}