var  DoubleLinkedNode = Base.extend({
    initialize: function(data){
        this.prev=null; // A reference to the previous node
        this.next=null; // A reference to the next node
        this.index=null;
        this.data=data; // Data or a reference to data
    }
});


var DoubleLinkedList = Base.extend({
     
     initialize : function(){
        /**
        * 
        * @type DoublyLinkedNode
        */
        this.firstNode=null;   // points to first node of list
        /**
        * 
        * @type DoublyLinkedNode
        */    
        this.lastNode=null;    // points to last node of list

        /**
         * 
         * @type Integer
         */
        this.length=0;
     },
    
    /**
     * 
     * @param {DoublyLinkedNode} node
     * @param {DoublyLinkedNode} newNode
     * @returns {DoublyLinkedNode}
     */
    insertAfter : function(node,newNode){
        newNode.prev = node;
        newNode.next = node.next;
        if (node.next === null){
            this.lastNode = newNode;
            newNode.index = node.index+1;
        }
        else{
            var n = node.next;
            while(n!==null){
                n.index++;
                n=n.next;
            }
            node.next.prev = newNode;
            newNode.index = node.index+1;
            
        }
        node.next = newNode;
        this.length++;
        return newNode;
    },
    
    /**
     * 
     * @param {Object} object
     * @param {Object} newObject
     * @returns {DoubleLinkedNode}
     */
    insertObjectAfter : function(object,newObject){
        var node = this.search(object);
        if(node===false){
            console.debug(object);
            throw "This object is not defined";
        }
        newNode = DoubleLinkedNode.new(newObject);
        this.insertAfter(node,newNode);
        return newNode;
    },
    /**
     * 
     * @param {DoublyLinkedNode} node
     * @param {DoublyLinkedNode} newNode
     * @returns {DoublyLinkedNode}
     */
    insertBefore : function(node,newNode){
        newNode.prev = node.prev;
        newNode.next = node;
        newNode.index = node.index;
        if (node.prev === null){
            this.firstNode = newNode;
        }
        else{
            node.prev.next = newNode;
        }
        node.prev = newNode;
        var n = node;
        while(n!==null){
            n.index++;
            n=n.next;
        }
        this.length++;
        return newNode;
     },
     
     /**
      * 
      * @param {Object} object
      * @param {Object} newObject
      * @returns {DoublyLinkedNode}
      */
     insertObjectBefore : function(object,newObject){
        var node = this.search(object);
        if(node===false){
            console.debug(object);
            throw "This object is not defined";
        }
        var newNode = DoubleLinkedNode.new(newObject);
        this.insertBefore(node,newNode);
        return newNode;
     },
     
    /**
     * 
     * @param {DoublyLinkedNode} newNode
     * @returns {DoublyLinkedNode}
     */ 
    insertBeginning : function(newNode){
        if (this.firstNode === null){
            this.firstNode = newNode;
            this.lastNode  = newNode;
            newNode.prev = null;
            newNode.next = null;
            newNode.index=0;
            this.length++;
            return newNode;
        }
        else{
            return this.insertBefore(this.firstNode, newNode);
        }
     },
     
     /**
      * 
      * @param {Object} newObject
      * @returns {DoublyLinkedNode}
      */
     insertObjectBeginning : function(newObject){
        var newNode = DoubleLinkedNode.new(newObject);
        this.insertBeginning(newNode);
        return newNode;
     },
     
     
     
     /**
      * 
      * @param {DoublyLinkedNode} newNode
      * @returns {DoublyLinkedNode}
      */
    insertEnd : function(newNode){
        if (this.lastNode === null){
            return this.insertBeginning(newNode);
        }
        else{
            return this.insertAfter(this.lastNode, newNode);
        }
    },
    
    /**
     * 
     * @param {Object} newObject
     * @returns {DoublyLinkedNode}
     */
    insertObjectEnd : function(newObject){
        var newNode = DoubleLinkedNode.new(newObject);
        this.insertEnd(newNode);
        return newNode;
    },
    
     /**
      * 
      * @param {DoublyLinkedNode} node
      * @returns {undefined}
      */
    remove : function (node){
        if (node.prev === null){
            this.firstNode = node.next;
        }
        else{
            node.prev.next = node.next;
        }
        if (node.next === null){
            this.lastNode = node.prev;
        }
        else{
            node.next.prev = node.prev;
        }
        var n = node.next;
        while(n!==null){
            n.index--;
            n=n.next;
        }
        this.length--;
        node=null;
        
    },
    
    
    
    /**
     * 
     * @param {Object} object
     * @returns {Boolean}
     */
    removeObject : function(object){
        var n = this.search(object);
        if(n!==false){
            this.remove(n);
            return true;
        }
        else{
            return false;
        }
    },
            /**
     * 
     * @param {integer} index
     * @returns {Boolean}
     */
    removeObjectAt : function(index){
        var n = this.getElementAt(index);
        if(n!==false){
            this.remove(n);
            return true;
        }
        else{
            return false;
        }
    },
    
    //from http://stackoverflow.com/questions/1068834/object-comparison-in-javascript
    /**
     * 
     * @param {Object} x
     * @param {Object} y
     * @returns {Boolean}
     */
    equals : function( x, y ) {
        if ( x === y ) return true;
          // if both x and y are null or undefined and exactly the same

        if ( ! ( x instanceof Object ) || ! ( y instanceof Object ) ) return false;
          // if they are not strictly equal, they both need to be Objects

        if ( x.constructor !== y.constructor ) return false;
          // they must have the exact same prototype chain, the closest we can do is
          // test there constructor.

        for ( var p in x ) {
          if ( ! x.hasOwnProperty( p ) ) continue;
            // other properties were tested using x.constructor === y.constructor

          if ( ! y.hasOwnProperty( p ) ) return false;
            // allows to compare x[ p ] and y[ p ] when set to undefined

          if ( x[ p ] === y[ p ] ) continue;
            // if they have the same strict value or identity then they are equal

          if ( typeof( x[ p ] ) !== "object" ) return false;
            // Numbers, Strings, Functions, Booleans must be strictly equal

          if ( ! Object.equals( x[ p ],  y[ p ] ) ) return false;
            // Objects and Arrays must be tested recursively
        }

        for ( p in y ) {
          if ( y.hasOwnProperty( p ) && ! x.hasOwnProperty( p ) ) return false;
            // allows x[ p ] to be set to undefined
        }
        return true;
    },
    
    /**
     * 
     * @param {Object} object
     * @returns {DoublyLinkedNode|Boolean}
     */
    search : function(object){
        var n = this.firstNode;
        while(n!==null){
            if(this.equals(n.data , object)){
                return n;
            }
            n = n.next;
        }
        return false;
    },
    getElementAt: function(index){
        if(index > (this.length+1)){
            throw "Index ouf of range";
        }
        var node = this.firstNode;
        while(node!==null){
            if(node.index === index){
                return node;
            }
            node = node.next;
        }
    }
     
 });
 
/*
var mylist = DoubleLinkedList.new();

var node1 = mylist.insertEnd(DoubleLinkedNode.new("test1"));
var node2 = mylist.insertObjectEnd("test2");
var node3 = mylist.insertEnd(DoubleLinkedNode.new({name:"test3"}));
var node4 = mylist.insertEnd(DoubleLinkedNode.new("test4"));


debug(mylist);


//mylist.remove(node3);
var success = mylist.removeObject({name:"test3"});
console.debug(success);

debug(mylist);
 
function debug(list){
    var node = list.firstNode;

    while (node !== null){
        console.debug(node);
        node = node.next;
    }

}
*/
