
Links
-----

http://en.wikipedia.org/wiki/Doubly_linked_list



DoubleLinkedList
================

This is a javascript doubled linked List class.

Construct a new List : 
----------------------

```javascript
var mylist = DoubleLinkedList.new();
```

Construct a new Linked Node
---------------------------
```javascript
var MyObject = {
	prop1 : "test",
	execute : function(){
		console.debug(this.prop1);
	}
};
var linkedNode = DoubleLinkedNode.new( Object );
```

retrieve linkedNode's object : 
------------------------------
```javascript
var MyObject = linkedNode.data;
MyObject.execute();

//or

linkedNode.data.execute();
```

Insert a new DoubleLinkedNode
-----------------------------

```javascript
var myLinkedList = DoubleLinkedList.new();
var newNode = DoubleLinkedNode.new("I am a node");
myLinkedList.insertBeginning(newNode);
myLinkedList.insertEnd(newNode);



```

Insert a DoubleLinkedNode, refering to an existing DoubleLinkedNode
-------------------------------------------------------------------


```javascript
var myLinkedList = DoubleLinkedList.new();
var node = DoubleLinkedNode.new("I will be inserted in the list very soon");
DoubleLinkedList.insertBeginning(node);


DoubleLinkedNode's Properties
------------------------------


```javascript
Public var next
Public var prev
var index
`````

node2.next = Layout1  <=>   Layout1 = node2.next
node2.prev = Container <=> Container = node2.prev


node2.index (for arrays) , Gives





var newNode = DoubleLinkedNode.new("I am a node, and will be inserted before and after 'node'");
DoubleLinkedList.insertBefore(node, newNode);
DoubleLinkedList.insertAfter(node, newNode);

```

Remove a DoubleLinkedNode
-------------------------

```javascript
//remove  node from the list
DoubleLinkedList.remove(node);
```

Dealing with Objects instead of nodes
=====================================

This can be usefull if you know you have unique objects stored in the list. 
This won't work if you have equal objects.

Insert a new Object in the list
-------------------------------


```javascript
var myLinkedList = DoubleLinkedList.new();
var node1 = myLinkedList.insertObjectBeginning({name : "I am a js Object"});
var node2 = myLinkedList.insertObjectEnd( {name : "I am another js Object"} );
var node3 = myLinkedList.insertObjectBefore(  {name : "I am another js Object"} ,  {name : "I will be inserted before node2"}  );
var node4 = myLinkedList.insertObjectAfter(  {name : "I am another js Object"} ,  {name : "I will be inserted after node2"}  );

//At this stage, the list contains : 
//position 0 => node1 : {name : "I am a js Object"}
//position 1 => node3 : {name : "I will be inserted before node2"} 
//position 2 => node2 : {name : "I am another js Object"}
//position 3 => node4 : {name : "I will be inserted after node2"}
```

remove an Object from the list
------------------------------

```javascript
//We assume that the previous example has been executed.

//Remove node2.
myLinkedList.removeObject( {name : "I am another js Object"} ); 

//Remove node3
myLinkedList.removeObjectAt(1);

```

Search for an Object
--------------------

```javascript
//searchedNode === node1
searchedNode = myLinkedList.search({name : "I am a js Object"});
```


Multiple Inheritance with selfjs
================================

You can inherit an object with a DoubleLinkedNode , and transform it into a node element. 
This way, you won't have to access the stored object with the node.data property.


```javascript
var formula1 = DoubleLinkedNode.extend({
     
     initialize : function(manufacturerName, pilotName, points){
        this.manufacturerName = manufacturerName;
        this.pilotName = pilotName;
        this.points = points;
     }
);

//F1 world ranking mid october 2013
var ranking = DoubleLinkedList.new();


var vettelNode = ranking.insertBeginning( formula1.new("S.Vettel", "Red Bull Racing", 247);

var alonsoNode = ranking.insertEnd( formula1.new( "F.Alonso", "Ferreri", 187);
//or
var alonsoNode = ranking.insertAfter( vettelNode,  formula1.new( "F.Alonso", "Ferreri", 187);

var hamiltonNode = ranking.insertEnd( formula1.new( "L.Hamilton", "Mercedes Benz", 151);
var lotusNode = ranking.insertEnd( formula1.new( "K.Raikkonen", "Lotus", 149);
var webberNode = ranking.insertEnd( formula1.new( "M.Webber", "Red Bull Racing", 130);
var rosebergNode = ranking.insertEnd( formula1.new( "N.Roseberg", "Mercedes Benz", 116);
//to continue....
```


 
 
 
 
 
 














