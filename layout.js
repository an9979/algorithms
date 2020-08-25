function mergesort_machine(n, array) {
    let h = Math.floor(n / 2)
    let m = n - h;
    let u = [],
        v = []
    if (n > 1) {
        for (let index = 0; index < h; index++) {
            u[index] = array[index];

        }
        for (let index = 0; index < m; index++) {
            v[index] = array[index + h];

        }
        mergesort_machine(u.length, u);
        mergesort_machine(v.length, v);
        mergesort_engine(u, v, array)
    }
}

function mergesort_engine(u, v, array) {
    let i = 0,
        j = 0,
        k = 0;
    while (i < u.length && j < v.length) {
        if (u[i] <= v[j]) {
            array[k] = u[i];
            i++;
            k++;
        } else {
            array[k + 1] = array[k]
            array[k] = v[j];
            j++;
            k++;
        }
    }
    if (i > u.length && j < v.length) {
        for (j; j < v.length; j++) {
            array[k] = v[j];
            k++;
        }
    }
    if (i < u.length && j > v.length) {
        for (i; i < u.length; i++) {
            array[k] = u[i];
            k++;
        }
    }
}
let array2 = [1, 5, 4, 2, 3, 4];
mergesort_machine(array2.length, array2)
console.log(array2);
var title = document.querySelector('#h22')
let title = document.querySelector('#searchenginenumber').value;
let test = document.querySelector('#btn');
test.addEventListener('click', function() {
    console.log(title)
});