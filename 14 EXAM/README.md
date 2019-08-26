# 14.01 Caffeine Study

*Scaroo has agreed to participate in a study investigating how much caffeine a
person consume at a given time. You as a new colleague in the team are
responsible for this study...*

Scaroo consume caffeinated beverages **every day.** These beverages can be
(coffee, tea, coca cola and energy drinks). Here is some information about his
**routine**:

-   **Every day**

    -   in the **morning** he drinks **3 cups** of **coffee** (150 ml per cup)

    -   at **every lunch** he drinks **2 bottles** of **coca cola** (250 ml per
        bottle)

    -   at **every brunch** he drinks **3 cups** of **tea** (350 ml per tea)

-   **Every** 5th day he drinks **3 energy drinks** (500 ml per can)

-   **Every** 9th day he drinks **4 bottles** of **coca cola** and **2 energy
    drinks**

From a survey about coffee we learned that:

-   Coffee - **40 mg** caffeine per 100 ml

-   Coca Cola - **8 mg** caffeine per 100 ml

-   Tea - **20 mg** caffeine per 100 ml

-   Energy - **30 mg** caffeine per 100 ml

You will receive a **single number**. That number represents the **duration of
the study in days**.

You must **calculate** how **many caffeine** Scaroo consumes in this
**duration** and print the result.

### Input

-   You will receive a **number (days)**, which is the **duration** of the
    **study**

-   That number **always** will be **greater** or **equal** to **1** and
    **lesser** or **equal** to **30**

### Output

-   Print the result in format:

    -   "**{consumedCaffeine} milligrams of caffeine were consumed**"

### Example

| **Input** | **Output**                                |
|-----------|-------------------------------------------|
| 5         | 2600 milligrams of caffeine were consumed |
| 8         | 3890 milligrams of caffeine were consumed |


<br/>

### Solution: <a title="01 Caffeine Study" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/blob/master/14%20EXAM/01.CaffeineStudy.js">01 Caffeine Study</a>

---

# 14.02 Train Station

*You were hired to create a statistic of how many passengers get into the train
at the Serdika station.*

You will be given **two parameters** as **input**:

-   **a number** representing the **capacity** of each wagon of the train

-   **an array** representing how many **passengers** want to enter each wagon
    of the train.

The train starts with **empty wagons** and has **length equal** to the length of
the **passengers array**.

At each **element** of the array (the passengers) you have to check whether
there is **enough space** in the particular **wagon**. Here there are two
possibilities:

-   Enough space - you **add the passengers** to that wagon of the train.

-   Not enough space - you **transfer** the passengers that will **not fit** to
    the **next wagon** and **try to fit** them there.

At the end you have to print the **state** of the train (number of passengers in
each wagon **separated** by comma and space: **", "**)

-   If there was **room for all** passengers print: **"All passengers aboard"**

-   Otherwise print: **"Could not fit {remainingPassengers} passengers"**

### Input

Two parameters:

-   A number - the **capacity of each wagon**

-   An array - **number of passengers** that want to go in **each wagon**

### Output

Two lines:

-   State of the train: all the wagons (**array**) with all fit passengers

-   If there was place for all passengers: **"All passengers aboard"**;
    otherwise: **"Could not fit {remainingPassengers} passengers"**

### Examples

| **Input**            | **Output**                                  | **Comment**                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|----------------------|---------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 10, [9, 39, 1, 0, 0] | [ 9, 10, 10, 10, 10 ] All passengers aboard | We can fit **9 passengers** in the **first** wagon, because it is less than the capacity, in the **second** wagon we can fit **only 10** of the 39, so **put 10** there and **transfer 29** to the **next** one. In the **third** wagon we now have **30** (1 from the array and 29 transferred), but we can fit **only 10** again, so we **put 10** and **transfer 20**. In the **final 2** wagons we put **10** passengers **in each** and there are **0 passengers left** |
| 6, [5, 15, 2]        | [ 5, 6, 6 ] Could not fit 5 passengers      | We fit **5** passengers in the **first** wagon; we fit **6** in the second and **transfer 9** to the next one. There we fit **6** again and there are **5 left**. (11 – 6)                                                                                                                                                                                                                                                                                                   |

<br/>

### Solution: <a title="02 Train Station" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/blob/master/14%20EXAM/02.TrainStation.js">02 Train Station</a>

---

# 14.03 Spaceship Crafting

*SpamFire wants to build a spaceship and start travelling through the galaxy. He
must find some cores, which convert into bars and mix with other bars to build a
specific spaceship depending on the bars count.*

You will be given a **sequence** of **5 integers**. The first **4 integers**
represent the **found cores** for each type:

-   Titanium **core**

-   Aluminum **core**

-   Magnesium **core**

-   Carbon **core**

> <img src="https://user-images.githubusercontent.com/32310938/63717193-545f9580-c850-11e9-87f2-f61aa363b3d6.png" alt="alt text" width="600" height="">


After finding these **cores**, he returns to his workshop, but on his way back
he **loses** part of the found **cores**. The **last integer** you receive from
the input represents **the lost cores** in **percentage**. He packed the cores
in such way, that the **losses** for each **type** of **core** are the **same**.
This means you must **split** the **percentage equally** for each **type** of
**core** and **decrease** the **quantity** by the **split percentage**.

Here's some black-market information, about the rate at which you can
**convert** your **cores** to real **material bar**.

| **Product**         | **Price**    |
|:-------------------:|:------------:|
| 1 Titanium **bar**  | 25 **Core**  |
| 1 Aluminum **bar**  | 50 **Core**  |
| 1 Magnesium **bar** | 75 **Core**  |
| 1 Carbon **bar**    | 100 **Core** |

After SpamFire **converts** his **cores** into **bars** you must help him choose
a **spaceship**, depending on the **available bars**. Consider that SpamFire
**continues building spaceships** until he's out of bars**.**

*SpamFire tries to build ships from the most expensive to the cheapest one and
repeats it over and over until his materials are insufficient.*

Here's the list with the spaceships that SpamFire can **build** with **his
bars**.

| **Spaceship**      | **Needed materials**                                                              |
|--------------------|-----------------------------------------------------------------------------------|
| The-Undefined-Ship | 7 titanium **bars**, 9 aluminum **bars**, 7 magnesium **bars**, 7 carbon **bars** |
| Null-Master        | 5 titanium **bars**, 7 aluminum **bars**, 7 magnesium **bars**, 5 carbon **bars** |
| JSON-Crew          | 3 titanium **bars**, 5 aluminum **bars**, 5 magnesium **bars**, 2 carbon **bars** |
| False-Fleet        | 2 titanium **bars**, 2 aluminum **bars**, 3 magnesium **bars**, 1 carbon **bar**  |

### Input

-   The **first 4 integers** represent the **found cores** for each type
    (Titanium core, Aluminum core, Magnesium core and Carbon core)

-   **The last integer** (the 5th one) is the **percentage** of **losses** on
    all **found cores**

-   All incoming information comes from **5 input fields**  
    
    <img src="https://user-images.githubusercontent.com/32310938/63717491-0f882e80-c851-11e9-9108-0e2d36a1f949.png" alt="alt text" width="600" height="">

### Output

-   Output contains **two strings**

    -   The first one is **all built spaceships** in format:

>   \`{count} THE-UNDEFINED-SHIP, {count} NULL-MASTER, {count} JSON-CREW,
>   {count} FALSE-FLEET\`- *Print only the spaceships that are built at least
>   once.*

-   The second one is all available materials in format:  
    \`**{count} titanium bars, {count} aluminum bars, {count} magnesium bars,
    {count} carbon bars\`;**

-   Output strings must be set like **text content** in the following elements:  
    
<img src="https://user-images.githubusercontent.com/32310938/63717534-2f1f5700-c851-11e9-8c0a-7d01638ffd58.png" alt="alt text" width="400" height="">

### Constraints

-   The incoming integers will be **greater than** or **equal to 0**

-   The quantity of each **found core** must be **rounded** to the **closest
    integer**

-   SpamFire can build **more than 1** spaceship

-   Print only the **spaceships** that are built at least **once**

### Examples

| **Input**                   | **Output**                                                                                                                        |
|-----------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| 467.5, 1265, 1815, 1650, 40 | 1 THE-UNDEFINED-SHIP, 1 NULL-MASTER, 1 JSON-CREW, 1 FALSE-FLEET 0 titanium bars, 0 aluminum bars, 0 magnesium bars, 0 carbon bars |
| 600, 1600, 2175, 2100, 0    | 1 THE-UNDEFINED-SHIP, 2 NULL-MASTER, 1 JSON-CREW, 1 FALSE-FLEET 2 titanium bars, 2 aluminum bars, 0 magnesium bars, 1 carbon bars |

<img src="https://user-images.githubusercontent.com/32310938/63717606-570eba80-c851-11e9-8156-c3f042f86773.png" alt="alt text" width="600" height="">

<img src="https://user-images.githubusercontent.com/32310938/63717642-60982280-c851-11e9-9908-a7b6b73f4d40.png" alt="alt text" width="600" height="">

<br/>

### Solution: <a title="03 Spaceship Crafting" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Essentials/blob/master/14%20EXAM/03%20Spaceship%20Crafting/scripts/app.js">03 Spaceship Crafting</a>

---