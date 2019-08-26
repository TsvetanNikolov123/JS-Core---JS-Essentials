# JS Essentials - Exam Preparation

---
---

## 11.01 Coffee Machine

Exam problems for the [“JavaScript Essentials” course \@
SoftUni](https://softuni.bg/courses/js-essentials). Submit your solutions in the
SoftUni Judge system at
<https://judge.softuni.bg/Contests/Practice/Index/1675#0>.

*Create a program for a coffee machine. Calculate whether the money inserted in
the machine is enough to make the order and print the corresponding output.*

### Input

The input is an **array of strings**. Each string represents one order with
different parts, separated by comma and space **', '**.

-   The **first part** is the **coins inserted**.

-   The **second** is the **type of drink** (**coffee or tea**).

-   Next, if the drink type is **coffee**, you will receive **'caffeine'** or
    **'decaf'**.

-   Next, you may receive **'milk',** if the ordered drink is with milk. **It
    costs 10% of the drink price, rounded to first decimal point**

-   And **last** you receive the **quantity of sugar, between 0 and 5**. **No
    matter the quantity (except from 0) it costs 0.10. Add the sugar at the
    end!**

The **prices of drinks** are:

| **Type**        | **Price** |
|-----------------|-----------|
| coffee caffeine | 0.80      |
| coffee decaf    | 0.90      |
| tea             | 0.80      |

### Constrains

-   The input will always be **valid**

### Output

For each order there are **two possible** outputs:

-   If the money inserted is enough, calculate the change of the order:

>   **'You ordered {drink}. Price: {price}\$ Change: {change}\$'**

-   If the money is not enough:

>   **'Not enough money for {drink}. Need {moneyNeeded}\$ more'**  
>   

After proceeding all orders, print the **total money earned** from the
**successful** orders in the format: **'Income Report: {totalMoney}\$'**

All the numbers should be **formatted to the second decimal point**.

### Examples

| **Input**                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | **Output**                                                                                                                                                          |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0']                                                                                                                                                                                                                                                                                                                                                                                       | You ordered coffee. Price: 1.00\$ Change: 0.00\$ Not enough money for tea. Need 0.60\$ more. You ordered coffee. Price: 0.90\$ Change: 0.10\$ Income Report: 1.90\$ |
| **Comments**                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                                     |
| The first order is coffee with caffeine, milk and sugar. The price of the drink is 0.80\$, we calculate the milk, 10% of the price, rounded to the first decimal point - 0.1\$, and we add the sugar =\> 0.80 + 0.10 + 0.10 = 1.00. The second order is tea with milk and sugar (0.80 + 0.10 + 0.10 = 1.00), but the money inserted is not enough. Next, we receive order for coffee decaf with no milk and 0 sugar =\> 0.90\$. The change is 0.10\$. Total income = 1.90 |                                                                                                                                                                     |

<br/>
<br/>

| **Input**                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | **Output**                                                                                                                                                          |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ['8.00, coffee, decaf, 4', '1.00, tea, 2']                                                                                                                                                                                                                                                                                                                                                                                                                                | You ordered coffee. Price: 1.00\$ Change: 7.00\$ You ordered tea. Price: 0.90\$ Change: 0.10\$ Income Report: 1.90\$                                                |

<br/>

### Solution: <a title="01 Coffee Machine" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/blob/master/11%20Exam%20Preparation/01%20Coffee%20Machine/01.CoffeeMachine.js">01 Coffee Machine</a>

---

## 11.02 ATM Machine

Exam problems for the [“JavaScript Essentials” course \@
SoftUni](https://softuni.bg/courses/js-essentials). Submit your solutions in the
SoftUni Judge system at
<https://judge.softuni.bg/Contests/Practice/Index/1675#1>.

*Now going on the next machine, you need to process money from. It is the ATM.
You will receive some commands for withdrawing, reporting or loading and you
need to process them.*

The input is an **array of arrays**. **Each array** from the input is a
**different command depending on its length**.

If the **command array length is greater than 2** – **Insert** money in the ATM.

If the **command array length is 2** - W**ithdraw** money from the ATM.

If the **command array length is 1** - **Report** the **count** of a **given
banknote** in the ATM:

**1. Insert command:**

>   **Each element** from the current command is a **banknote** that is
>   inserted. After inserting, you have to **print a report message**:

>   **'Service Report: {insertedCash}\$ inserted. Current balance:
>   {totalCashInATM}\$.'**

**2. Withdraw command:**

>   The **first element** of the array is the **current balance** in the person
>   **account**. The **second element** are the money **to withdraw**.

-   If the **balance** of the account **is less** than the **money** to
    **withdraw** print:

>   **'Not enough money in your account. Account balance: {accountBalance}\$.'**

-   If there is **not enough money in the ATM**, print the following message:

>   **'ATM machine is out of order!'**

-   Otherwise, the withdraw is **always possible** and you need to start looping
    through the banknotes from the ATM, starting from the **biggest ones** and
    **remove them until you complete the withdraw**. When you finish the
    withdraw, print:

>   **'You get {withdraw}\$. Account balance: {accountBalance}\$. Thank you!'**

**3. Report command:**

Count the banknotes of the value given in the ATM:

**'Service Report: Banknotes from {banknote}\$: {banknoteCount}.'**

### Input / Constrains

-   Comes as an **array of arrays**

-   Input will **always be valid**

### Output

-   After **each array** there is a specific **message** you need to print

-   There is no other output that needs to be printed

### Examples

| **Input**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | **Output**                                                                                                                                                                                                                                                                                    |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [[20, 5, 100, 20, 1], [457, 25], [1], [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20], [20, 85], [5000, 4500], ]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Service Report: 146\$ inserted. Current balance: 146\$. You get 25\$. Account balance: 432\$. Thank you! Service Report: Banknotes from 1\$: 1. Service Report: 252\$ inserted. Current balance: 373\$. Not enough money in your account. Account balance: 20\$. ATM machine is out of order! |
| **Comments**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                               |
| First Command - we insert each element /banknotes/ and print the report. Second Command - withdraw, which is possible. We start from the biggest banknotes, so the banknotes are (20 + 5) = 25\$. After the withdraw there are 121\$ left in the ATM. Third Command - we need to print how many banknotes of 1\$ there are in the ATM (1). Forth Command - insert again and print the report (252\$ inserted). Fifth Command - withdraw cannot be completed, because the account does not have enough money. The last Command - withdraw cannot be completed, because the ATM does not have enough money. |                                                                                                                                                                                                                                                                                               |

<br/>

### Solution: <a title="02 ATM Machine" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/blob/master/11%20Exam%20Preparation/02%20ATM%20Machine/02.ATMMachine.js">02 ATM Machine</a>

---

11.03 Warehouse Machine
----------------------------

Exam problems for the [“JavaScript Essentials” course \@
SoftUni](https://softuni.bg/courses/js-essentials). Submit your solutions in the
Softie Judge system at
<https://judge.softuni.bg/Contests/Practice/Index/1675#2>.

*Here is your final task. You must manage the storage of a coffee warehouse. You
need to be able to add and sell coffee products and do some revisions and
inspections.*

<img src="https://user-images.githubusercontent.com/32310938/63691759-bac8c180-c818-11e9-8693-1b83be2b4cfb.png" alt="alt text" width="600" height="">

You need to **store coffee brands** and for **each brand** you store different
**coffee** (**name, expire date and quantity**). **You can use strings to
compare the date, not the Date class.** The **input** is an **array of
strings**. Each string contains information about what you need to do. The
**first part** will be the **'command'**. It can be some of the following:

-   **'IN'** – you need to **add coffee products**

-   **'OUT'** – you need to **unload coffee products**

-   **'REPORT'** – print **all the products in the warehouse as they were passed
    in the input**

-   **'INSPECTION'** – print all the **products SORTED**

-   **'REPORT' command:**  
    Print **all brands with all the coffee** in the following format:  
    **'{nameOfBrand1}: {coffeName1} - {expireDate} - {quantity}. {coffeName2} -
    {expireDate} - {quantity}. {coffeName} - {expireDate} - {quantity}.**  
    **{nameOfBrand2}: {coffeName1} - {expireDate} - {quantity}. {coffeName2} -
    {expireDate} - {quantity}. {coffeName} - {expireDate} - {quantity}.'**  
      
    *Each brand must be in the new line. Use "\<br\>" element to do that.*

-   **'INSPECTION' command:**  
    Same as the 'REPORT' command, but the **brands** should be **sorted
    alphabetically** and for each brand the **coffee should be sorted by
    quantity in descending order**. Print in the following format:  
    **'{nameOfBrand1}: {coffeName1} - {expireDate} - {quantity}. {coffeName2} -
    {expireDate} - {quantity}. {coffeName} - {expireDate} - {quantity}.**  
    **{nameOfBrand2}: {coffeName1} - {expireDate} - {quantity}. {coffeName2} -
    {expireDate} - {quantity}. {coffeName} - {expireDate} - {quantity}.'**  
      
    *Each brand must be in the new line. Use "\<br\>" element to do that.*

-   **'IN' command:**  
    **Example: ' IN, Lavazza, Crema e Gusto, 2023-05-01, 5'**. You get the
    **coffee brand**, next you get the **name of the coffee**, then the **expire
    date** and the **quantity**.  
    - If this is the **first time you receive this brand** of coffee, **add it
    in the storage**, then **add the coffee with all of the other info**  
    - If the **brand already exists in the storage**, but the **coffee does
    NOT**, **add the coffee to the brand with all of its info**  
    - If the **brand and the coffee exist**, check the date. If the **new coffee
    expires later than the old one, replace it**. If they are equal, just **add
    the new quantity to the old one**. **Otherwise, do nothing.**

-   **'OUT' command:**  
    **Example: ' OUT, Lavazza, Crema e Gusto, 2023-05-01, 2'**. Check for the
    **brand and the coffee**. If you **have them in storage**, check if you have
    some that **expires after the given date** and check if you **have the
    quantity needed**. If you have, **remove that quantity** of that coffee from
    the storage.

### Input

-   **An array of strings**

-   **Example:**

    -   **["IN, Batdorf & Bronson, Espresso, 2025-05-25, 20","IN, Folgers, Black
        Silk, 2023-03-01, 14","IN, Lavazza, Crema e Gusto, 2023-05-01, 5","IN,
        Lavazza, Crema e Gusto, 2023-05-02, 5","IN, Folgers, Black Silk,
        2022-01-01, 10","IN, Lavazza, Intenso, 2022-07-19, 20","OUT, Dallmayr,
        Espresso, 2022-07-19, 5","OUT, Dallmayr, Crema, 2022-07-19, 5","OUT,
        Lavazza, Crema e Gusto, 2020-01-28, 2","REPORT","INSPECTION"]**

### Output

-   When you get the command '**REPORT'** or **'INSPECTION'** you should print
    the **right result** in the corresponding element:  
    
<img src="https://user-images.githubusercontent.com/32310938/63691796-d338dc00-c818-11e9-8e29-f8a026220941.png" alt="alt text" width="600" height="">

### Example

<img src="https://user-images.githubusercontent.com/32310938/63691950-3fb3db00-c819-11e9-8248-770c4cc1b182.png" alt="alt text" width="600" height="">

<br/>
<br/>

After clicking "**REPORT**" button:

<br/>
<br/>

<img src="https://user-images.githubusercontent.com/32310938/63691960-46425280-c819-11e9-9fee-2210bad30f9b.png" alt="alt text" width="600" height="">

<br/>
<br/>

<kbd>
> <img src="https://user-images.githubusercontent.com/32310938/63691965-4a6e7000-c819-11e9-9db3-408b11b1bb98.png" alt="alt text" width="600" height="">
</kbd>

<br/>

 ### Solution: <a title="03 Warehouse Machine" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/blob/master/11%20Exam%20Preparation/03%20Warehouse%20Machine/scripts/app.js">03 Warehouse Machine</a>

---