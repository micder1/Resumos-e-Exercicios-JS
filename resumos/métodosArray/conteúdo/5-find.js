/*
find and findIndex
Imagine we have an array of objects. How do we find an object with the specific 
condition?

Here the arr.find(fn) method comes in handy.

The syntax is:
*/

    let result = arr.find(function(item, index, array) {
        // if true is returned, item is returned and iteration is stopped
        // for falsy scenario returns undefined
    });

/*
The function is called for elements of the array, one after another:

item is the element.
index is its index.
array is the array itself.
If it returns true, the search is stopped, the item is returned. If nothing found, 
undefined is returned.

For example, we have an array of users, 
each with the fields id and name. Let’s find the one with id == 1:
*/

    let users = [
        {id: 1, name: "John"},
        {id: 2, name: "Pete"},
        {id: 3, name: "Mary"}
    ];
    
    let user = users.find(item => item.id == 1);
    
    alert(user.name); // John

/*
In real life arrays of objects is a common thing, so the find method is very useful.

Note that in the example we provide to find the function item => item.id == 1 with 
one argument. That’s typical, other arguments of this function are rarely used.

The arr.findIndex method is essentially the same, but it returns the index where 
the element was found instead of the element itself and -1 is returned when 
nothing is found.
*/