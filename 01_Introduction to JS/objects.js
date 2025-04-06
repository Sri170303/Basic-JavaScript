const user = {
    username : "Sri Darsan Sah",
    email : "sridarsan@gmail.com",
    address : {
        city : "Silchar",
        state: "Assam"
    },
    phone : [961234560, 9123456780]
}

console.log(user.address)
console.log(user["address"])
console.log(user.address.state)
console.log(user["address"]["state"])

user["phone"][0] = 9876543210

console.log(user)

const user_copy = user

user_copy['username'] = "Jammy"

console.log(user)

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))
console.log(user.hasOwnProperty('address'))
console.log(user.hasOwnProperty('isAdmin'))