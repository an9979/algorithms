document.getElementById("btnq1").addEventListener("click", function() {
    if (document.getElementById("yesoption").checked == true) {
        document.getElementById("firstq").style.display = "none"
        document.getElementById("thirdq").style.display = "block"
        document.getElementById("btnq3").addEventListener("click", function() {
            //here we get the size of the graf from user
            let grafsize_byhuman = document.getElementById("grafsize_byhuman").value;
            document.getElementById("thirdq").style.display = "none"
            document.getElementById("secondq").style.display = "block"
            document.getElementById("btnq2").addEventListener("click", function() {
                if (document.getElementById("yesoption2").checked == true) {
                    // here we build the matrix by the computer(jahatdar) and calculate the floyed algoritm on it
                    document.getElementById("secondq").style.display = "none"
                    fill(true, parseInt(grafsize_byhuman))
                } else {
                    // here we build the matrix by the computer(bdon jahat) and calculate the floyed algoritm on it 
                    document.getElementById("secondq").style.display = "none"
                    fill(false, parseInt(grafsize_byhuman))
                }
            })
        })
    } else {
        document.getElementById("firstq").style.display = "none"
        document.getElementById("thirdq").style.display = "block"
        document.getElementById("btnq3").addEventListener("click", function() {
            //here we get the size of the graf from user
            let grafsize_byhuman = document.getElementById("grafsize_byhuman").value;

            document.getElementById("thirdq").style.display = "none"
            document.getElementById("secondq").style.display = "block"
            document.getElementById("btnq2").addEventListener("click", function() {
                if (document.getElementById("yesoption2").checked == true) {
                    document.getElementById("secondq").style.display = "none"
                    fill2(true, parseInt(grafsize_byhuman))
                } else {
                    document.getElementById("secondq").style.display = "none"
                    fill2(false, parseInt(grafsize_byhuman))
                }
            })
        })
    }
})

function floyd(array) {
    let len = array.length;
    alert("Finding the closeest routs")
    let t1 = performance.now();
    let array2 = new Array(len).fill().map(() => new Array(len).fill());
    for (let c = 0; c < array2.length; c++) {
        for (let v = 0; v < array2.length; v++) {
            if (c == v) {
                array2[c][v] = 0;
            } else {
                array2[c][v] = array[c][v]
            }
        }
    }
    let array3 = new Array(len).fill().map(() => new Array(len).fill());
    for (let i = 0; i < array3.length; i++) {
        for (let j = 0; j < array3.length; j++) {
            array3[i][j] = 0;
        }
    }
    for (let k = 0; k < array.length; k++) {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {
                if (array2[i][j] > array2[i][k] + array2[k][j] && i != j) {
                    array3[i][j] = k + 1;
                }
                array2[i][j] = Math.min(array2[i][j], array2[i][k] + array2[k][j])
            }
        }
    }
    let t2 = performance.now()

    document.getElementById("sixthq").style.display = 'block'
    document.getElementById("answer_time").innerHTML = t2 - t1 + "ms"
    console.log(array2);
    console.log(array3);
    document.getElementById("btnanw1").addEventListener('click', () => {
        document.getElementById("sixthq").style.display = 'none';
        document.getElementById("continue_data").style.display = 'block';
        document.getElementById("btnq6").addEventListener('click', () => {
            document.getElementById("continue_data").style.display = 'none';
            document.getElementById("answerdiv").style.display = 'block';
            document.getElementById("answer_1").innerHTML = document.getElementById("Q1select").value;
            document.getElementById("answer_2").innerHTML = document.getElementById("Q2select").value;
            if (parseInt(document.getElementById("Q1select").value) == parseInt(document.getElementById("Q2select").value)) {
                ocument.getElementById("same_check").style.display = 'block';
                document.getElementById("btnanw4").addEventListener('click', () => {
                    location.reload();
                })
            } else {
                let an1 = parseInt(document.getElementById("Q1select").value) - 1;
                let an2 = parseInt(document.getElementById("Q2select").value) - 1;
                document.getElementById("final_answer").innerHTML = array2[parseInt(document.getElementById("Q1select").value - 1)][parseInt(document.getElementById("Q2select").value - 1)]
                document.getElementById("answermat").style.display = 'block';
                console.log(an1 + 1);
                let v1 = document.getElementById("ansb")
                if (array3[an1][an2] == 0) {
                    console.log(an2 + 1);
                    let v6 = document.createTextNode((an1 + 1) + "->" + (an2 + 1));
                    v1.appendChild(v6)
                } else {
                    let an3 = an2;
                    let v4 = document.createTextNode((an1 + 1) + "->");
                    v1.appendChild(v4)
                    while (array3[an1][an2] != 0) {
                        an3 = array3[an1][an2]
                        console.log(an3);
                        an3 = an3 - 1;
                        an1 = an3;
                        if (array3[an1][an2] == 0) {
                            console.log(an2 + 1);
                            let v5 = document.createTextNode((an3 + 1) + "->" + (an2 + 1));
                            v1.appendChild(v5)
                        } else {
                            let v2 = document.createTextNode((an1 + 1) + "->" + (an3 + 1) + "->")
                            v1.appendChild(v2);
                        }
                    }
                }
                document.getElementById("btnanw4").addEventListener('click', () => {
                    location.reload();
                })
            }

        })
    })
    document.getElementById("btnanw2").addEventListener('click', () => {
        location.reload();
    })
}

function fill(jahat, n) {
    if (jahat == true) {
        let array = new Array(n).fill().map(() => new Array(n).fill());
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {
                if (i == j) {
                    array[i][j] = 0
                } else {
                    array[i][j] = Math.floor(Math.random() * 100)
                }
                if (array[i][j] >= 70 || array[i][j] == 0) {
                    if (i == j) {
                        array[i][j] = 0
                    } else {
                        array[i][j] = Infinity
                    }
                }
            }
        }
        islandcheck(array)
    } else {
        let array = new Array(n).fill().map(() => new Array(n).fill());
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {
                if (j >= i) {
                    if (i == j) {
                        array[i][j] = 0
                    } else {
                        array[i][j] = array[j][i] = Math.floor(Math.random() * 100)
                    }
                    if (array[i][j] >= 70 || array[i][j] == 0) {
                        if (i == j) {
                            array[i][j] = 0
                        } else {
                            array[i][j] = array[j][i] = Infinity
                        }
                    }
                }
            }
        }
        islandcheck(array)
    }
}

function fill2(jahat, n) {
    if (jahat == true) {
        let array = new Array(n).fill().map(() => new Array(n).fill());
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {
                if (i == j) {
                    array[i][j] = 0
                } else {
                    const btnq4 = document.getElementById("btnq4");
                    document.getElementById("fourthq").style.display = "block"
                    document.getElementById("grafnode_a").innerHTML = i;
                    document.getElementById("grafnode_b").innerHTML = j;

                    function name(i, j) {
                        btnq4.addEventListener("click", function() {
                            console.log("fuck");

                            if (document.getElementById("yesoption3").checked == true) {
                                document.getElementById("fourthq").style.display = "none"
                                document.getElementById("fithq").style.display = "block"
                                document.getElementById("btnq5").addEventListener("click", function() {
                                    array[i][j] = parseInt(document.getElementById("distance").value)
                                })
                            } else {
                                array[i][j] = Infinity;
                            }
                        })
                    }
                    name(i, j);
                }
            }
        }
        document.getElementById("fithq").style.display = "none"
        islandcheck(array)
    } else {
        let array = new Array(n).fill().map(() => new Array(n).fill());
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {
                if (j >= i) {
                    if (i == j) {
                        array[i][j] = 0
                    } else {
                        document.getElementById("fourthq").style.display = "block"
                        document.getElementById("grafnode_a").innerHTML = i;
                        document.getElementById("grafnode_b").innerHTML = j;
                        document.getElementById("btnq4").addEventListener("click", function() {
                            if (document.getElementById("yesoption3").checked == true) {
                                document.getElementById("fourthq").style.display = "none"
                                document.getElementById("fithq").style.display = "block"
                                document.getElementById("btnq5").addEventListener("click", function() {
                                    array[i][j] = array[j][i] = parseInt(document.getElementById("distance").value)
                                })
                            } else {
                                array[i][j] = array[j][i] = Infinity;
                            }
                        })
                    }
                }
            }
        }
        document.getElementById("fithq").style.display = "none"
        islandcheck(array)
    }
}

function islandcheck(array) {
    let x = 0;
    while (x < array.length) {
        let c = 0,
            b = 0;
        for (let index2 = 0; index2 < array.length; index2++) {
            if (array[x][index2] != Infinity) {
                c++
            }
            b++
        }
        if (c < 2) {
            if (x != b) {
                array[x][b] = Math.floor(Math.random() * 100)
            } else {
                array[x][b - 1] = Math.floor(Math.random() * 100)
            }
        }
        x++;
    }
    console.log(array);
    floyd(array)
}