function minmult(n, d) {
    let m = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));

    let i, j, k, L, q;
    for (i = 1; i < n; i++) {
        m[i][i] = 0;
    }
    for (L = 2; L <= n; L++) {
        for (i = 1; i <= n - L + 1; i++) {
            j = i + L - 1;
            m[i][j] = Infinity;
            for (k = i; k <= j - 1; k++) {
                q = m[i][k] + m[k + 1][j] + d[i - 1] * d[k] * d[j];
                if (q < m[i][j]) {
                    m[i][j] = q;
                }
            }
        }
    }
    document.getElementById("answ").innerHTML = (m[1][n]);
    document.getElementById("rdq").style.display = "block"

}
document.getElementById("btnstq").addEventListener("click", () => {
    document.getElementById("stq").style.display = "none"
    rnd();

})

function rnd() {
    let d = [];
    let t1 = parseInt(document.getElementById("stqfa").value)
    document.getElementById("nom").innerHTML = t1;

    for (let index = 0; index <= t1; index++) {
        d[index] = Math.floor(Math.random() * 10) + 1
    }
    let mat = []
    for (let index = 0; index < t1; index++) {
        mat[index] = [d[index], d[index + 1]]
    }
    console.log(mat);
    console.log(d);
    let t0 = performance.now()
    minmult(t1, d)
    let t2 = performance.now()
    document.getElementById("tt").innerHTML = (t2 - t0) / 1000;
    document.getElementById("btnanw1").addEventListener("click", () => {
        location.reload()
    })

}