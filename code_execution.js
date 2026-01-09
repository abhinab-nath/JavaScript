/*
JS Execution context (how js runs the file)
    -> global execution context (this)
    -> functional execution context
    -> Eval execution context

Runs in two phases: 
    -> memory creation phase
    -> execution phase

*/

let val1 = 10
let val2 = 5
function addnum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addnum(val1, val2)
let result2 = addnum(10,2)

/*
Steps:
    -> Global execution - this

    -> Memory phase
        val1 -> undefined
        val2 -> undefined
        addnum -> defination
        result1 -> undefined
        result2 -> undefined

    -> Execution phase
        val1 <- 10
        val2 <- 5
        addnum -> [ new variable env + execution thread ] ->> delete, after completion
                            memory phase:-
                                val1 -> undefined
                                val2 -> undefined
                                total -> undefined
                            execution phase:-
                                num1 -> 10
                                num2 -> 5
                                total -> 15 -----> returned to golobal
        result1 = 15
        result2 =
                -> again [ nve + therad]
                            memory phase 
                            execution phase

*/