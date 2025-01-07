/* 

A linked list is represented by a pointer to the first node of the linked list. The first node is called the head node of the list. If the linked list is empty, then the value of the head node is NULL.

Each node in a list consists of at least two parts:
 

data
Pointer (Or Reference) to the next node

Output: 10-->20-->30

*/

class Node{
    constructor() {
        this.data;
        this.next = null;
    }
    
    setter(x){
        this.data=x;
    }
}

let head=new Node();
head.setter(10);
let temp1=new Node();
temp1.setter(20);
let temp2=new Node();
temp2.setter(30);
head.next=temp1;
temp1.next=temp2;
console.log(head.data + "-->" + temp1.data + "-->" + temp2.data);