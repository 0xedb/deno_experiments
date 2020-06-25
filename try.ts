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

interface T_Node {
    readonly val : number;
    left? : T_Node;
    right? : T_Node;
    next? : T_Node;
}

interface BST {
    root: T_Node;
}

const u : Array<number> = [1, 2, 3, 5]
const v : ReadonlyArray<string> = ["bruno", "edoh", "james", "jane", "jack"]
u.push(100)
console.log(v.some(el => el.length === 4))

type Options = "this" | "that" | "none"

let mine : Options 
mine = "none"
console.log(mine)

let com : T_Node & BST;
com.val