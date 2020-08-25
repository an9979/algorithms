function secondway(n, k) {
    if (n >= k) {
        if (n == 0 || k == 0) {
            return 1;
        } else {
            return secondway(n - 1, k - 1) + secondway(n - 1, k);
        }
    }
}

function thirdway(n, k) {
    let mat = new Array(n + 1).fill().map(() => new Array(k).fill());
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= Math.min(i, k); j++) {
            if (j == 0 || i == j) {
                mat[i][j] = 1;
            } else {
                mat[i][j] = mat[i - 1][j - 1] + mat[i - 1][j];
            }
        }
    }
    return mat[n][k];
}
let btn = document.getElementById("btn1");
btn.addEventListener('click', function() {
    var n = parseInt(document.getElementById("indexofn").value);
    var k = parseInt(document.getElementById("indexofk").value);
    let n1 = document.getElementById("indexofn").value;
    let k1 = document.getElementById("indexofk").value;
    alert("Right Now We Are Calculating The Newton Dual Function Using Conquer Method")
    let t2 = performance.now();
    secondway(n1, k1);
    let t3 = performance.now();
    alert("Right Now We Are Calculating The Newton Dual Function Using Dynamic Programming Method")
    let t4 = performance.now();
    let an2 = thirdway(n, k)
    let t5 = performance.now();
    document.querySelector("#numberialanswernumber").innerHTML = an2;
    document.querySelector("#secondwayanswer").innerHTML = t3 - t2 + "   ms";
    document.querySelector("#thirdwayanswer").innerHTML = t5 - t4 + "    ms";
    document.querySelector('main').style.display = "none"
    document.querySelector('.answer').style.display = "block"

})
document.getElementById("btnanw2").addEventListener('click', () => {
    location.reload();
})