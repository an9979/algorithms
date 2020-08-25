function binarysearch_machine(find_x, array, lowpoint, highpoint) {
    if (highpoint >= lowpoint) {
        var mid = Math.floor((lowpoint + highpoint) / 2);
        if (find_x == array[mid]) {
            document.querySelector(".result1").style.display = "block";
            document.querySelector("#result_found").style.display = "block";
        } else if (find_x < array[mid]) {
            return binarysearch_machine(find_x, array, lowpoint, mid - 1);
        } else {
            return binarysearch_machine(find_x, array, mid + 1, highpoint);
        }
    } else {
        document.querySelector(".result1").style.display = "block";
        document.querySelector("#result_not_found").style.display = "block";
    }
}

function binarysearch_engine(find_x, array) {
    let lowpoint = 0;
    let highpoint = array.length;
    return binarysearch_machine(find_x, array, lowpoint, highpoint);
}

function swap(items, firstIndex, secondIndex) {
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)],
        i = left,
        j = right;
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}

function fullarray(e, array) {
    for (let index = 0; index < e * 1000000; index++) {
        array[index] = Math.floor(Math.random() * (1000000 * e));
    }
}
let array = [];

let test = document.querySelector("#btn");
let test1 = document.querySelector("main");
let test4 = document.querySelector("#result_found");
test.addEventListener("click", function() {
    test1.style.visibility = "hidden";
});
test.addEventListener("click", function() {
    var x = document.getElementById("searchenginenumber").value;
    var y = document.getElementById("searchenginearraysize").value;
    var t1 = performance.now();
    alert(
        "Making the array with the size of " +
        document.getElementById("searchenginearraysize").value * 1000000
    );
    fullarray(y, array);
    var t2 = performance.now();
    quickSort(array, 0, array.length - 1);
    alert("Sorting the array");
    var t3 = performance.now();
    binarysearch_engine(x, array);
    var t4 = performance.now();
    document.querySelector(".result_time").innerHTML = t4 - t3 + "  S";
    document.querySelector(".result1").style.display = "block";
});
document.getElementById("btnanw2").addEventListener("click", () => {
    location.reload();
});