console.log("Deno here")

enum Stages {
    AMATEAUR = 101,
    PRO,
    LEGEND
}

const names : Array<[string, number]> = [
    ["bruno", 1],
    ["edoh", 13],
    ["anon", 20]
]

names.forEach(el => console.log(el[0]))