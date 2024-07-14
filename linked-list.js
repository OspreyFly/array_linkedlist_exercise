/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++; // Increment length
  }
  

  /** unshift(val): add new value to start of list. */
  
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++; // Increment length
  }
  

 /** pop(): return & remove last item. */
pop() {
  if (!this.head) return null; // Early return if list is empty
  
  const lastNode = this.tail;
  let secondToLast = null;
  
  let currentNode = this.head;
  while (currentNode !== null && currentNode.next !== null) {
    secondToLast = currentNode;
    currentNode = currentNode.next;
  }
  
  if (secondToLast !== null) {
    secondToLast.next = null;
    this.tail = secondToLast;
  } else {
    this.head = null; // Handle the case where the list had only one element
    this.tail = null;
  }
  
  this.length--; // Decrement length
  
  if (this.length === 0) {
    this.head = null;
    this.tail = null;
  }
  
  return lastNode ? lastNode.val : null; // Return the value of the node or null if the list is empty
}


  

  /** shift(): return & remove first item. */
shift() {
  if (!this.head) return null; // Early return if list is empty
    
  const firstNode = this.head;
  this.head = firstNode.next;
  
  // Check if the list becomes empty after shifting
  if (!this.head) {
    this.tail = null;
  }
  
  this.length--; // Decrement length
  
  return firstNode.val; // Return the value of the removed node
}

  

  /** getAt(idx): get val at idx. */
getAt(idx) {
  if (idx < 0 || idx >= this.length) return null; // Validate index bounds

  let target = this.head;
  for (let i = 0; i < idx; i++) {
    target = target.next;
  }
  return target ? target.val : null; // Return the value of the node or null if out of bounds
}

  /** setAt(idx, val): set val at idx to val */
setAt(idx, val) {
  if (idx < 0 || idx >= this.length) return null; // Validate index bounds

  let target = this.head;
  for (let i = 0; i < idx; i++) {
    target = target.next;
  }
  
  const oldValue = target ? target.val : null; // Store the old value
  target.val = val; // Update the value at the specified index

  return oldValue; // Return the old value
}


  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    const newNode = new Node(val);

    // Special case for inserting at the beginning of the list
    if (idx === 0) {
      newNode.next = this.head;
      this.head = newNode;
      if (this.tail === null) {
        this.tail = newNode;
      }
    } else {
      let current = this.head;
      let previous = null;

      // Find the node before the insertion point
      for (let i = 0; i < idx; i++) {
        previous = current;
        current = current.next;
      }

      // Insert the new node
      newNode.next = current;
      previous.next = newNode;

      // Update tail if necessary
      if (current === this.tail) {
        this.tail = newNode;
      }
    }

    // Increment the length of the list
    this.length++;
  }
}

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    const target = this.head;
    if(idx == 0){
      this.head = target.next;
      return target;
    }else{
      for(let i = 0; i < idx; i++){
        target = target.next;
      }

    }
  }

  /** average(): return an average of all values in the list */

  average() {
    let total = 0;
    let count = 0;
    let currentNode = this.head;

    if(!this.head){
      return 0;
    }

    while(currentNode){
      count++;
      total += currentNode.val;
      currentNode = currentNode.next;
    }
    return  total / count;
  }
}

module.exports = LinkedList;
