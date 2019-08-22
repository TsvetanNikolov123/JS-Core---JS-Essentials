
## 03. Lab: Syntax, Functions and Statements

---
---

Problems for in-class lab for the ["JavaScript Essentials" course \@
SoftUni](https://softuni.bg/courses/js-essentials). Submit your solutions in the
SoftUni judge system at
<https://judge.softuni.bg/Contests/1421/Lab-JavaScript-Syntax-and-Operators>.

---

### 03.01 String Length

Write a JS function that takes **three string arguments** as an input.

Calculate the **sum** of the **length** of the **strings** and the **average
length** of the strings **rounded down** to the nearest integer.

The **input** comes as **three string arguments** passed to your function.

The **output** should be printed on the console on two lines.

**Examples**

| **Input**                        | **Output** |
|----------------------------------|------------|
| 'chocolate', 'ice cream', 'cake' | 22 7       |

| **Input**                        | **Output** |
|----------------------------------|------------|
| 'pasta', '5', '22.3'             | 10 3       |

<br/>

#### Solution: <a title="01 String Length" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/blob/master/03%20Syntax%20Functions%20And%20Statements/01.StringLenght.js">01 String Length</a>

---

### 03.02 Math Operations

Write a JS function that takes **two numbers** and **a string** as an input.

The string may be one of the following: '**+**', '**-**', '**\***', '**/**',
'**%**', '**\*\***'.

Print on the console the result of the mathematical **operation** between **both
numbers** and the **operator** you receive as a string.

The **input** comes as **two numbers** and **a string argument** passed to your
function.

The **output** should be printed on the console.

**Examples**

| **Input** | **Output** |   
|-----------|------------|   
| 5, 6, '+' | 11         |   

| **Input**    | **Output** |
|--------------|------------|
| 3, 5.5, '\*' | 16.5       |

<br/>

#### Solution: <a title="02 Math Operations" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/tree/master/03%20Syntax%20Functions%20And%20Statements/02.MathOperations.js">02 Math Operations</a>

---

### 03.03 Sum of Numbers N…M

Write a JS function that takes two numbers **n** and **m** as an input and
**prints the sum** of all numbers from **n** to **m**.

The **input** comes as **two string elements** that need to be **parsed** as
numbers.

The **output** should **return** the **sum**.

**Examples**

| **Input** | **Output** |
|-----------|------------|
| '1', '5'  | 15         |

| **Input** | **Output** |
|-----------|------------|
| '-8', 20' | 174        |

<br/>

#### Solution: <a title="03 Sum of Numbers N…M" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/tree/master/03%20Syntax%20Functions%20And%20Statements/03.SumOfNumbersNToM.js">03 Sum of Numbers N…M</a>

---

### 03.04 Largest Number

Write a function that takes **three number arguments** as an input and find the
**largest** of them. Print the following text on the console: '**The largest
number is {number}.**'.

The **input** comes as **three number arguments** passed to your function.

The **output** should be printed to the console.

**Example**

| **Input**      | **Output**                |
|----------------|---------------------------|
| 5, -3, 16      | The largest number is 16. |

| **Input**      | **Output**                |
|----------------|---------------------------|
| \-3, -5, -22.5 | The largest number is -3. |

<br/>

#### Solution: <a title="04 Largest Number" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/tree/master/03%20Syntax%20Functions%20And%20Statements/04.LargestNumber.js">04 Largest Number</a>

---

### 03.05 Circle Area

Write a function that takes **a single argument** as an input.

**Check the type** of the input argument. If it is a **number**, assume it is
the radius of a circle and **calculate the circle area**. Print the **area
rounded** to **two decimal places**.

If the argument type is **NOT** a number, print the following text on the
console:  
'**We cannot calculate the circle area, because we receive a {type of
argument}.**'

The **input** comes as a **single argument** passed to your function.

The **output** should be printed on the console.

**Example**

| **Input** | **Output** |   
|:-----------:|:------------:| 
| 5        | 78.54      |   

| **Input** | **Output** | 
|:-----------:|:------------:|  
| 'name'    | We can not calculate the circle area, because we receive a string. |

<br/>

#### Solution: <a title="05 Circle Area" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/tree/master/03%20Syntax%20Functions%20And%20Statements/05.CircleArea.js">05 Circle Area</a>

---

### 03.06 Square of Stars

Write a function that **prints a rectangle** made of **stars** with variable
**size**, depending on an input parameter. If there is **no parameter**
specified, the rectangle should **always** be of **size 5**. Look at the
examples to get an idea.

The **input** comes as a single **number** argument.

The **output** is a series of lines printed on the console, forming a rectangle
of variable size.

**Examples**

| **Input** | **Output** |   
|-----------|------------|   
| 1         | \*         |   

| **Input** | **Output** |
|-----------|------------|
| 2         | \*\* <br/> \*\*  |

| **Input** | **Output**                                             |   
|-----------|--------------------------------------------------------|   
| 5         | \*\*\*\*\* <br/> \*\*\*\*\* <br/> \*\*\*\*\* <br/> \*\*\*\*\* <br/> \*\*\*\*\* |   


| **Input** | **Output**                                             |
|-----------|--------------------------------------------------------|
|           | \*\*\*\*\* <br/> \*\*\*\*\* <br/> \*\*\*\*\* <br/> \*\*\*\*\* <br/> \*\*\*\*\* |

<br/>

#### Solution 1: <a title="06 Square of Stars" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/tree/master/03%20Syntax%20Functions%20And%20Statements/06.SquareOfStars.js">06 Square of Stars</a>
#### Solution 2: <a title="06 Square of Stars" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/tree/master/03%20Syntax%20Functions%20And%20Statements/06.01.SquareOfStars.js">06 Square of Stars</a>

---

### 03.07 Day of Week


Write a function that prints a number between 1 and 7 when a **day of the week**
is passed to it as a string and an **error message** if the string is **not
recognized**.

The **input** comes as a single string argument.

The **output** should be returned as a result.

**Examples**

| **Input** | **Output** |   
|-----------|------------|   
| Monday    | 1          |   

| **Input** | **Output** |   
|-----------|------------|   
| Friday    | 5          |   

| **Input** | **Output** |
|-----------|------------|
| Invalid   | error      |

<br/>

#### Solution: <a title="07 Day of Week" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/tree/master/03%20Syntax%20Functions%20And%20Statements/07.DayOfWeek.js">07 Day of Week</a>

---

### 03.08 Functional Calculator


Write a program that receives **two numbers** and an **operator** and performs a
calculation between the variables, using the operator. Store the different
functions in variables and pass them to your calculator.

The **input** comes as three arguments - two numbers, and a string, representing
the operator.

The **output** should be printed on the console.

**Examples**

| **Input** | **Output** |   | **Input** | **Output** |   | **Input**    | **Output** |
|-----------|------------|---|-----------|------------|---|--------------|------------|
| 2, 4, '+' | 6          |   | 3, 3, '/' | 1          |   | 18, -1, '\*' | \-18       |

<br/>

#### Solution: <a title="08 Functional Calculator" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/tree/master/03%20Syntax%20Functions%20And%20Statements/08.FunctionalCalculator.js">08 Functional Calculator</a>

---

### 03.09 Aggregate Elements

Write a program that performs different operations on an array of elements.
Implement the following operations:

-   **Sum(ai)** - calculates the sum all elements from the input array

-   **Sum(1/ai)** - calculates the sum of the inverse values (1/ai) of all
    elements from the array

-   **Concat(ai)** - concatenates the string representations of all elements
    from the array

The **input** comes as an array of number elements.

The **output** should be printed on the console on a new line for each of the
operations.

**Examples**

| **Input** | **Output**   |   | **Input**     | **Output**      |
|-----------|--------------|---|---------------|-----------------|
| [1, 2, 3] | 6 1.8333 123 |   | [2, 4, 8, 16] | 30 0.9375 24816 |

<br/>

#### Solution: <a title="09 Aggregate Elements" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/tree/master/03%20Syntax%20Functions%20And%20Statements/09.AggregateElements.js">09 Aggregate Elements</a>

---

### 03.10 \*Words Uppercase

Write a program that **extracts all words** from a passed in string and converts
them to **upper case**. The extracted words in upper case must be printed on a
single line separated by **", "**.

The **input** comes as a single string argument - the text to extract and
convert words from.

The **output** should be a single line containing the converted string.

**Examples**

| **Input**          | **Output**        |   | **Input** | **Output** |
|--------------------|-------------------|---|-----------|------------|
| 'Hi, how are you?' | HI, HOW, ARE, YOU |   | 'hello'   | HELLO      |

**Hints**

-   You may need to use a [Regular
    Expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
    or alternatively check for all delimiters that can be found in a sentence
    (ex. ",", " ", "!", "?" and so on).

<br/>

#### Solution 1: <a title="10 Words Uppercase" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/tree/master/03%20Syntax%20Functions%20And%20Statementsp/10.WordsUppercase.js">10 \*Words Uppercase</a>
#### Solution 2: <a title="10 Words Uppercase" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/tree/master/03%20Syntax%20Functions%20And%20Statementsp/p10.01.WordsUppercase.js">10 \*Words Uppercase</a>

---
