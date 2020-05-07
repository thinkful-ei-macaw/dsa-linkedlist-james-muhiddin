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
      }                        
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

  insertBefore(itemToInsert, itemBefore) {
    if (this.head === null || this.head.value === itemBefore) {
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
        previousNode.next = new _Node(itemToInsert, currNode);
      } else {
        this.insertLast(itemToInsert);
      }
    }
  }

  insertAfter(itemBefore, itemToInsert) { 
    if (this.head === null) 
      this.insertFirst(itemToInsert);
    else {
  
      let new_node = new _Node(itemToInsert); 
      let prev_node = this.find(itemBefore);  

      new_node.next = prev_node.next; 
      prev_node.next = new_node; 
    } 

  }


  insertAt(itemToInsert, position) {
    //create new node.
    let node = new _Node();
    node.value = itemToInsert;
    node.next = null;

    if (this.head === null) {
      //if head is null and position is zero then exit.
      if (position !== 0) {
        return;
      } else { //node set to the head.
        this.head = node;
      }
    }

    if (this.head !== null && position === 0) {
      node.next = this.head;
      this.head = node;
      return;
    }

    let current = this.head;
    let previous = null;

    let i = 0;

    while (i < position) {
      previous = current;
      current = current.next;
      if (current === null) {
        break;
      }
      i++;
    }

    node.next = current;
    previous.next = node;
  }
  

}

function display(linkedList) {
  let arr = [];
  if(linkedList.head.value === null) {
    return [];
  }
  //while 
  let current = linkedList.head;
  while(current !== null) {
    arr.push(current.value);
    current = current.next;
  }
  return arr;
}

function size(linkedList) {
  console.log('Size:', display(linkedList).length);
}

function isEmpty(linkedList) {
  return linkedList.head === null;
}

//Boomer
function findPrevious(linkedList, item) {
  if(linkedList.head === null || linkedList.head.next === null) {
    return;
  }
  let previousNode = linkedList.head;
  let currentNode = linkedList.head;
  while(currentNode.value !== item) {
    previousNode = currentNode;
    currentNode = currentNode.next;
  }
  return previousNode;
}

function findLast(linkedList) {
  if(linkedList.head === null || linkedList.head.next === null) {
    return linkedList.head;
  }
  let previousNode = linkedList.head;
  let currentNode = linkedList.head;
  while(currentNode !== null) {
    previousNode = currentNode;
    currentNode = currentNode.next;
  }
  return previousNode;
}

function WhatDoesThisProgramDo(lst) {  // O(n^2)
  let current = lst.head;
  while (current !== null) {
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      }
      else {
        newNode = newNode.next;
      }
    }
    current = current.next;
    console.log(current);
  }
  
}
// ex5 
function reverseList(lst) { // O(n) 
  if(lst.head === null) {
    return;
  }
  let pointer = lst.head;
  let prev = null, current = null;
  while(pointer) {
    current = pointer;
    pointer = pointer.next; //
    current.next = prev; 
    prev = current;
  }
  lst.head = current;
  return lst;
}
  
function thirdFromEnd(lst) {
  // if(lst.head === null) {
  //   return;
  // }
  // let newLst = reverseList(lst);
  let item =  display(lst);

  let third = item[item.length - 3];

  if (third === undefined) {
    console.log('3rd item not found from lst');
    return;
  }
  console.log(third);
  return third;
}

function findMiddle(lst) {
  let slow_ptr = lst.head; 
  let fast_ptr = lst.head; 
  if (lst.head !== null) 
  { 
    while (fast_ptr !== null && fast_ptr.next !== null) 
    { 
      fast_ptr = fast_ptr.next.next; 
      slow_ptr = slow_ptr.next; 
    } 
    console.log('The middle element is [' + slow_ptr.value + '] \n'); 
  } 
}

function cycleList(lst) {
  if(!this.head) {
    return null;
  }
  let slow = lst.head; 
  let fast = lst.head; 
  
  while(slow !== null && fast !== null && fast.next !== null) { 
    fast = fast.next.next; 
    slow = slow.next; 
    if(slow === fast)
      return 'This linked list has a cycle';
  }
  return 'This linked list does not have a cycle';   
}

function main() {
  
  const CycleList = new LinkedList();
  CycleList.insertFirst('First');
  CycleList.insertLast('Second');
  CycleList.insertLast('Third');
  CycleList.insertLast('Fourth');
  CycleList.find('Fourth').next = CycleList.find('Second');
  
  const SLL = new LinkedList();
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  SLL.insertBefore('Athena', 'Boomer');
  // SLL.insertAfter('Helo', 'Hotdog');
  // SLL.insertAt('Kat', 3);
  // SLL.remove('Tauhida');

  
  
  // display(SLL);
  // size(SLL);
  // console.log(isEmpty(SLL));
  // console.log(findPrevious(SLL, 'Starbuck'));
  //console.log(findLast(SLL));

  //WhatDoesThisProgramDo(SLL);

  //display(reverseList(SLL));
  //thirdFromEnd(SLL);
  //findMiddle(SLL);
  console.log(cycleList(CycleList));
  

}



main();