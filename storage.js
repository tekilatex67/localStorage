const addItem = document.querySelector('.add-items');
const plates = document.querySelector('.plates');
let items = JSON.parse(localStorage.getItem('favoritPlates')) || [];



function addItems(e) {
    e.preventDefault()
    let text = document.querySelector('[type="text"]').value;
    let item = {
        text,
        done: false
    }

    items.push(item);

    localStorage.setItem('favoritPlates', JSON.stringify(items));

    displayItems(items, plates);
    this.reset();
}

function displayItems(array = [], placeToDisplay) {

    placeToDisplay.innerHTML = array.map((item, i) => {
        return `
                <li>
                    <input type="checkbox" data-index=${i} id="index-${i}"  ${item.done? 'checked' : ''}>
                    <label for="index-${i}">${item.text}</label>
                </li>`;

    }).join('');

}

function toggleDone(e) {
    if (!e.target.matches('input')) return;
    let index = e.target.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('favoritPlates', JSON.stringify(items));
    displayItems(items, plates);
}


displayItems(items, plates);

addItem.addEventListener('submit', addItems);
plates.addEventListener('click', toggleDone);