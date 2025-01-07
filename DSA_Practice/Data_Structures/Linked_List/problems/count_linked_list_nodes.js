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

class Solution {
    // Function to count nodes of a linked list.
    getCount(head) {
        // Initialize the count to 0
        var count = 0;

        // Initialize the current node to the head of the list
        let curr = head;

        // Traverse the linked list
        while (curr !== null) {
            // Increment the count for each node
            count++;

            // Move to the next node
            curr = curr.next;
        }

        // Return the total count
        return count;
        
    }
}



// Create an instance of the Solution class
let solution = new Solution();

// Get the count of nodes
let nodeCount = solution.getCount(head);

// Display the count of nodes
console.log("The count of nodes in the linked list is: " + nodeCount);