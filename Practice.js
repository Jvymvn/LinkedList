class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // functions to be implemented 
    // add(element) 
    // insertAt(element, location) 
    // removeFrom(location) 
    // removeElement(element) 

    // Helper Methods 
    // isEmpty 
    // size_Of_List 
    // PrintList 

    append(value) {
        if (this.head === null) {
            this.head = new Node(value, this.head);
        } else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new Node(value, null);
        }
        this.size++;
    }

    insertAt(value, index) {
        if (index > 0 && index > this.size) {
            return false;
        }
        else {
            //create new node
            let node = new Node(value);
            let curr, prev;

            curr = this.head;

            //add the element to the
            //first index
            if (index == 0) {
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                let it = 0

                //iterate over the list to find
                //the position to insert
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                //adding an element
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }

    removeFromIndex(index) {
        if (index > 0 && index > this.size) {
            return -1;
        }
        else {
            let curr, prev, it = 0;
            curr = this.head;
            prev = curr;

            //deleting first element
            if (index === 0) {
                this.head = curr.next;
            } else {
                //iterate over the list to the
                //position to remove an element
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                //remove the element
                prev.next = curr.next;
            }
            this.size--;

            //return the removed element
            return curr.value;
        }
    }

    removeByValue(value) {
        let current = this.head;
        let prev = null;

        //iterate over the list
        while (current != null) {
            //comparing value with current
            //node if found then remove the node
            //and return true
            if (current.value === value) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.value;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }

    //find index of value
    indexOf(value) {
        let count = 0;
        let current = this.head;

        while (current != null) {
            //compare each element of the list
            //with given element
            if (current.value === value) {
                count++;
                current = current.next;
                return count;
            }
        }
        return -1;
    }

    isEmpty() {
        return this.size == 0;
    }

    size_of_list() {
        console.log(this.size);
    }

    displayList() {
        let currNode = this.head;
        while (currNode !== null) {
            console.log(currNode.value);
            currNode = currNode.next;
        }
    }

    removeDuplicates() {
        let previous = this.head;
        let current = this.head.next;
        let container = {};

        while (current != null) {
            if (!container[current.value]) {
                container[current.value] = true;
            } else {
                previous.next = current.next;
                this.size--;
            }
            previous = current;
            current = current.next;
        }
    }
}


function main() {
    let LL = new LinkedList();
    //testing isEmpty on empty list
    console.log(LL.isEmpty());

    //adding element to the list
    LL.append(10);
    LL.append(11);
    LL.append('A');
    LL.append('A');
    //remove duplicates
    LL.removeDuplicates();
    //prints 10 11 A
    LL.displayList();
    //
    LL.size_of_list();
    //Insert 60 at head
    LL.insertAt(60, 0);
    LL.displayList();
}

main();