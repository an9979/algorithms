function prim2(array) {
    let dist;
    let visited = [];
    let u = 0;
    let v = 0;
    let total = 0;
    let k = [];
    for (let j = 0; j < array.length; j++) {
        visited[j] = 0;
    }
    visited[0] = 1
    for (let counter = 0; counter < array.length - 1; counter++) {
        dist = Infinity
        for (let i = 0; i < array.length; i++) {
            if (visited[i] == 1) {
                for (let j = 0; j < array.length; j++) {
                    if (visited[j] != 1) {
                        if (dist > array[i][j]) {
                            dist = array[i][j];
                            v = i;
                            u = j;
                        }
                    }
                }
            }
        }
        visited[u] = 1
        visited[v] = 1
        total += dist;
        let v1 = document.getElementById("ansb")
        let v2 = document.createTextNode(v + "->" + u + ": Weight:" + dist)
        let v3 = document.createElement("br")
        v1.appendChild(v2);
        v1.appendChild(v3);
        k[counter] = [v, u, dist]
    }
    console.log(total);
}

function kruskal(array) {
    let dist;
    let parent = [];
    let noe = 1;
    let u = 0;
    let v = 0;
    let total = 0;
    for (let j = 0; j < array.length; j++) {
        parent[j] = 0;
    }
    while (noe < array.length) {
        dist = Infinity;
        for (let i = 0; i < array.length; i++) {
            for (let j = i + 1; j < array.length; j++) {
                if (dist > array[i][j]) {
                    dist = array[i][j];
                    u = i;
                    v = j;
                }
            }
        }
        while (parent[u] != 0) {
            u = parent[u];
        }
        while (parent[v] != 0) {
            v = parent[v];
        }
        if (v != u) {
            noe++;
            console.log("Edge Founded From" + u + "->" + v + "::" + dist);
            total = dist + total;
            // parent[u] = v
        }
        array[u][v] = array[v][u] = Infinity
    }
    console.log(total);

}

function newFunction(n) {
    let array = new Array(n).fill().map(() => new Array(n).fill());
    for (let index = 0; index < n; index++) {
        for (let index2 = index; index2 < n; index2++) {
            if (index == index2) {
                array[index][index2] = Infinity;
            } else {
                array[index][index2] = array[index2][index] = Math.floor(Math.random() * 100 + 1);
            }
        }
    }
    console.log(array);
}

function fullarray(e, array) {
    for (let index = 0; index < e * 100; index++) {
        for (let index2 = index; index2 < e * 100; index2++) {
            if (index == index2) {
                array[index][index2] = Infinity;
            } else {
                array[index][index2] = array[index2][index] = Math.floor(Math.random() * 1000 + 1);
            }
        }
    }
}
document.getElementById("btnid").addEventListener("click", () => {
    document.getElementById("form").style.display = "none"
    let v1 = parseInt(document.getElementById("arraysizeform").value);
    let array = new Array(v1 * 100).fill().map(() => new Array(v1 * 100).fill());
    alert("Building an array with a size of " + v1 * 100)
    fullarray(v1, array);
    alert("Finding The minimal spining Tree in an array with a size of " + v1 * 100 + " with PRIM Algoritm")
    let p1 = performance.now();
    prim2(array);
    let p12 = performance.now();
    alert("Finding The minimal spining Tree in an array with a size of " + v1 * 100 + " with Kruskal Algoritm")
    let p2 = performance.now();
    kruskal(array);
    let p3 = performance.now();
    document.getElementById("answerbox").style.display = "block"
    document.getElementById("antime").innerHTML = (p12 - p1) / 1000 + "seconds"
    document.getElementById("antime2").innerHTML = (p3 - p2) / 1000 + "seconds"

})
document.getElementById("btnanw2").addEventListener("click", () => {
    location.reload()
})