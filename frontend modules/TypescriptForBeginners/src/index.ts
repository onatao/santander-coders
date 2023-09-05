type Hero = { 
    name: string
    nickname: string
}

console.log("Testing TS..")

function printObject(person: Hero) {
    console.log(person.name)
}

printObject({
    name: "Nathan",
    nickname: "Neithan"
})