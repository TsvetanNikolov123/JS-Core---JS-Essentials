## 07 Lab: Arrays and Matrices

---
---

Problems for in-class lab for the [“JavaScript Essentials” course \@
SoftUni](https://softuni.bg/courses/js-essentials). Submit your solutions in the
SoftUni judge system at
<https://judge.softuni.bg/Contests/1464/Lab-Arrays-and-Matrices>.

---

### 07.01 Sum First Last

Write a function that calculates and prints the sum of the first and the last
elements in an array.

The **input** comes **as array of string elements** holding numbers.

The **output** is the return value of your function.

**Example**

| **Input**          | **Output** |   | **Input**   | **Output** |
|:------------------:|:----------:|---|:-----------:|:----------:|
| ['20', '30', '40'] | 60         |   | ['5', '10'] | 15         |

<br/>

#### Solution: <a title="01 Sum First Last" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/blob/master/07%20Arrays%20And%20Matrices/01.SumFirstLast.js">01 Sum First Last</a>

---

### 07.02 Even Position Element

Write a function that finds the elements at even positions in an array.

The **input** comes as **array of string** elements.

The **output** is the return value of your function. Collect all elements in a
string, separated by space.

**Examples**

| **Input**          | **Output** |   | **Input**   | **Output** |
|:------------------:|:----------:|---|:-----------:|:----------:|
| ['20', '30', '40'] | 20 40      |   | ['5', '10'] | 5          |

<br/>

#### Solution: <a title="02 Even Position Element" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/blob/master/07%20Arrays%20And%20Matrices/02.EvenPositionElement.js">02 Even Position Element</a>

---

### 07.03 Negative / Positive Numbers

Write a JS function that processes the elements in an array one by one and
produces a new array. **Prepend** each **negative** element at the front of the
result and **append** each **positive** (or 0) element at the end of the result.

The **input** comes as **array of number elements**.

The **output** is printed on the console, each element on a new line.

**Example**

| **Input**     | **Output** |   | **Input**      | **Output** |
|:-------------:|:----------:|---|:--------------:|:----------:|
| [7, -2, 8, 9] | \-2<br/> 7<br/> 8<br/> 9<br/>  |   | [3, -2, 0, -1] | \-1<br/> -2<br/> 3<br/> 0 |

<br/>

#### Solution: <a title="03 Negative Positive Numbers" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/blob/master/07%20Arrays%20And%20Matrices/03.NegativePositiveNumbers.js">03 Negative / Positive Numbers</a>

---

### 07.04 First and Last K Numbers

Write a function that prints the first **k** and the last **k** elements from an
array of numbers.

The **input** comes as **array of number elements**. The **first element**
represents the number **k**, all other elements are from the array that needs to
be processed.

The **output** is printed on the console on two lines. On the first line print
the **first k** elements, separated by space. On the second line print the
**last k** elements, separated by space.

**Examples**

| **Input**        | **Output** |   | **Input**           | **Output**  |
|------------------|------------|---|---------------------|-------------|
| [**2**,<br/> 7, 8, 9] | 7 8 <br/>8 9    |   | [**3**,<br/> 6, 7, 8, 9] | 6 7 8 <br/>7 8 9 |

<br/>

#### Solution: <a title="04 First and Last K Numbers" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/blob/master/07%20Arrays%20And%20Matrices/04.FirstAndLastKNumbers.js">04 First and Last K Numbers</a>

---

### 07.05 Last K Numbers Sequence

You are given two integers **n** and **k**. Write a JS function that generates
and prints the following sequence:

-   The first element is 1

-   Every following element equals the **sum** of the previous **k** elements

-   The length of the sequence is **n** elements

The **input** comes as **two number arguments**. The first element represents
the number **n**, and the second – the number **k**.

The **output** is printed on the console on a single line, separated by space.

**Example**

| **Input** | **Output**   |   | **Input** | **Output**        |
|:---------:|:------------:|---|:---------:|:-----------------:|
| 6, 3      | 1 1 2 4 7 13 |   | 8, 2      | 1 1 2 3 5 8 13 21 |

#### Explanation

The 2nd element (1) is the sum of the 3 elements before it, but there is only 1,
so we take that. The third element is the sum of the first 2 (1 and 1) and the
4th – the sum of 1, 1 and 2. The 5th element is the sum of the 2nd, 3rd and 4th
(1, 2 and 4) and so on.

<br/>

#### Solution: <a title="05 Last K Numbers Sequence" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/blob/master/07%20Arrays%20And%20Matrices/05.LastKNumbersSequence.js">05 Last K Numbers Sequence</a>

---

### 07.06 Process Odd Numbers

You are given an array of numbers. Write a JS function that prints the elements
at odd positions from the array, doubled and in reverse order.

The **input** comes as **array of number elements**.

The **output** is printed on the console on a single line, separated by space.

**Example**

| **Input**        | **Output** |   | **Input**           | **Output** |
|------------------|------------|---|---------------------|------------|
| [10, 15, 20, 25] | 50 30      |   | [3, 0, 10, 4, 7, 3] | 6 8 0      |

<br/>

#### Solution: <a title="06 Process Odd Numbers" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/blob/master/07%20Arrays%20And%20Matrices/06.ProcessOddNumbers.js">06 Process Odd Numbers</a>

---

### 07.07 Smallest Two Numbers

Write a function that prints the two smallest elements from an array of numbers.

The **input** comes as **array of number elements**.

The **output** is printed on the console on a single line, separated by space.

**Example**

| **Input**       | **Output** |   | **Input**           | **Output** |
|-----------------|------------|---|---------------------|------------|
| [30, 15, 50, 5] | 5 15       |   | [3, 0, 10, 4, 7, 3] | 0 3        |


<br/>

#### Solution: <a title="07 Smallest Two Numbers" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/blob/master/07%20Arrays%20And%20Matrices/07.SmallestTwoNumbers.js">07 Smallest Two Numbers</a>

---

### 07.08 Biggest Element

Write a function that finds the biggest element inside a matrix.

The **input** comes as **array of arrays**, containing number elements (2D
matrix of numbers).

The **output** is the return value of your function. Find the biggest element
and return it.

**Examples**

| **Input**                    | **Output** |   | **Input**                                     | **Output** |
|------------------------------|------------|---|-----------------------------------------------|------------|
| [[20, 50, 10],<br/> [8, 33, 145]] | 145   |   | [[3, 5, 7, 12],<br/> [-1, 4, 33, 2],<br/> [8, 3, 0, 4]] | 33         |

<br/>

#### Solution: <a title="08 Biggest Element" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/blob/master/07%20Arrays%20And%20Matrices/08.BiggestElement.js">08 Biggest Element</a>

---

### 07.09 Diagonal Sums

A square matrix of numbers comes as an array of strings, each string holding
numbers (space separated). Write a function that finds the sum at the main and
at the secondary diagonals.

The **input** comes as **array of arrays**, containing number elements (2D
matrix of numbers).

The **output** is printed on the console, on a single line separated by space.
First print the sum at the main diagonal, then the sum at the secondary
diagonal.

**Example**

| **Input**            | **Output** |   | **Input**                              | **Output** |
|----------------------|------------|---|----------------------------------------|------------|
| [[20, 40],<br/> [10, 60]] | 80 50      |   | [[3, 5, 17],<br/> [-1, 7, 14],<br/> [1, -8, 89]] | 99 25      |

<br/>

#### Solution: <a title="09 Diagonal Sums" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/blob/master/07%20Arrays%20And%20Matrices/09.DiagonalSums.js">09 Diagonal Sums</a>

---

### 07.10 Equal Neighbors

Write a function that finds the number of equal neighbor pairs inside a matrix
of variable size and type (numbers or strings).

The **input** comes as **array of arrays**, containing string elements (2D
matrix of strings).

The **output** is return value of you function. Save the number of equal pairs
you find and return it.

**Example**

| **Input**                                                                                                    | **Output** |   | **Input**                                                                               | **Output** |
|--------------------------------------------------------------------------------------------------------------|------------|---|-----------------------------------------------------------------------------------------|------------|
| [['2', '3', '4', '7', '0'],<br/> ['4', '0', '5', '3', '4'], <br/>['2', '3', '5', '4', '2'],<br/> ['9', '8', '7', '5', '4']] | 1          |   | [['test', 'yes', 'yo', 'ho'],<br/> ['well', 'done', 'yo', '6'],<br/> ['not', 'done', 'yet', '5']] | 2          |

<br/>

#### Solution: <a title="10 Equal Neighbors" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/blob/master/07%20Arrays%20And%20Matrices/10.EqualNeighbors.js">10 Equal Neighbors</a>

---
