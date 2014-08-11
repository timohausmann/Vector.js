# Vector JS
A Javascript Implementation of a simple 2D Vector Class, just the basics.  
This is strongly inspired by Daniel Shiffmans awesome Book [The Nature Of Code](http://natureofcode.com/book/chapter-1-vectors/). Check it out if you want to learn more about vectors.

To see some possible applications, take a look inside the examples folder or visit the [Examples Demo Page](http://timohausmann.de/vector.js/examples/).

## Creation

There are various ways to create a new Vector:

**Create a new Vector pointing to x:2 y:3**

    var myVector = new Vector(2, 3);

**Create a new random but normalized Vector**

    var myVector = Vector.random2D();

**Create a new normalized Vector from a degree value (0-359)**

    var myVector = Vector.fromDegree(120);


## Methods
Got yourself a Vector? This is what you can do with it:

**Duplicate**

    var myVectorCopy = myVector.get();

**Subtract another Vector**

    myVector.sub(yourVector);

**Add another Vector**

    myVector.add(yourVector);

**Multiply by 2**

    myVector.mult(2);

**Divide by 2**

    myVector.div(2);

**Get magnitude / length**

    var magnitude = myVector.mag();

**Limit** (making sure the Vector is not longer than 8)

    myVector.limit(8);

**Normalize** (scaling the Vector to a length of 1)

    myVector.normalize();


Copyright © 2014 Timo Hausmann | [MIT License](http://opensource.org/licenses/mit-license.php)