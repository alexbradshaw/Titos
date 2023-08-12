.data

array: .word -1, 5, 6, 7, 10, -6,-5, 4, 9, 20

.text

main:
    li $t0, 0 # i variable
    li $t1, 10 # array length
    la $t2, array # array
    lw $t3, 0($t2)

    li $s0, 0 # positive counter
    li $s1, 0 # negative counter

loop:
    beq $t0, $t1, end
    bltz $t3, negative
    j positive

positive:
    addi $s0, $s0, 1
    j iterate
    
negative:
    addi $s1, $s1, 1
    j iterate

iterate:
    addi $t0, $t0, 1
    addi $t2, $t2, 4
    lw $t3, 0($t2)
    j loop

end: 
    li $v0, 10
    syscall