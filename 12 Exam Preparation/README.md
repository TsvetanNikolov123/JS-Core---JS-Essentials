# JS Essentials - Exam Preparation

---
---

## 12.01 Courses Prices

Exam problems for the [“JavaScript Essentials” course \@
SoftUni](https://softuni.bg/courses/js-essentials). Submit your solutions in the
SoftUni Judge system at
<https://judge.softuni.bg/Contests/Practice/Index/1659#0>.

Write **a function** to calculate the right price for the signed-up courses.

The **available** courses are:

-   **JS Fundamentals** - 170 BGN

-   **JS Advanced** - 180 BGN

-   **JS Applications** - 190 BGN

The offered **education forms** are **onsite** and **online.**

Fortunately, there are some cases where students receive a **discount**:

-   If **JS Advanced** is combined with **JS Fundamentals,** the student
    receives a **10% discount** on **JS Advanced**

-   If **all three** courses are selected (JS Fundamentals, JS Advanced and JS
    Applications), students receive a **module discount** - **6%** on the
    module's **total price**

-   Students also get a **discount** if their **education form** is **online** -
    **6% on all courses**

### Constraints

-   If the discounts are **more than one**, they must be **applied** in the
    order they are **described above**.

### Input

The function receives **4 arguments**.

-   The first **3** arguments will be **boolean** values (**true**/**false**)
    representing the **sign-up status** for each of the courses in specific
    order: Fundamentals, Advanced, Applications

-   The last one (**4th argument**) will be a **string** representing the
    **education form** (**online**/**onsite**)

### Output

-   **Number** that represent the **total price** for all **signed-up courses**
    received from the input

-   That number must be **rounded** to the **closest integer**

### Example

| **Input**                    | **Output** |
|------------------------------|------------|
| true, false, false, "onsite" | 170        |
| true, false, false, "online" | 160        |
| true, true, false, "onsite"  | 332        |

<br/>

### Solution: <a title="01 Courses Prices" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/blob/master/12%20Exam%20Preparation/01.%20Courses%20Prices/01.CoursesPrices.js">01 Courses Prices</a>

---

## 12.02. Plasma Giants

Exam problems for the [“JavaScript Essentials” course \@
SoftUni](https://softuni.bg/courses/javascript-advanced). Submit your solutions
in the SoftUni Judge system at
<https://judge.softuni.bg/Contests/Practice/Index/1659#1>.

You will receive **2 arguments** - an **array** and a **number**.

The **array** represents the **plasma** you need to cut in **2 pieces**. The 2
pieces will form **2 giants** that will fight each other. That is how it works:

-   First, you have to cut the array into **2 equal pieces**.

-   Then, you have to use the second argument (**the number - the size of the
    cut**) to create a giant. When you already have the arrays from the first
    cut, you take them and cut each of them by the **size cut**.

    -   Example: If we receive an array **[1,2,3,4,5,6,7,8,9,10,11,12]** and the
        second argument is **3**. First, we have to cut the array into 2 equal
        pieces. The result will be **[1,2,3,4,5,6]** for the **first part** and
        **[7,8,9,10,11,12]** for the **second part.** After that we see out cut
        size is **3**. We **split** each of the arrays (first part and second
        part) into **N** array each of them has **3** (cut size) elements. The
        result will be **[1,2,3]** and **[4,5,6]** for the **first part** and
        **[7,8,9]** and **[10,11,12]** for the **second part**.

-   After we have the **pieces** (arrays after the cut size) for both sides, we
    must find the **product** for each of them.

    -   Example: After the cut size, we have **[1,2,3]** , **[4,5,6]** for the
        first part and **[7,8,9]** , **[10,11,12]** for the second part. The
        result will be: 1 \* 2 \* 3 = **6**; 4 \* 5 \* 6 = **120**; **[6,120]**
        for the first part and 7 \* 8 \* 9 = **504**; 10 \* 11 \* 12 = **1320**;
        **[504,1320]** for the second part.

-   Finally, to build these giants and put them into a fight we have to find the
    **sum** of these **products**.

    -   The first giant will be 6 + 120 = **126**, and the second giant will be
        504 + 1320 = **1824**

    -   The fight rules are simple:

        -   Each of the giants has the same **damage per hit** which is the
            **smallest number** from the originally received array, in our case
            **([1,2,3,4,5,6,7,8,9,10,11,12])** that's **1**. When they hit, you
            have to **decrease** the giant number with that damage per hit.
            *They hit each other at the same time.*

        -   The fight **stops,** when one of them **reaches** the **biggest
            number** from the originally received array **or less**, in our case
            that’s **12.** Also, you have to keep track of the **rounds** of the
            fight. 1 round is completed when they hit each other **once**.

-   At the end, you have to print the **giant who won the fight** and number of
    **rounds**.

### Input

-   2 arguments. The first one is an **array** and **the** second one is a
    **number**

### Output

If we have a winner, the corresponding output must be:

**"{First/Second} Giant defeated {First/Second} Giant with result
\${winnerGiantPoints} - \${defeatedGiantPoints} in \${rounds} rounds"**

Otherwise:

**"Its a draw {firstGiantPoints} – {secondGiantPoints}"**

### Constraints

-   The incoming array **always** will be **divided** into the **cut size
    without reminder**

-   The incoming array will contain numbers **greater** or **equal** than **0**

-   The **cut size** will be number **greater** or **equal** than **0**

### Example

| **Input**                                    | **Output**                                                             |
|----------------------------------------------|------------------------------------------------------------------------|
| **[3, 3, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4], 2** | **Second Giant defeated First Giant with result 124 - 9 in 15 rounds** |
| **[4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 2**  | **Its a draw 4 - 4**                                                   |

<br/>

### Solution: <a title="02. Plasma Giants" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/blob/master/12%20Exam%20Preparation/02.%20Plasma%20Giants/02.PlasmaGiants.js">02. Plasma Giants</a>

---

## 12.03 Face Control

Exam problems for the [“JavaScript Essentials” course \@
SoftUni](https://softuni.bg/courses/javascript-advanced). Submit your solutions
in the SoftUni Judge system at
<https://judge.softuni.bg/Contests/Practice/Index/1659#2>.

*Imagine you are a security guard in a disco. Your job is to check who goes in,
who goes out and who has no permission to go in. You, as a smart person, decide
to create a program which does it for you.*

> <img src="https://user-images.githubusercontent.com/32310938/63696977-9b379600-c824-11e9-8292-6425b6198209.png" alt="alt text" width="800" height="">


In this problem, you have to **manipulate** the **given input** and store the
information in **different HTML elements**. Here is how it works:

The input is given in the **textarea** like a **value** and represents a
**stringified array** of **objects**. Each object in that array has 3 properties
(**firstName**, **lastName**, and **action**) **except** the **last object**.

The actions that every person can perform is:

-   **peopleIn()** - That person **goes in** the club.

    -   If that person has permission to go in the club, you have to put their
        **names** in the **People In** section (specifically in the paragraph)

-   **peopleOut()** - That person **goes out** of the club.

    -   If that person is already in the club, they go out of it. That means you
        have to **remove** them from the **people in list** and **put them** in
        the **people out list** (specifically in the paragraph).

-   **blacklist()** - That person **no longer has permission** to go in the club

    -   That person **goes to the blacklist** and has no longer permission to go
        in the club. If that person is already in the club, they **go out**
        (remove them from the **people in list** and put them in the **people
        out list**, specifically in the paragraph).

The **last element** in the array is an object with 2 properties (**criteria**
and **action)**

-   If the given criteria and action are **different than an empty string**, you
    must **sort all people** in that specific action (section) by the **given
    criteria alphabetically**.

### Input

**Array** of **objects** given like a value in the **textarea** element:

**[{"firstName":"Jon","lastName":"Snow","action":"peopleIn"},{"firstName":"Jonny","lastName":"Bravo","action":"peopleIn"},{"firstName":"John","lastName":"Doe","action":"peopleOut"},{"firstName":"Jon","lastName":"Snow","action":"peopleOut"},{"firstName":"John","lastName":"Doe","action":"peopleOut"},{"firstName":"Lenny","lastName":"Kravitz","action":"blacklist"},{"firstName":"Lenny","lastName":"Kravitz","action":"peopleIn"},{"firstName":"Marwin","lastName":"Athelstein","action":"peopleIn"},{"criteria":"lastName","action":"peopleIn"}]**

### Output

The output for each of the actions is the following format:

'**{"firstName":"{firstName}","lastName":"{lastName}"}** '

*Note that after adding a person in some of the sections, you have to put an
additional single space after.*

In these cases when you have a **valid sorting criteria** and **action**, the
objects in that specific section must be **sorted alphabetically** by the
**given criteria**

### Constraints

-   A valid sorting criteria will be either **firstName** or **lastName**

-   A valid sorting section will be either **peopleIn**, **peopleOut** or
    **blacklist**

-   Тhe elements of which you have to change the **textContent** are bordered
    with red in the picture below:

> <img src="https://user-images.githubusercontent.com/32310938/63696886-675c7080-c824-11e9-9dbf-ba26d985ec0a.png" alt="alt text" width="600" height="">

### Example

> <img src="https://user-images.githubusercontent.com/32310938/63696899-717e6f00-c824-11e9-9006-3a3726f2a71d.png" alt="alt text" width="600" height="">

After clicking the [**Get data**] **button,** the expected result should be:

> <img src="https://user-images.githubusercontent.com/32310938/63696920-7cd19a80-c824-11e9-864e-06e8ac92b211.png" alt="alt text" width="600" height="">

### Example

> <img src="https://user-images.githubusercontent.com/32310938/63696941-8824c600-c824-11e9-9a36-d2e549b7b6d6.png" alt="alt text" width="600" height="">

After clicking the [**Get data**] **button,** the expected result should be:

><img src="https://user-images.githubusercontent.com/32310938/63696962-94108800-c824-11e9-9d36-d82aa542f609.png" alt="alt text" width="600" height="">

<br/>

### Solution: <a title="03 Face Control" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/blob/master/12%20Exam%20Preparation/03.%20Face%20Control/scripts/app.js">03 Face Control</a>

---