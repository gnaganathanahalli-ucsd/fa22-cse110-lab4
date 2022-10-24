Part 2. A Little More of a Challenge...
---
---


__1. What will happen at line 12 and why? If the code causes an error, explain why.__
   
Answer: When we declare the variable "i", we use "var" which means there is scope outside of the for loop. Therefore, we are able to see the value of "i" by printing it to the console. The value is 3 because prices.length goes from 0 till 2, but when it reaches the 3 the for loop stops so the value of "i" that is printed in line 12 is 3.
```
3
```
__2. What will happen at line 13 and why? If the code causes an error, explain why.__
   
Answer: The last value of discountedPrice in the for loop is 150 so that is what is output at line 13. When variable i is 0, discountedPrice is 50. When variable i is 1, discountedPrice is 100. When i is 2, discountedPrice is 150. Therefore, when printing to the console in line 13, it would be the last value of discountedPrice which is 150.
```
150
```
__3. What will happen at line 14 and why? If the code causes an error, explain why.__
   
Answer: The variable finalPrice printed to the console in line 14 is the last value of the variable after the for loop. When variable i is 0, finalPrice is 50. When variable i is 1, finalPrice is 100. When variable i is 2, finalPrice is 150. Therefore, when printing to the console after the for loop, the variable finalPrice will be 150.
```
150
```
__4. What will this function return? Give a brief explanation why. If the code causes an error, explain why.__
   
Answer: On the console, there is nothing that is displayed. However, this function returns the array of discounted final Prices. For instance, the variable discounted is [50,100,150] and that is what is returned by the function.

__5. What will happen at line 12 and why?  If the code causes an error, explain why.(assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).__

Answer: In line 12, we run into a ReferenceError because we use "let" declaration when defining the variable i. Therefore, it has block scope only within the for loop. When trying to print to the console outside of the loop, the variable i is not defined.
```
Reference Error 
```
__6. What will happen at line 13 and why? If the code causes an error, explain why.__
   
Answer: In line 13, we run into another ReferenceError because of the "let" declaration. The variable discountedPrice is defined with let which has block scope with the for loop. Therefore, when trying to print to the console outside the for loop, there is no variable discountedPrice that is defined.
```
Reference Error
```
__7. What will happen at line 14 and why? If the code causes an error, explain why.__
   
Answer: In line 14, we get that the final finalPrice value is 150. However, this doesn't cause a ReferenceError even though finalPrice uses a let declaration because the block scope of the variable is the entire function. In comparison, variables i and discountedPrice were defined within the for loop so their block scope was only inside the for loop. Since finalPrice is defined outside the for loop, we are able to print it to the console and see the final value in that variable.
```
150
```

__8. What will this function return? Give a brief explanation. If the code causes an error, explain why.__
   
Answer: On the console, there is nothing that is displayed. However, this function returns the array of discounted final Prices. Since the let declaration for the variable discounted has the block scope for the full function discountPrices, discounted is [50,100,150] and that is what is returned by the function.
   
__9. What will happen at line 11 and why? If the code causes an error, explain why.__
    
Answer: There is a reference error because there is no reference to i in line 11. Since we use a let declaration for variable i, the block scope of i end within the for loop. Therefore, when trying to print i to the console, there is no reference to i as it isn't defined outside of the for loop.
```
Reference Error
```
__10. What will happen at line 12 and why? If the code causes an error, explain why.__
    
Answer: In line 12, we are printing the length of prices which is constant. The input of prices is [100,200,300]; therefore, the length of prices is 3.
```
3
```
__11. What will this function return? Give a brief explanation. If the code causes an error, explain why.__

Answer: On the console, there is nothing that is displayed. However, this function returns the array of discounted final Prices. The variable discounted is [50,100,150] and that is what is returned for this function.
    
___Data Types___

__12. Given the above Object, write the notation for:__ 
    
__(A) Accessing the value of the name property in the student object__

Answer: 
```
student.name
```

__(B) Accessing the value of the Grad Year property in the student object__

Answer: 
```
student["Grad Year"]
```

__(C) Calling the function for the greeting property in the student object__

Answer: 
```
student.greeting()
```

__(D) Accessing the name property of the object in the Favorite Teacher property in student__

Answer:
```
student["Favorite Teacher"].name
```
    
__(E) Access index zero in the array of the courseLoad property of the student object__

Answer: 
```
student.courseLoad[0]
```

___Basic Operators & Type Conversion___

__13. Arithmetic__

__(A) ‘3’ + 2__

Answer: String '3' is concateted with number 2 to become string 32.
```
32
```

__(B) ‘3’ - 2__

Answer: String '3' becomes number 3 so 3-2 is 1.
```
1
```

__(C) 3 + null__

Answer: Mathematical addition of number 3 with null is just the number itself which is 3
```
3
```

__(D) ‘3’ + null__

Answer: String '3' is concatenated with string 'null'.
```
3null
```

__(E) true + 3__

Answer: Numerical value of true is 1 so 1+3 is 4.
```
4
```

__(F) false + null__

Answer: Numerical value of false is 0 and null is nothing so output is 0.
```
0
```

__(G) '3' + undefined__

Answer: String '3' is concatenated with string 'undefined'.

```
3undefined
```

__(H)  '3' - undefined__

Answer: You can't subtract two strings as the result is not a number because undefined can't be written as a number.
```
Nan
```

__14. Comparison__
    
__(A) ‘2’ > 1__

Answer: string '2' becomes number 2 so 2 is greater than 1
```
true
```

__(B) ‘2’ < ‘12’__

Answer: The first character '2' is larger than the first character '1'; thus, '2' < '12' is false.
```
false
```

__(C) 2 == ‘2’__

Answer: string '2' becomes number 2 so 2 == 2 is true.
```
true
```

__(D) 2 === ‘2’__

Answer: The "===" checks data types as well so the data types don't match here as there is a number 2 and a string '2'.
```
false
```

__(E) true == 2__

Answer: The numerical value for true is 1 so 1 != 2.
```
false
```

__(F) true === Boolean(2)__

Answer: Boolean(2) is true and they are both of the same data type of booleans so true equals true.
```
true
```

__15.Explain the difference between the == and === operators.__
    
Answer: In JavaScript, we use "==" to compare two variables without taking the datatype into account. When "===" is used, two variables are compared and their values and data types are checked by the operator.

___Loops___

__16.  Given the above Object, write a for...in loop that will iterate through it and print out the value of the property if the property starts with the letter r, or if the value of that property is an odd number.  (This should be in a JS file part2-question16.js)__

Answer: part2-question16.js

___Functions___

__17.  If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your part2.md). Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavily in frontend JS development.__

Answer: The array [1,2,3] goes in as the parameter array and the callback parameter is function doSomething. While looping through the array, we calculate a new value in doSomething which is current value * 2. This newly calculated value is appended to the new Arr. After going through the array parameter, the new arr is returned.
```
[2,4,6]
```


___setInterval(), setTimeout(), clearTimeout()___

__18.  The above program only prints out the time once when executed. Modify this code such that the program prints out the time every second.  (This should be a JS file - part2-question18.js)__

Answer: part2-question18.js

__19.  What is the output of the above code? (This should be in your part2.md)__

Answer: 
```
1
4
3
2
```



