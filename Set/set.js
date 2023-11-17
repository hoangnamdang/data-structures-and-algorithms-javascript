function Sets() {
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.size = size;
    this.union = union;
    this.intersection = intersection;
    this.different = different;
    this.subset = subset;
    this.show = show;
    this.contains = contains;
}

function add(item) {
    if (this.dataStore.indexOf(item) < 0) {
        this.dataStore.push(item);
        return true;
    }
    return false;
}

function remove(item) {
    const position = this.dataStore.indexOf(item);
    if (position > 0) {
        this.dataStore.splice(position, 1);
        return true;
    }
    return false;
}
function size() {
    return this.dataStore.length;
}

function contains(item) {
    if (this.dataStore.indexOf(item) > -1) {
        return true;
    }
    return false;
}

function union(set) {
    let tempSet = new Sets();
    for (let i = 0; i < this.dataStore.length; i++) {
        tempSet.dataStore.push(this.dataStore[i]);
    }
    for (let i = 0; i < set.dataStore.length; i++) {
        if (!tempSet.contains(set.dataStore[i])) {
            tempSet.dataStore.push(set.dataStore[i]);
        }
    }
    return tempSet;
}
function intersection(set) {
    let tempSet = new Sets();

    for (let i = 0; i < this.dataStore.length; i++) {
        if (set.contains(this.dataStore[i])) {
            tempSet.dataStore.push(this.dataStore[i]);
        }
    }
    return tempSet;
}

function subset(set) {
    if (this.size() > set.size()) {
        return false;
    }
    else {
        for (let i = 0; i < this.dataStore.length; i++) {
            if (!set.contains(this.dataStore[i])) {
                return false;
            }
        }
    }
    return true;
}

function different(set) {
    let tempSet = new Sets();
    for (let i = 0; i < this.dataStore.length; i++) {
        if (!set.contains(this.dataStore[i])) {
            tempSet.dataStore.push(this.dataStore[i]);
        }
    }
    return tempSet;
}


function show() {
    for (let i = 0; i < this.dataStore.length; i++) {
        console.log(this.dataStore[i]);
    }
}

// let set1 = new Sets();
// set1.add("a");
// set1.add("b");
// set1.add("c");
// set1.add("d");
// set1.add("e");
// let set2 = new Sets();
// set2.add("x");
// set2.add("y");
// set2.add("z");
// set2.add("a");
// set2.add("b");
// set2.add("c");
// let set3 = new Sets();
// set3 = set1.union(set2)
// let set4 = new Sets();
// set4 = set1.intersection(set2)
// console.log(set4);
let it = new Sets();
it.add("Cynthia");
it.add("Clayton");
it.add("Jennifer");
it.add("Danny");
it.add("Jonathan");
it.add("Terrill");
it.add("Raymond");
it.add("Mike");
let dmp = new Sets();
dmp.add("Cynthia");
dmp.add("Raymond");
dmp.add("Jonathan");
dmp.add("ABC");
if (dmp.subset(it)) {
    console.log("DMP is a subset of IT.");
}
else {
    console.log("DMP is not a subset of IT.");
}
let df = it.different(dmp)
console.log(df);
