Part 1: A Quick Introduction
---
---


Section 1: var declaration

1. __What is printed by line 9? If the code returns an error, explain why.__
   Answer:  
   ```
   values added: 20 
   ```

2. __What is printed by line 13? If the code returns an error, explain why.__ 
    Answer:
     ```
     final result: 20 
     ```


Section 2: let declaration

1. __What is printed by line 9? If the code returns an error, explain why.__
    Answer:
    ```
    values added: 20
    ```
2. __What is printed by line 13? If the code returns an error, explain why.__
    Answer: The code returns a ReferenceError: result is not defined. The variable result is declared within the scope of the if statement - block scope. Therefore, outside of the if-else statement, result hasn't been declared so there is a reference error.

Section 3: const declaration

1. __What is printed by line 9? If the code returns an error, explain why.__
    Answer: The code returns an error by line 9 because the 
    variable result is a const which means that it can't be reassigned after it has been assigned the first time. It is assigned to 0 the first time and line 8 tries to reassign in to the sum of num1 and num2 which causes a TypeError.
    
2. __What is printed by line 13? If the code returns an error, explain why.__
    Answer: The code returns an error because const had the same block scope that "let" has. Since result is assigned within the if statement, there would be a reference error to reference result by line 13.