const obj1 = {
    func1 : function f() {
        return {
            func2 : function g(x) {
                return x + x
            }
        }
    }
}

console.log(obj1.func1().func2(10))

