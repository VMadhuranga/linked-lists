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

  prepend(data) {
    this.#list = new Node(data, this.#list);
  }

  append(data) {
    if (this.#list === null) {
      this.prepend(data);
      return;
    }

    let temp = this.#list;

    while (temp.NextNode !== null) {
      temp = temp.NextNode;
    }

    temp.NextNode = new Node(data);
  }
}

const newList = new LinkedList();

console.log(newList);
