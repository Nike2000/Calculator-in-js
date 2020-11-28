
// will add the value of button inside input text field
function calc(val) {
    let a = document.getElementById('values').value += val;
    let opr = ['+', '-', '/', '.', '*']

    let min_1 = a.charAt(a.length - 1);
    let min_2 = a.charAt(a.length - 2);
    let at_0 = a.charAt(0);

    // prevent from typing operators before operands - when empty
    if (at_0 == opr.find(op => { if (at_0 === op) return at_0 })) {
        document.getElementById('values').value = "";
    }

    // prevents from adding operators one after other, either same or different
    if(opr.includes(min_2)){
        if(opr.includes(min_1)){
            document.getElementById('values').value = a.slice(0, -1)
        }
    }
}

// will solve the equation inside input, when = is clicked
function solve() {
    let x = document.getElementById('values').value;
    let y = eval(x);
    document.getElementById('result').value = y;
}

// clears the input, when C is clicked
function clr() {
    document.getElementById('values').value = "";
    document.getElementById('result').value = "";
}