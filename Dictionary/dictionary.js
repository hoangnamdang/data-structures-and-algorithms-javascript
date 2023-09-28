function Dictionary() {
    this.datastore = new Object();
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count;
    this.clear = clear;
}

function add(key, value) {
    this.datastore[key] = value
}

function find(key) {
    return this.datastore[key]
}

function remove(key) {
    delete this.datastore[key];
}

function showAll() {
    for (let key of Object.keys(this.datastore)) {
        console.log(key + " -> " + this.datastore[key]);
    }
}

function count() {
    return Object.keys(this.datastore).length;
}

function clear() {
    for (let key of Object.keys(this.datastore)) {
        delete this.datastore[key];
    }
}

let bookPhone = new Dictionary();
bookPhone.add("Mike", "123");
bookPhone.add("ABC", "3456");
bookPhone.add("DDD", "897");
console.log(bookPhone.datastore);
bookPhone.showAll()
bookPhone.clear()
bookPhone.showAll()

