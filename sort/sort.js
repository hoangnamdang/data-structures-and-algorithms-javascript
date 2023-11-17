function CArray(numElements) {
    this.dataStore = [3, 2, 1, 6];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.clear = clear;
    this.toString = toString;
    this.setData = setData;
    this.swap = swap;
    this.bubbleSort = bubbleSort;
    this.selectionSort = selectionSort;
    this.insertionSort = insertionSort;
    this.shellSort = shellSort;

}

function setData() {
    for (let i = 0; i < this.numElements; i++) {
        this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1))
        // this.dataStore[i] = Math.floor(Math.random() * 100) + 1
    }
}

function clear() {
    for (let i = 0; i < this.numElements; i++) {
        this.dataStore[i] = 0;
    }
}

function insert() {

}

function toString() {
    let str = ""
    for (let i = 0; i < this.numElements; i++) {
        str += this.dataStore[i] + " ";
        if (i > 0 && i % 10 === 0) {
            str += "\n";
        }
    }
    return str;
}

function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
//bubbleSort
// let arr = [6, 3, 0, 5]
//loop i = 0
//loop j = 0 => if(arr[0] : 6 > arr[j +1] : 3) => true => [3, 6, 0, 5] => j++ => 1 => check j < arr.length - i - 1 => 1 < 4 - 1
//loop j = 1 => if(arr[1] : 6 > arr[1 + 1] : 0) => true => [3, 0, 6, 5] => j++ => 2 => check j < arr.length - i - 1 => 2 < 4 - 1
//loop j = 2 => if(arr[2] : 6 > arr[2 + 1] : 5) => true => [3, 0, 5, 6] => j++ => 3 => check j < arr.length - i - 1 => 3 < 4  - 1 end loop

//arr = [3, 0, 5, 6]
// loop i = 1;
// loop j = 0; => if(arr[0] : 3 > arr[j + 1] : 0) => true => [0 , 3, 5, 6] => j++ => 1 => check j < arr.length - i => 0 < 4 - 1
// loop j = 1; => if(arr[1] : 3 > arr[j + 1] : 0) => true => [0 , 3, 5, 6] => j++ => 2 => check j < arr.length - i => 2 < 4 - 1 

function bubbleSort() {
    let swapped = false;
    for (let i = 0; i < this.dataStore.length; i++) {
        for (let j = 0; j < this.dataStore.length - 1; j++) {
            if (this.dataStore[j] > this.dataStore[j + 1]) {
                this.swap(this.dataStore, j, j + 1);
                // let temp = this.dataStore[j];
                // this.dataStore[j] = this.dataStore[j + 1];
                // this.dataStore[j + 1] = temp;
            }
        }
    }
    console.log("tttt", this.dataStore);
}
//[3, 0, 0, 3, 0]
// 
function selectionSort() {
    for (let i = 0; i < this.dataStore.length - 1; i++) {
        let min_idx = i;
        for (let j = i + 1; j < this.dataStore.length; j++) {
            if (this.dataStore[min_idx] > this.dataStore[j]) {
                min_idx = j;
            }
        }
        this.swap(this.dataStore, min_idx, i);
    }
    console.log("tttt", this.dataStore);
}

//[3, 2, 1, 6]
// loop 1 [2, 3, 1, 6]
// loop 2 => i = 2 j = 2 temp = 1 while lần 1 => [2, 3, 3, 6] => j-- : 2--  =>  while (1 > 0 && this.dataStore[1 - 1] > temp) { => [2, 2, 3, 6] => j-- = 1-- : 0 end while => [1,2,3,6]
// loop 3 => dk while ko thoả nên this.dataStore[j] = temp => [1,2,3,6]
function insertionSort() {
    for (let i = 1; i < this.dataStore.length; i++) {
        let temp = this.dataStore[i];
        let j = i;
        while (j > 0 && this.dataStore[j - 1] > temp) {
            this.dataStore[j] = this.dataStore[j - 1];
            --j;
        }
        this.dataStore[j] = temp;
    }
    console.log("tttt", this.dataStore);
}


function shellSort(arr) {
    let n = arr.length;

    // Start with a big gap, then reduce the gap
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        // Do a gapped insertion sort for this gap size.
        for (let i = gap; i < n; i++) {
            // add arr[i] to the elements that have been gap sorted
            let temp = arr[i];
            let j;
            for (j = i; j >= gap && arr[j - gap] > temp; j = j - gap) {
                arr[j] = arr[j - gap];
            }

            // put temp (the original arr[i]) in its correct location
            arr[j] = temp;
            console.log(i);
            console.log(arr);
        }

    }
    return arr;
};


// let numElements = 100;
// let myNums = new CArray(numElements);
// // myNums.setData();
// console.log(myNums.toString())
// myNums.shellsort();
// console.log(myNums.toString())
let tt = [7, 6, 8, 9, 3, 2, 10, 5, 1];
shellSort(tt);
// arr = [7, 6, 8, 9, 3, 2, 10, 5, 1];
// gap = Math.floor(arr.length/2) = 4
// for(let i = gap): loop các phần tử
// let temp = arr[i] = 3
// let j: tạo 1 index để hoán vị
//  for (j = i; j >= gap && arr[j - gap] > temp; j = j - gap) { => j = 4; j >= gap : 4 >= 4 && arr[4 - 4 : 0] = 7 > 3
//    arr[j] = arr[j - gap]; // hoán chỗ arr[4] = arr[4 - 4: 0]
//}
// arr[j] = temp; // arr[4] = 3
