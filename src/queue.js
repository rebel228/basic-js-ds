const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */


class Queue {
  constructor(value) {
    this.head;
    this.Node = class {
      constructor(value) {
        this.value = value;
        this.next = null;
      }
    }
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    if (!this.head) this.head = new this.Node(value);
    else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = new this.Node(value);
    }
  }

  dequeue() {
    let res = this.head.value;
    this.head = this.head.next;
    return res;
  }

}



module.exports = {
  Queue
};
