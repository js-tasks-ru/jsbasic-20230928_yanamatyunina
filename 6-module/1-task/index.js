export default class UserTable {

   

  constructor(rows) {

    this.rows=rows;
    this.str = "<thead><th>Имя</th><th>Возраст</th><th>Зарплата</th><th>Город</th><th></th></tr></thead><tbody>"

    this.elem = document.createElement('table');
    
    for(let i=0 ; i<this.rows.length ; i++) {
      this.str += "<tr>";
      let objRow = this.rows[i];
      for(let key in objRow) {
        this.str += `<td>${objRow[key]}</td>`;
      }
      this.str += "<td><button>X</button></td></tr>";
    }
    this.str += "</tbody>";

    this.elem.innerHTML = this.str;
    this.elem.addEventListener('click', (event) => this.removeRow(event));
  }

  removeRow(event) {
    if (event.target.tagName == 'BUTTON') {
      let tr = event.target.closest('tr');
      tr.remove();
    }

    
  }
}


