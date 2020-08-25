function multiply(num1, num2) {
    let len1 = Array.from(num1).length;
    let len2 = Array.from(num2).length;
    if (len1 == 0 || len2 == 0) {
        return "0";
    }
    let result = [];
    let i_n1 = 0;
    let i_n2 = 0;

    for (let i = len1 - 1; i >= 0; i--) {
        let carry = 0;
        let n1 = num1.charAt(i) - '0';
        i_n2 = 0;
        for (let j = len2 - 1; j >= 0; j--) {
            result[i_n1 + i_n2] = 0
            let n2 = num2.charAt(j) - '0';
            let sum = n1 * n2 + result[i_n1 + i_n2] + carry;
            carry = Math.floor(sum / 10);
            result[i_n1 + i_n2] = sum % 10;
            i_n2++;
        }
        if (carry > 0)
            result[i_n1 + i_n2] += carry;
        i_n1++;
    }
    let i = result.length - 1;
    while (i >= 0 && result[i] == 0) { i--; }
    if (i == -1) { return "0"; }
    let s = "";
    while (i >= 0) { s += (result[i--]); }
    console.log(s);


}
document.getElementById("btnanw1").addEventListener("click", () => {
    let t1 = document.getElementById("multyA").value;
    let t2 = document.getElementById("multyB").value
    multiply(t1, t2)
})