function swap(arr, first_Index, second_Index) {
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
}

function bubble_Sort(arr) {
    var len = arr.length,
        i, j, stop;
    for (i = 0; i < len; i++) {
        for (j = 0, stop = len - i; j < stop; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
}

function fullarray(e, array) {
    for (let index = 0; index < e * 10000; index++) {
        array[index] = Math.floor(Math.random() * (10000 * e))
    }
}
let array = [];
let test = document.querySelector('#btn');
let test1 = document.querySelector('main');
test.addEventListener('click', function() {
    test1.style.display = 'none';
});
test.addEventListener('click', function() {
    var y = document.getElementById("searchenginearraysize").value;
    alert("Making the array with the size of " + document.getElementById("searchenginearraysize").value * 1000000)
    fullarray(y, array);
    alert("Sorting the array")
    let t1 = performance.now();
    bubble_Sort(array);
    let t2 = performance.now();
    document.querySelector('.result1').style.display = 'block';
    document.querySelector('.result_time').innerHTML = (t2 - t1) / 1000
})

document.getElementById("btnanw2").addEventListener('click', () => {
    location.reload();
})