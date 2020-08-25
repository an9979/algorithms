function fib1(n) {
    if (n > 1) {
        return fib1(n - 1) + fib1(n - 2);
    } else {
        return 1;
    }
}

function fib2(n) {
    let array = [];
    array[0] = 1;
    if (n >= 1) {
        array[1] = 1;
        for (let index = 2; index <= n; index++) {
            array[index] = array[index - 1] + array[index - 2];
        }
    }
    return array[n]
}

let display = document.querySelector('.number')
let display2 = document.querySelector('.part2')

document.querySelector('#btn').addEventListener('click', function() {

    alert("Calculating the Fibbonatchi of " + document.querySelector('#fib_number').value)
    alert("Right Now We Are Calculating The Fibbonatchi Function Using Conquer Method")
    let t1 = performance.now();
    fib1(document.querySelector('#fib_number').value);
    let t2 = performance.now();
    alert("Right Now We Are Calculating The Fibbonatchi Function Using Dynamic Programming Method")
    let t3 = performance.now();
    let ans = fib2(document.querySelector('#fib_number').value);
    let t4 = performance.now();
    display.style.display = "none";
    display2.style.display = "block";
    document.querySelector(".ans_fib1").innerHTML = ans
    document.querySelector(".ans_fib2").innerHTML = ans
    document.querySelector('#fib1time').innerHTML = (t2 - t1) / 1000;
    document.querySelector('#fib2time').innerHTML = (t4 - t3) / 1000;
});
document.getElementById("btnanw2").addEventListener('click', () => {
    location.reload();
})