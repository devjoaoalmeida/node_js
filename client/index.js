document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:5000/getAll')
    .then(response => response.json())
    .then(data => loadHTMLTable(data['data']));
});

document.querySelector('table tbody').addEventListener('click', function(event){
    if (event.target.className === "delete-row-btn") {
        deleteRowById(event.target.dataset.id);
    }
    if (event.target.className === "edit-row-btn") {
        handleEditRow(event.target.dataset.id);
    }
});

function deleteRowById(id) {
    fetch('http://localhost:5000/delete/' + id, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            location.reload();
        }
    });
}

function handleEditRow(id) {
    const updateSection = document.querySelector('#update-row');
    updateSection.hidden = false;
    document.querySelector('#update-row-btn').dataset.id = id;
}

const addBtn = document.querySelector('#add-name-btn');
const updateBtn = document.querySelector('#update-row-btn');
const searchBtn = document.querySelector('#search-btn');
const voltar = document.querySelector('#voltar');

voltar.onclick = function(){
    location.reload();
}

searchBtn.onclick = function(){
    const searchValue = document.querySelector('#search-input').value;

    fetch('http://localhost:5000/search/' + searchValue)
    .then(response => response.json())
    .then(data => loadHTMLTable(data['data']));
}

updateBtn.onclick = function() {
    const updateNameInput = document.querySelector('#update-name-input');
    
    fetch('http://localhost:5000/update', {
        method: 'PATCH',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            id: updateBtn.dataset.id,
            nome: updateNameInput.value
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            location.reload();
        }
    })
}

addBtn.onclick = function() {
    const nameInput = document.querySelector('#name-input');
    const nome = nameInput.value;
    nameInput.value = "";

    fetch('http://localhost:5000/insert', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({nome : nome})
    })
    .then(response => response.json())
    .then(data => insertRowIntoTable(data['data']))
}

function insertRowIntoTable(data) {
    const table = document.querySelector('table tbody');
    const isTableData = table.querySelector('.no-data');

    let tableHtml = "<tr>";

    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            if (key === 'data') {
                data[key] = new Date(data[key]).toLocaleDateString();
            }
            tableHtml += `<td>${data[key]}</td>`;
        }
    }

    tableHtml += `<td><button class="delete-row-btn" data-id=${data.id}>Apagar</td<>`;
    tableHtml += `<td><button class="edit-row-btn" data-id=${data.id}>Editar</td<>`;
    
    tableHtml += "</tr>";

    if(isTableData){
        table.innerHTML = tableHtml;
    } else {
        const newRow = table.insertRow();
        newRow.innerHTML = tableHtml;
    }
}

function loadHTMLTable(data){
    const table = document.querySelector('table tbody');

    if (data.length === 0){
        table.innerHTML = "<tr><td class='no-data' colspan='5'>Sem dados</td></tr>";
        return;
    }
    let tableHtml = "";

    data.forEach(function ({id,nome, data}) {
        tableHtml += "<tr>";
        tableHtml += `<td>${id}</td<>`;
        tableHtml += `<td>${nome}</td<>`;
        tableHtml += `<td>${new Date(data).toLocaleDateString()}</td<>`;
        tableHtml += `<td><button class="delete-row-btn" data-id=${id}>Apagar</td<>`;
        tableHtml += `<td><button class="edit-row-btn" data-id=${id}>Editar</td<>`;
        tableHtml += "</tr>";
    });

    table.innerHTML = tableHtml
}