function mergeSort(arr) {
    var len = arr.length;
    if (len < 2) {
        return arr;
    }
    var mid = Math.floor(len / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    var result = [],
        lLen = left.length,
        rLen = right.length,
        l = 0,
        r = 0;
    while (l < lLen && r < rLen) {
        if (left[l] < right[r]) {
            result.push(left[l++]);
        } else {
            result.push(right[r++]);
        }
    }
    return result.concat(left.slice(l)).concat(right.slice(r));
}

function fullarray(e, array) {
    for (let index = 0; index < e * 1000000; index++) {
        array[index] = Math.floor(Math.random() * (1000000 * e))
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
    array = mergeSort(array);
    let t2 = performance.now();
    document.querySelector('.result1').style.display = 'block';
    document.querySelector('.result_time').innerHTML = (t2 - t1) / 1000;
})
document.getElementById("btnanw2").addEventListener('click', () => {
    location.reload();
})