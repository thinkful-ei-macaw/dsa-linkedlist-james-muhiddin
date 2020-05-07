class _Node {
  constructor(data, next, prev) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head, this.tail);
  }

  insertLast(item) {
    // create the new node and place the data in it
    const newNode = new DoubleLinkedList(item);
              
    // special case: no nodes in the list yet
    if (this.head === null) {
      this.head = newNode;
    } else {
      // link the current tail and new tail
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    // reassign the tail to be the new node
    this.tail = newNode;
  
  }

  insertBefore(item) {
    
  }

  insertAfter(item) {

  }

  insertAt(item) {

  }

  remove(item) {

  }

  find(item) {

  }
}

//this function reverses a doubly linked list
function reverseDLL(lst) {
  return '';
}

function mainDLL() {
//create new double linked list
//add tuaron to the list
//remove picon from the list
  const DLL = new DoubleLinkedList();
  DLL.insertLast('Aquaria');
  DLL.insertLast('Caprica');
  DLL.insertLast('Gemenon');
  DLL.insertLast('Picon');
  DLL.insertLast('Sagittaron');
  
  console.log(DLL);
}

mainDLL();