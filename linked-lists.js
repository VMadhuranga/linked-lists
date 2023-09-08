/* eslint-disable no-console */
/* eslint-disable max-classes-per-file */
class Node {
  #data;

  #nextNode;

  constructor(data, nextNode = null) {
    this.#data = data;
    this.#nextNode = nextNode;
  }

  get Data() {
    return this.#data;
  }

  get NextNode() {
    return this.#nextNode;
  }

  set NextNode(node) {
    this.#nextNode = node;
  }
}

class LinkedList {
  #list = null;
}

const newList = new LinkedList();

console.log(newList);
