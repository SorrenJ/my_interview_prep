
/*

Linked List Traversal: In the previous program, we have 
created a simple linked list with three nodes. 
Let us traverse the created list and print the data of each node. 
For traversal, let us write a general purpose function printList() that prints any given list.

Output:  10 20 30 40

*/


class Node {
    constructor()
    {
        this.value;
        this.next = null;
    }
 
    setter(nodeValue) {
        this.value = nodeValue;
    }
}

function printlist(head) {
    let curr=head;
    let string = " ";
    while(curr!==null){
        string += curr.value + " ";
        curr=curr.next;
    }
    return string;
}


let head=new Node();
head.setter(10);
head.next=new Node();
head.next.setter(20);
head.next.next=new Node();
head.next.next.setter(30);
head.next.next.next=new Node();
head.next.next.next.setter(40);
console.log(printlist(head));