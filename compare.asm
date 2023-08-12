.text

main:
    li $f6, 3.2
    li $f8, 3.5

    c.lt.s $f6, $f8
    bc1t less

    j more

less:
    li $s1, 1
    j end

more:
    li $s1, 0
    j end

end: 
    li $v0, 10
    syscall