function returnSysData() {
    const today = new Date()
    const date = today.toLocaleDateString()
    return date
}

console.log(returnSysData())