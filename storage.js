const itemsList = document.querySelector('.plates');
const submitBtn = document.querySelector('.add-items');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItems(e) {
    e.preventDefault();

    const text = document.querySelector('[name="item"]').value;

    const item = {
        text,
        done: false
    };

    items.push(item);
    populatList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));

    this.reset();
};

function populatList(plates  = [], platesList) {

    platesList.innerHTML = plates.map((plate, i) => {
        return `<li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} >
                <label for="item${i}">${plate.text}</label></li>`
    }).join('');
}
populatList(items, itemsList)


function toggleDone(e) {
    if (!e.target.matches('input')) return;
    let index = e.target.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populatList(items, itemsList);
}

submitBtn.addEventListener('submit', addItems)
itemsList.addEventListener('click', toggleDone)