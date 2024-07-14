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
    this.length++;
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
    this.length++; 
  }
  

  /** pop(): return & remove last item. */
  pop() {
    if (!this.head) return null;
  
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
      this.head = null; 
      this.tail = null;
    }
  
    this.length--; 
  
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  
    return lastNode ? lastNode.val : null; 
  }


  

  /** shift(): return & remove first item. */
  shift() {
    if (!this.head) return null; 
    
    const firstNode = this.head;
    this.head = firstNode.next;
  
    
    if (!this.head) {
      this.tail = null;
    }
  
    this.length--; 
  
    return firstNode.val; 
  }

  

  /** getAt(idx): get val at idx. */
getAt(idx) {
  if (idx < 0 || idx >= this.length) return null; 

  let target = this.head;
  for (let i = 0; i < idx; i++) {
    target = target.next;
  }
  return target ? target.val : null; 
}

  /** setAt(idx, val): set val at idx to val */
  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) return null; 

    let target = this.head;
    for (let i = 0; i < idx; i++) {
      target = target.next;
    }
    
    const oldValue = target ? target.val : null; 
    target.val = val; 

    return oldValue;
  }


  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    const newNode = new Node(val);

    if (idx === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.tail = newNode; 
    } else {
      let current = this.head;
      let previous = null;

      for (let i = 0; i < idx; i++) {
        previous = current;
        current = current ? current.next : null; 
      }

      newNode.next = current;
      if (previous) {
        previous.next = newNode;
      } else {
        this.head = newNode; 
      }

      if (!current || !current.next) { 
        this.tail = newNode;
      }
    }

    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx === 0) {
      const oldHead = this.head;
      this.head = this.head ? this.head.next : null;
      if (!this.head) {
        this.tail = null;
      }
      this.length--;
      return oldHead;
    } else {
      let current = this.head;
      let previous = null;
      for (let i = 0; i < idx; i++) {
        previous = current;
        current = current ? current.next : null;
      }
      if (!current) {
        throw new Error('Index out of bounds');
      }
      previous.next = current.next;
      this.length--;
      if (current === this.tail) {
        this.tail = previous;
      }
      return current;
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
