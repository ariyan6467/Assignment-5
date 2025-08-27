

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Ans:if i want pick something from html page, each thing have name like id or class or tag.

getElementById - this one get only single thing what have that id, because id is special one.

getElementsByClassName - this get all things if they share same class, like group.

querySelector - it pick first one what match the style selector, like css rule.

querySelectorAll - it get every one what match that selector, all of them.




2. How do you **create and insert a new element into the DOM**?

Answer:To make new thing in page, use document.createElement("like div or p"), then maybe add some word inside with textContent or set attribute, after that put it in page with appendChild() on parent or sometimes append().



3. What is **Event Bubbling** and how does it work?

Ans : event bubbling mean when you click or something on small child part, the event jump up to mom part, then grandmom, all way to big document. it happen automatic.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Ans:event delegation is smart way, no put listener on every small child, just put one on big parent, then inside check what child make the event. good because save memory, and if add new child later, it still work no need add more listener.


5. What is the difference between **preventDefault() and stopPropagation()** methods?

Ans:preventDefault() is for stop the normal thing, like if link, no go to page. stopPropagation() is stop the event jump up to parent, no bubbling more.


