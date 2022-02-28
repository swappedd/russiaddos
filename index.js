const targets = [
  { name: "Izvestia", url: "https://www.iz.ru", req: 0 },
  { name: "Komsomolskaya Pravda", url: "https://kp.ru", req: 0 },
  { name: "Lenta", url: "https://lenta.ru", req: 0 },
  { name: "Rossiyskaya Gazeta", url: "https://rg.ru", req: 0 },
  { name: "Russia Today", url: "https://www.rt.com", req: 0 },
  { name: "Sputnik", url: "https://sputniknews.com", req: 0 },
  { name: "TASS", url: "https://tass.ru", req: 0 },
  { name: "Vesti", url: "https://vesti.ru", req: 0 },
    { name: "Sputnik.by", url: "https://sputnik.by", req: 0 },
      { name: "Belta", url: "https://belta.by", req: 0 },
        { name: "Zarya", url: "https://zarya.by", req: 0 },
          { name: "Interfax", url: "https://interfax.ru", req: 0 },
            { name: "Radio Belarus", url: "https://radiobelarus.by", req: 0 },
            { name: "ONT", url: "https://ont.by", req: 0 },
            { name: "Kremlin", url: "https://kremlin.ru", req: 0 },
            { name: "Sperbank", url: "https://sperbank.ru", req: 0 },
            { name: "1tv", url: "https://1tv.ru", req: 0 },
            { name: "Er", url: "https://er.ru", req: 0 },
            { name: "MIL", url: "https://mil.ru", req: 0 },
            { name: "Gazprom Bank", url: "https://gazprombank.ru", req: 0 },
            { name: "Gazprom", url: "https://gazprom.ru", req: 0 },
            { name: "RIA", url: "https://ria.ru", req: 0 },
              { name: "RBC", url: "https://rbc.ru", req: 0 },
                { name: "Smotrim", url: "https://smotrim.ru", req: 0 },
                  { name: "TMK Group", url: "https://tmk-group.ru", req: 0 },
                    { name: "TatNeft", url: "https://tatneft.ru", req: 0 },
                      { name: "Magnit", url: "https://magnit.ru", req: 0 },


];

var table = document.getElementById("site-table");

setInterval(() => randomRequest(), 10);
setTable();
setInterval(() => setTable(), 1000);

function randomRequest() {
  const randomTarget = targets[Math.floor(Math.random() * targets.length)];
  fetch(randomTarget.url);
  randomTarget.req += 1;
}

function setTable() {
  const oldRows = document.getElementsByClassName("row");
  while (oldRows.length > 0) {
    oldRows[0].parentNode.removeChild(oldRows[0]);
  }

  targets.forEach((target, i) => {
    const row = document.createElement("tr");

    const name = document.createElement("td");
    name.classList.add("row");
    name.innerText = target.url;

    const req = document.createElement("td");
    req.classList.add("row");
    req.innerText = target.req;

    row.appendChild(name);
    row.appendChild(req);
    table.appendChild(row);
  });
}
