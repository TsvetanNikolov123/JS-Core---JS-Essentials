# 13.01 HTML Grade

*As a young student, Peter is trying to figure out his grade before the exam.*

The course **grade** is calculated, following those rules:

The **maxPoints** for the course are always *100*. The maximum **examPoints**
are 400. The **examPoints** form 90% of the student\`s **totalPoints** for the
course.

The student can receive a **bonus** for homework, up to **10%** if all of the
homework is successfully completed trough the course.

If the student has *max points at the exam*, he receives 6, no matter the
homework bonuses.

After calculating the **totalPoints** for the course, you should evaluate the
following formula, which returns the **grade** for the course.:

grade = 3 + 2 \* (totalPoints – maxPoints / 5) / (maxPoints / 2)

Note that grade **less than 3** is rounded to 2 and you **can\`t** have grade
greater than 6.

Input / Constraints
-------------------

You will receive three parameters of type **Number**: exam points, homework
completed, total homework.

Output
------

Return Peters grade for the course.

Examples
--------

| **Input**   | **Output** | **Comment**                                                                                                                                                                                                                                                                                              |
|-------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 300, 10, 10 | 5.30       | Peter has 300 points on the exam, which is 67.5 points from the totalPoints for the course. He also has done all of his homework, so he recieves 10 points bonus. His final totalPoints are 77.5. After evaluating the formula, we receive: **3 + 2 \*(77.5 – maxPoints / 5) / (maxPoints / 2) = 5.30**  |
| **Input**   | **Output** |                                                                                                                                                                                                                                                                                                          |
| 200, 5, 5   | 4.40       |                                                                                                                                                                                                                                                                                                          |

*…psychological thriller film written by Simon Garrity and Stuart Hazeldine...*

<br/>

### Solution: <a title="01 HTML Grade" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/blob/master/13%20Old%20Exams/JS%20Fundamentals%20Exam%20-%2010%20February%202019/01.HTMLGrade.js">01 HTML Grade</a>

---

# 13.02 Table Filter

You will receive a table as an input - matrix with several rows and cols. The
first row is the header row. Each header can have some **filter** applied. As a
second parameter you will receive a command. You should execute the command and
print the table **filtered, sorted or modified**.

Commands:

-   hide {header}

If you receive hide command, delete the column with the corresponding header.

-   sort {header}

If you receive sort command, sort the rows in the table by the header given in
**ascending order**. **Note** that the header row should **not** be sorted.

-   filter {header} {value}

If you receive filter command, return the rows with the value given in the
corresponding header.

Input / Constraints
-------------------

You will receive as first parameter multidimensional array of strings, and a
string as second parameter – a command. The input will always be valid.

Output
------

Print on the console each of the table\`s rows; rows elements should be
separated by **" \| ";**

Examples
--------

| **Input**                                                                                                                                                                  | **Output**                                                                        |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [['name', 'age', 'grade'],<br/> ['Peter', '25', '5.00'],<br/> ['George', '34', '6.00'],<br/> ['Marry', '28', '5.49']],<br/> 'sort name'                                                        | name &#124; age &#124; grade <br/>George &#124; 34 &#124; 6.00 <br/> Marry &#124; 28 &#124; 5.49 <br/> Peter &#124; 25 &#124; 5.00 |

<br/>
<br/>

| **Input**                                                                                                                                                                  | **Output**                                                                        |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [['firstName', 'age', 'grade', 'course'],<br/> ['Peter', '25', '5.00', 'JS-Core'], <br/>['George', '34', '6.00', 'Tech'],<br/> ['Marry', '28', '5.49', 'Ruby']],<br/> 'filter firstName Marry' | firstName &#124; age &#124; grade &#124; course <br/> Marry &#124; 28 &#124; 5.49 &#124; Ruby                   |

*... Use filters to temporarily hide some of the data in a table, so you can
focus on the data you want ...*

<br/>

### Solution: <a title="02 Table Filter" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/blob/master/13%20Old%20Exams/JS%20Fundamentals%20Exam%20-%2010%20February%202019/02.TableFilter.js">02 Table Filter</a>

---

# 13.04 E-Venetka.bg

*Write a JS program that summarizes the e-Venetki (car vignettes) that were
bought, until the website crashed.*

You will receive an array of car vignettes and each vignette will be an object
with format:

**{**

**model: String,**

**regNumber: String,**

**town: String,**

**price: Number,**

**}**

First, see in which town, our "perfectly" written software, gained **most
profit**. If two or more towns have the same profit, pick the town with **most
vignettes registered**. If there two or more towns with same profit and same
number of vignettes registered, pick the **first town, ordered ascending by town
name**.

Next, check **which model is most driven** (popular) **in the most profitable
town**, if there are several models with same count, pick the model with the
**biggest vignette price**. If there several models with same count and vignette
price, pick the **first model, ordered ascending by model name**.

At the end, **list all of the towns**, which **have the most popular model
registered**. Order the list of towns **by town's name ascending**. For each
town **print the registration numbers** of the cars with the most driven model,
**ordered ascending by regNumber**, separated by comma and space.

Print on the console:

\<town\> is most profitable - \<totalProfit\> BGN

Most driven model: \<model\>

*\<list of towns with such model registered*\>: \<redistration numbers\>

Input / Constraints
-------------------

You will receive an **array of objects** with properties as shown above.

Output
------

Print on the **console** a message, depending on the data, as instructed above.

Examples
--------

| **Input**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [ { **model**: 'BMW', **regNumber**: 'B1234SM', **town**: 'Varna', **price**: 2},<br/> { **model**: 'BMW', **regNumber**: 'C5959CZ', **town**: 'Sofia', **price**: 8},<br/> { **model**: 'Tesla', **regNumber**: 'NIKOLA', **town**: 'Burgas', **price**: 9},<br/> { **model**: 'BMW', **regNumber**: 'A3423SM', **town**: 'Varna', **price**: 3},<br/> { **model**: 'Lada', **regNumber**: 'SJSCA', **town**: 'Sofia', **price**: 3} ]                                                                                                                                                                  |
| **Output**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Sofia is most profitable - 11 BGN <br/>Most driven model: BMW <br/> Sofia: C5959CZ <br/> Varna: A3423SM, B1234SM                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Comment**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| We receive vignettes for cars from three towns: Sofia, Varna, Burgas.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Sofia has the biggest profit (8 + 3 = 11 BGN). Next, we check the most driven model. There are only 2 models registered in the city: "BMV" and "Lada", so we pick the model with the biggest vignette price – "BMV".                                                                                                                                                                                                                                                                                                                                                                 |
| After that we print each city, which has registered vignette with model "BMV": Sofia and Varna, ordered ascending by town's name. For each city we print each vignettes regNumber, with model "BVM" (most driven model), ordered ascending by regNumber, separated by comma and whitespace.                                                                                                                                                                                                                                                                                          |

*... free services. best values. ...*

<br/>

### Solution: <a title="04 E-Venetka.bg" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/blob/master/13%20Old%20Exams/JS%20Fundamentals%20Exam%20-%2010%20February%202019/04.EVenetkaBG.js">04 E-Venetka.bg</a>

--- 

