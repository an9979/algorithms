function insertionsort(nums) {
    for (let i = 1; i < nums.length; i++) {
        let j = i - 1
        let temp = nums[i]
        while (j >= 0 && nums[j] > temp) {
            nums[j + 1] = nums[j]
            j--
        }
        nums[j + 1] = temp
    }
    console.log(nums);
    return nums;

}

function fullarray(e, array) {
    for (let index = 0; index < e * 10000; index++) {
        array[index] = Math.floor(Math.random() * (10000 * e))
    }
}
document.getElementById("btnid").addEventListener("click", () => {
    document.getElementById("form").style.display = "none"
    let array = [];
    let v1 = parseInt(document.getElementById("arraysizeform").value);
    alert("Building an array with a size of " + v1 * 10000)
    fullarray(v1, array);
    alert("Sorting an array with a size of " + v1 * 10000)
    let p1 = performance.now();
    insertionsort(array)
    let p2 = performance.now();
    document.getElementById("answerbox").style.display = "block"
    document.getElementById("antime").innerHTML = (p2 - p1) / 1000 + "seconds"
})
document.getElementById("btnanw2").addEventListener("click", () => {
    location.reload()
})