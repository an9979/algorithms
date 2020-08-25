// //document.getElementById("btn1").addEventListener("click",()=>{
// document.getElementById("btn1").addEventListener("click", () => {
//     function setup() {
//         createCanvas(1260, 800);
//         popsize = 10;
//         population = [];
//         sz = parseInt(document.getElementById("btn2").value);
//         var vert = [];
//         for (var j = 0; j < sz; j++) {
//             v = createVector(random(40, width - 40), random(40, height - 40));
//             vert.push(v);
//         }
//         for (var i = 0; i < popsize; i++) {
//             population.push(shuffle(vert));
//         }
//         poolsize = sz * 20;
//         av = (width + height) * sz / 4;

//         frame = 0;
//     }

//     function draw() {
//         background(50);
//         showbest();
//         p = pool();
//         reproduce(p);
//         frame++;
//         text(frame, 20, 20);
//         av *= 0.993;
//     }

//     function pathlength(s) {
//         var pl = 0;
//         for (var i = 0; i < sz; i++) {
//             var d1 = s[i].dist(s[(i + 1) % sz]);
//             pl += d1;
//         }
//         return pl
//     }

//     function fitness(s) {
//         return max(av - pathlength(s), 0);
//     }

//     function showbest() {
//         var best = 0;
//         var bestf = 0;
//         for (var i = 0; i < popsize; i++) {
//             var curf = fitness(population[i]);
//             if (curf > bestf) {
//                 bestf = curf;
//                 best = i;
//             }
//         }
//         beginShape();
//         for (var i = 0; i < sz; i++) {
//             vertex(population[best][i].x, population[best][i].y);
//             fill(255);
//             noStroke();
//             ellipse(population[best][i].x, population[best][i].y, 8, 8);
//         }
//         noFill();
//         stroke(255);
//         strokeWeight(2);
//         endShape(CLOSE);
//         textSize(25);
//         text(pathlength(population[best]), 160, 20);
//         if (fitness(population[best]) < 90) {
//             av *= 1.03;
//         }
//     }

//     function mutate(s) {
//         var mut = s;
//         var k = random();
//         while (k < 0.23) {
//             var i = 0;
//             var j = 0;
//             while (i - j < 2) {
//                 i = floor(random(sz));
//                 j = floor(random(sz));
//                 d1 = mut[i].dist(mut[(i + 1) % sz]) + mut[j].dist(mut[(j + 1) % sz]);
//                 d2 = mut[i].dist(mut[j]) + mut[(i + 1) % sz].dist(mut[(j + 1) % sz]);
//             }

//             m = mut.slice(Math.min((i + 1) % sz, (j + 1) % sz), Math.max((i + 1) % sz, (j + 1) % sz)).reverse();
//             l = mut.slice(0, Math.min((i + 1) % sz, (j + 1) % sz));
//             r = mut.slice(Math.max((i + 1) % sz, (j + 1) % sz), sz);
//             mut = l.concat(m).concat(r);

//             k = random();
//         }
//         return mut;
//     }

//     function pool() {
//         var p = [];
//         var sum = 0;
//         for (var i = 0; i < popsize; i++) {
//             sum += fitness(population[i]);
//         }
//         for (var i = 0; i < popsize; i++) {
//             var n = fitness(population[i]) / sum * poolsize;
//             for (var j = 0; j < n; j++) {
//                 p.push(population[i]);
//             }
//         }
//         return p;
//     }

//     function reproduce(p) {
//         population = [];
//         for (var i = 0; i < popsize; i++) {
//             path = mutate(random(p));
//             population.push(path);
//         }

//     }

})

function subset(arra, arra_size) {
    var result_set = [],
        result;


    for (var x = 0; x < Math.pow(2, arra.length); x++) {
        result = [];
        i = arra.length - 1;
        do {
            if ((x & (1 << i)) !== 0) {
                result.push(arra[i]);
            }
        } while (i--);

        if (result.length >= arra_size) {
            result_set.push(result);
        }
    }

    return result_set;
}

console.log(subset([1, 2, 3], 0));