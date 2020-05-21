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

const virus : any = "CorOna"

console.log((<string>virus).toUpperCase())
console.log((virus as string).toLocaleUpperCase())

interface Node {
    readonly val : number;
    left? : Node;
    right? : Node;
    next? : Node;
}

interface BST {
    root: Node;
}