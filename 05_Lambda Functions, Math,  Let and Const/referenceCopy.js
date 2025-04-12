
function constObjRefCopy() {
    const obj1 = {x : 22, y : 11};
    const obj2 = obj1;
    obj2.x = 100;
    obj2.y = 200;
    obj2.z = 400;
    console.log(obj1.x, obj1.y, obj1.z);
}

function letObjRefCopy() {
    const obj1 = {x : 22, y : 11};
    let obj2 = obj1;
    obj2 = {
        k : 33,
        l : 11
    }
    console.log(obj1.x, obj1.y, obj1.z);
}

constObjRefCopy();
letObjRefCopy();