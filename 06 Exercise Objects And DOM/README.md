## 06 Exercise: Objects and DOM

---
---

Problems for in-class lab for the ["JS Essentials Course
\@SoftUni"](https://softuni.bg/courses/js-essentials). Submit your solutions in
the SoftUni judge system at
<https://judge.softuni.bg/Contests/1426/Exercise-Objects-and-DOM>

---

### 06.01 Cards

Write **a function** which **checks cards**, shows which one **is greater** and
**keeps history of all hands**.

<img src="https://user-images.githubusercontent.com/32310938/63638903-8cbb7400-c696-11e9-8a9a-12a14585a27f.png" alt="alt text" width="600" height="">

<img src="https://user-images.githubusercontent.com/32310938/63638894-74e3f000-c696-11e9-86bf-1b4ee4edc266.png" alt="alt text" width="300" height="">

**Firstly, add click events** to **all cards**. When one of the cards is
clicked, the current background card must be changed with the
"**whiteCard.jpg**" picture (it is given in the skeleton) and the **card name
should be appended** to one of the **span** elements in the **div** with
**id="result".**

If a card **from the top side** is **clicked**, **append** the **card name** to
the **left span** (first empty **span**), otherwise **append** the card **name**
to the **right span** (second/last **span**).

<img src="https://user-images.githubusercontent.com/32310938/63638911-9e048080-c696-11e9-8223-2053e71c0f2b.png" alt="alt text" width="800" height="">

<img src="https://user-images.githubusercontent.com/32310938/63638925-c2f8f380-c696-11e9-8ea1-50d297e9a9fe.png" alt="alt text" width="800" height="">

When **cards** from **both sides are selected, check** which one is **greater**.
The greater card should have border "**2px solid green**" and the lower card -
"**2px solid red"**.

<img src="https://user-images.githubusercontent.com/32310938/63638940-e6bc3980-c696-11e9-9689-c5d14c9a0204.png" alt="alt text" width="800" height="">

<img src="https://user-images.githubusercontent.com/32310938/63638956-03587180-c697-11e9-9a90-8afa68b70864.png" alt="alt text" width="800" height="">

You should **clear** the **span elements** which **hold the current card names**
when both are selected, and the winner is selected. **After every hand,** push
the current card names in the **history div** in the following format:

[{top side card name} vs {bottom side card name} ]

<img src="https://user-images.githubusercontent.com/32310938/63638964-123f2400-c697-11e9-89d3-c22bc4e8197d.png" alt="alt text" width="800" height="">

<br/>

#### Solution: <a title="01 Cards" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/blob/master/06%20Exercise%20Objects%20And%20DOM/01.%20Cards/solution.js">01 Cards</a>

---

### 06.02 Chat Room

Write a **function** to create the functionality of **a chat room.**

<img src="https://user-images.githubusercontent.com/32310938/63639001-81b51380-c697-11e9-8e20-ab855ee1d256.png" alt="alt text" width="800" height="">

**Note: Do not forget** to **add event listener** to the **send button!**

**The new div element with class message my-message** should contain the current
message that is about to be send.

The **current div** should be appended to the div with an
**id="chat_messages".**

*The input should be cleared on each click of the send button.*

<img src="https://user-images.githubusercontent.com/32310938/63639005-88438b00-c697-11e9-8370-3f866e938a5f.png" alt="alt text" width="800" height="">

<br/>
<br/>

<img src="https://user-images.githubusercontent.com/32310938/63639009-8d083f00-c697-11e9-970c-b6ec8a7cf528.png" alt="alt text" width="800" height="">

<br/>

#### Solution: <a title="02 Chat Room" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/blob/master/06%20Exercise%20Objects%20And%20DOM/02.%20Chat-Room/solution.js">02 Chat Room</a>

---

### 06.03 Number Converter

Write a function that **converts** a **decimal number** to **binary** and
**hexadecimal**.

<img src="https://user-images.githubusercontent.com/32310938/63639038-fc7e2e80-c697-11e9-9f10-fcab05578f12.png" alt="alt text" width="600" height="">

The given number will always be in **decimal format.** The "**From**" select
menu will only have a

**Decimal** option, but the "**To"** select menu will have **two options**:
**Binary** and **Hexadeicmal**.

This means that our program should have the functionality to **convert decimal**
to **binary** and

**decimal** to **hexadecimal**.

Note that "**To" select menu** by default is empty. You have to insert the two
options (**'Binary'** and **'Hexadecimal'**) inside before continue. Also they
should have **values** ('**binary**' and '**hexadecimal**').

-   When the [**Convert it**] button is **clicked**, the expected result should
    appear in the [**Result**] input field.

<img src="https://user-images.githubusercontent.com/32310938/63639044-0869f080-c698-11e9-905a-ff6bfe1dfb04.png" alt="alt text" width="600" height="">

<img src="https://user-images.githubusercontent.com/32310938/63639050-10c22b80-c698-11e9-87e8-1f568a8aed71.png" alt="alt text" width="600" height="">

<br/>

#### Solution: <a title="03 Number Converter" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/blob/master/06%20Exercise%20Objects%20And%20DOM/03.%20Number-Convertor/solution.js">03 Number Converter</a>

---

### 06.04 JavaScript Quizz

Write a function that has the functionality of a quiz.

<img src="https://user-images.githubusercontent.com/32310938/63639095-73b3c280-c698-11e9-94c2-f5a7c66be29e.png" alt="alt text" width="600" height="">

There are three **sections** that contain **one question and 2 possible
answers.**

**The right answer is only one!**

When one of the **list elements is clicked,** the next section **must appear (if
any…)**.

After all three questions have been answered, the **result div** must
**appear.** (Use **'none'** and **'block**' to hide and show the question
sections)

If all questions are answered correctly, you should prin the following message:  
"**You are recognized as top JavaScript fan!**"

Otherwise, just print "**You have {rightAnswers} right answers**".

The right answers are (**onclick, JSON.stringify() and A programming API for
HTML and XML documents**).

<img src="https://user-images.githubusercontent.com/32310938/63639095-73b3c280-c698-11e9-94c2-f5a7c66be29e.png" alt="alt text" width="600" height="">

<img src="https://user-images.githubusercontent.com/32310938/63639101-87f7bf80-c698-11e9-8542-03223b10b636.png" alt="alt text" width="600" height="">

<img src="https://user-images.githubusercontent.com/32310938/63639107-904ffa80-c698-11e9-8b38-2b714f12170c.png" alt="alt text" width="600" height="">

<img src="https://user-images.githubusercontent.com/32310938/63639111-99d96280-c698-11e9-9735-4bb2f73855d2.png" alt="alt text" width="600" height="">

<img src="https://user-images.githubusercontent.com/32310938/63639112-9f36ad00-c698-11e9-8ccd-23f3cecdd4aa.png" alt="alt text" width="600" height="">

<br/>

#### Solution: <a title="04 JavaScript Quizz" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/blob/master/06%20Exercise%20Objects%20And%20DOM/04.%20JavaScript-Quizz/solution.js">04 JavaScript Quizz</a>

---

### 06.05 Table - Search Engine

Write a function that **searches** in a **table** by given input.

<img src="https://user-images.githubusercontent.com/32310938/63639196-3bf94a80-c699-11e9-9a4a-9882cbfee549.png" alt="alt text" width="600" height="">

When the "**Search**" **button** is **clicked**, go through all cells in the
table except for the first row (Student name, Student email and Student course)
and check if the given input has a match (check for both **full words** and
**single letters**).

If any of the rows contain the submitted string, add a **select class** to that
row. Note that more than one row may contain the given string.

Оtherwise, if there is no match, **nothing should happen**.

**Note:** After every search ("**Search**" button is clicked), **clear the input
field** and **remove all already selected classes** (if any) from the previous
search, in order for the **new search** to contain only the **new result**.

For instance, if we try to find **eva:**

<img src="https://user-images.githubusercontent.com/32310938/63639199-3f8cd180-c699-11e9-914c-c607a3013639.png" alt="alt text" width="600" height="">

The result should be:

<img src="https://user-images.githubusercontent.com/32310938/63639200-49163980-c699-11e9-923a-a35b015fa793.png" alt="alt text" width="600" height="">

If we try to find all students who have email addresses in **softuni** domain,
the expected result should be:

<img src="https://user-images.githubusercontent.com/32310938/63639202-4ca9c080-c699-11e9-9a81-71959b1fa7f4.png" alt="alt text" width="600" height="">


<br/>

#### Solution: <a title="05 Table - Search Engine" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/blob/master/06%20Exercise%20Objects%20And%20DOM/05.%20Table-Search-Engine/solution.js">05 Table - Search Engine</a>

---

### 06.06 Shopping Cart

You will be given some products that you should be able to add to your cart.
Each product will have a **name, picture** and a **price**.

When the **"Add"** button is clicked, append the current product to the
**textarea** in the following format: **"Added {name} for {money} to the
cart.\\n"**.

When the button **"Checkout"** is clicked, calculate the **total money** that
you need to pay for the products that are currently in your cart. Append the
result to the **textarea** in the following format:

**"You bought {list} for {totalPrice}."**

The list should contain only the **unique products**, separated by **", "**. The
total price should be rounded to the second decimal point.

Also, after clicking over "**Checkout**" and every from above is done you should
**disable all buttons**. (You **can't** add products or checkout again, if once
checkout button is clicked)

**Examples**

<img src="https://user-images.githubusercontent.com/32310938/63639261-ce015300-c699-11e9-9c25-b9a8137a2584.png" alt="alt text" width="800" height="">

<br/>

#### Solution: <a title="06 Shopping Cart" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/blob/master/06%20Exercise%20Objects%20And%20DOM/06.%20Shopping-Cart/solution.js">06 Shopping Cart</a>

---

### 06.07 Furniture

You will be given some furniture as an **array of objects**. Each object will
have a **name**, a **price** and a **decoration factor**.

When the **"Generate" button is clicked**, add a **new row to the table** for
each piece of furniture with **image, name, price** and **decoration factor**
(code example below).

When the **"Buy"** button is clicked, get all **checkboxes that are marked** and
show in the **result textbox** the **names** of the piece of furniture that
**were checked**, separated by a **comma** and **single space** (**", "**) in
the following format: **"Bought furniture: {furniture1} {furniture2}…"**.

On the next line, print the total price in format: **"Total price:
{totalPrice}"** (formatted to the second decimal point). Finally, print the
average decoration factor in the format: **"Average decoration factor:
{decFactor}"**

### Input Example

>   **[{"name": "Sofa", "img":   
>   "https ://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg",
>   "price": 150, "decFactor": 1.2}]**

**Examples**

<img src="https://user-images.githubusercontent.com/32310938/63639323-6dbee100-c69a-11e9-8857-f5b3cbaefc7c.png" alt="alt text" width="800" height="">

<br/>
<br/>

<img src="https://user-images.githubusercontent.com/32310938/63639333-862efb80-c69a-11e9-8af5-169af5b78068.png" alt="alt text" width="600" height="">

<br/>

#### Solution: <a title="07 Furniture" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/blob/master/06%20Exercise%20Objects%20And%20DOM/07.%20Furniture/solution.js">07 Furniture</a>

---

### 06.08 Numpad Calculator

Write a function that implements a calculator that has the following
functionalities:

<img src="https://user-images.githubusercontent.com/32310938/63649663-25aac780-c749-11e9-9a2b-ffb16d0ed6b8.png" alt="alt text" width="400" height="">

When one of **the buttons is clicked, its value** should be shown in the
"**Expression**" **field** (**\#expressionOutput**).

For instance, if we click on the button with value **9**, the expected result
should be:

<img src="https://user-images.githubusercontent.com/32310938/63649665-2ba0a880-c749-11e9-80e1-9e476e00bf50.png" alt="alt text" width="400" height="">

If the **current Expression** field (**\#expresisonOutput**) contains the whole
math expression (**left operand**, **operator** and **right operand**:
**Example: 9 + 2**), the expected result should be:

<img src="https://user-images.githubusercontent.com/32310938/63649675-3f4c0f00-c749-11e9-9fce-c40d26044832.png" alt="alt text" width="400" height="">

When the **equal sign "=" is pressed, the result of that expression** should
appear in the **Result** field (**\#resultOutput**)

<img src="https://user-images.githubusercontent.com/32310938/63649671-31968980-c749-11e9-88e6-05a1444c0ad4.png" alt="alt text" width="400" height="">

Otherwise, if we create an invalid expression such as "**99 +**" (**without
second/right operand**) and we hit the equal sign "**=**", the expected result
should be:

<img src="https://user-images.githubusercontent.com/32310938/63649679-48d57700-c749-11e9-80ad-34cf6670bdd2.png" alt="alt text" width="400" height="">

The "**Clear**" button should **clear both Expression and Result fields
(\#expressionOutput** and **\#resultOutput)**

For instance, if we have the following expression:

<img src="https://user-images.githubusercontent.com/32310938/63649682-4ecb5800-c749-11e9-8053-0359f2ad8caf.png" alt="alt text" width="400" height="">

And we press "**Clear**", the expected result should be:

<img src="https://user-images.githubusercontent.com/32310938/63649663-25aac780-c749-11e9-9a2b-ffb16d0ed6b8.png" alt="alt text" width="400" height="">


<br/>

#### Solution: <a title="08 Numpad Calculator" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/blob/master/06%20Exercise%20Objects%20And%20DOM/08.%20Numpad-Calculator/solution.js">08 Numpad Calculator</a>

---

### 06.09 Order the names

Write a **function that orders names alphabetically**.

<img src="https://user-images.githubusercontent.com/32310938/63650024-648f4c00-c74e-11e9-8f14-3b11fa74a9bf.png" alt="alt text" width="600" height="">

You will receive a **name of a student as an input**. When the "**Register**"
button is **clicked**, you should

add the given student name in the SoftUni Database, while **keeping** the
**alphabetial order**.

For instance, if we register **David,** his name should appear in the **D**
column.

<img src="https://user-images.githubusercontent.com/32310938/63650027-6822d300-c74e-11e9-84e4-a593e046803e.png" alt="alt text" width="600" height="">

<br/>
<br/>

<img src="https://user-images.githubusercontent.com/32310938/63650029-6a852d00-c74e-11e9-96a4-9113c8dd6db7.png" alt="alt text" width="600" height="">

If you **receive more than one name with the same starting letter**, you should
**join all names** by a

comma and a space ("**,** ").

<img src="https://user-images.githubusercontent.com/32310938/63650031-6ce78700-c74e-11e9-946e-192d9ac06a4e.png" alt="alt text" width="600" height="">


<br/>

#### Solution: <a title="09 Order the names" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/blob/master/06%20Exercise%20Objects%20And%20DOM/09.%20Order-the-Names/solution.js">09 Order the names</a>

---

### 06.10 \* Sudomu

Write a function that implements **SUDOMU** (**Sudoku inside the DOM**).

<img src="https://user-images.githubusercontent.com/32310938/63650051-bdf77b00-c74e-11e9-89d1-b4c724d945aa.png" alt="alt text" width="600" height="">

The rules are simple and they are **the same** as the **typical sudoku game**
(for more information,

click
[here](https://sudoku.com/how-to-play/sudoku-rules-for-complete%20beginners/))

If the table is filled with the **right numbers**, and the "**Quick Check**"
button is **clicked**, the

expected result should be:

<img src="https://user-images.githubusercontent.com/32310938/63650052-c2bc2f00-c74e-11e9-813a-8c4ee115dd9e.png" alt="alt text" width="600" height="">

The table borer should be changed to: "**2px solid green".** The **text
content** of the **paragraph**

inside the **div** with an **id** "**check**" must be "**You solve it!
Congratulations!**"

The text color of that div must be **green.**

Otherwise, when the filled table **does not solve the sudomu,** the result
should be:

<img src="https://user-images.githubusercontent.com/32310938/63650053-c485f280-c74e-11e9-9618-1cf00fed32a9.png" alt="alt text" width="600" height="">

The table border should be changed to: "**2px solid red**".

The **text content** of the **paragraph** inside the **div** with an **id**
"**check**" must be:

"**NOP! You are not done yet…**"

The text color of that div must be **red!**

The "**Clear**" button **clears the whole SUDOMU (removes all numbers)** and the
**paragraph**

**which contains the messages. It also removes the table border.**


<img src="https://user-images.githubusercontent.com/32310938/63650051-bdf77b00-c74e-11e9-89d1-b4c724d945aa.png" alt="alt text" width="600" height="">

<br/>

#### Solution: <a title="10 Sudomu" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/blob/master/06%20Exercise%20Objects%20And%20DOM/10.%20Sudomu/solution.js">10 \* Sudomu</a>

---