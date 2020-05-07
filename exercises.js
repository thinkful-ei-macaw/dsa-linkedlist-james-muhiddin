class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }                         //idx        //item
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) { 
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item 
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
           and the item is not on the list */
      if (currNode.next === null) {
        return null;
      }
      else {
        // Otherwise, keep looking 
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }

  remove(item){ 
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      // Save the previous node 
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

  insertAfter(nodeExist, itemToInsert) {
    //find the node
    let foundNode = this.find(nodeExist);

    if (foundNode === null) {
      console.log('not found');
      return;
    }

    let currNode = this.head;

    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== foundNode.value)) {
      previousNode = currNode;
      currNode = currNode.next;
    }

    let next = currNode.next;

    let nextnext = next.next;

    currNode.next = new _Node(itemToInsert, nextnext);

    return currNode;
  }


  insertBefore(itemToInsert, itemBefore) {
    if (null === this.head || itemBefore === this.head.value) {
      this.insertFirst(itemToInsert);
    } else {

      let currNode = this.head;
      let previousNode = null;
      while ((currNode !== null) && (currNode.value !== itemBefore)) {
        // Save the previous node 
        previousNode = currNode;
        currNode = currNode.next;
      }
      if (null !== currNode) {
        previousNode.next = new _Node(itemToInsert, itemBefore);
      } else {
        this.insertLast(itemToInsert);
      }
    }
  }
}
  




  
function main() {
  const SLL = new LinkedList();

  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  //   SLL.remove('squirrel'); // Item not found

  ///console.log(SLL.find('Boomer'));
  console.log(SLL.insertBefore('Athena', 'Boomer'));
  console.log(SLL);

  //Appollo - Boomer - Athena - Helo - null
  //After - Item - Before

  
}

main();