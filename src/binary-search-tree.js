const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

/* class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
} */
class BinarySearchTree {

  constructor() {
    this.head = null;
  }

  root() {
    return this.head;
  }

  add(data) {
    this.head = addData(this.head, data);

    function addData(node, data) {
      if(!node) return new Node(data);

      if (node.data === data) return node;
      if (data < node.data) node.left = addData(node.left, data);
      else node.right = addData(node.right, data);

      return node;
    }
  }

  has(data) {
    return searchNode(this.head, data);

    function searchNode(node, data) {
      if(!node) return false;

      if(node.data === data) return true;

      if (data < node.data) return searchNode(node.left, data);
      else return searchNode(node.right, data);
    }
  }

  find(data) {
    return searchAndReturnNode(this.head, data);

    function searchAndReturnNode(node, data) {
      console.dir(node);
      if(!node) return null;

      if(node.data === data) return node;

      if (data < node.data) return searchAndReturnNode(node.left, data);
      else return searchAndReturnNode(node.right, data);
    }
  }
/*   remove(value) {
    this.head = removeNode(this.head, value);

    function removeNode(node, value) {
      if (!node) {
        return null;
      }

      if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (node.data < value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        // equal - should remove this item
        if (!node.left && !node.right) {
          // put null instead of item
          return null;
        }

        if (!node.left) {
          // set right child instead of item
          node = node.right;
          return node;
        }

        if (!node.right) {
          // set left child instead of item
          node = node.left;
          return node;
        }

        // both children exists for this item
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  } */
  remove(data) {
    this.head = removeNode(this.head, data);

    function removeNode(node, data) {
      if(!node) return null;

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) return null;
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let maxFromLeft = node.left;
        while (maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right;
        }
        node.data = maxFromLeft.data;
        node.left = removeNode(node.left, maxFromLeft.data);
        return node;
      }
    }
  }

  min() {
    if (!this.head) return;

    let node = this.head;

    while (node.left) {
      node = node.left
    }

    return node.data;
  }

  max() {
    if (!this.head) return;

    let node = this.head;

    while (node.right) {
      node = node.right
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};