.data
    prompt: .asciiz "Enter number to search: "
    array: .word 12, 55, 6, 3, 2, 4, 8, 10, 22, 34, 102, 1, 0, 9, 88, 65, 69, 33, 43, 66
.text
main:
    li $t3, 0 # i
    la $t2, array # load array
    li $t4, 20 # array length

    li $v0, 4 # syscall for print text
    la $a0, prompt # load prompt
    syscall

    li $v0, 5 # user input for int
    syscall
    move $s0, $v0 # move input to s0 var

    li $a0, -1 # initialize a0 as -1

    lw $t1, 0($t2) # load initial int

    j loop # enter loop

loop:
    beq $s0, $t1, found # call function if user input is equal to current
    bne $t3, $t4, increaseI # increase I if not equal to array length
    j endProgram # end program if other two calls fail

increaseI:
    addi $t3, $t3, 1 # increase i
    addi $t2, $t2, 4 # iterate array
    lw $t1, 0($t2) # load next int
    j loop # call loop again

found:
    move $a0, $t3 # load i into memory

endProgram:
    li $v0, 1 # syscall for print number
    syscall

    li $v0, 10 # exit
    syscall