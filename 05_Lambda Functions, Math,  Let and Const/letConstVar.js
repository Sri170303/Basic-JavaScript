function letAssignment() {
    let x = 22;
    console.log(x);
    x = "Sandhya";
    console.log(x);
}

function constAssignment() {
    const x = 22;
    console.log(x);
    x = "Sandhya";
    console.log(x);
}


function constObjAssignment() {
    const obj = {x : 22, y : 11};
    obj.x = 100;
    obj.y = 200;
    obj.z = 400;
    console.log(obj.x, obj.y, obj.z);
}

letAssignment();
// constAssignment();
constObjAssignment();