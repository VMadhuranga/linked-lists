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

  size() {
    const tempArray = [];

    let temp = this.#list;

    while (temp.NextNode !== null) {
      tempArray.push(temp);
      temp = temp.NextNode;
    }

    tempArray.push(temp);

    return tempArray.length;
  }

  head() {
    const tempArray = [];

    let temp = this.#list;

    while (temp.NextNode !== null) {
      tempArray.push(temp);
      temp = temp.NextNode;
    }

    tempArray.push(temp);

    return tempArray[0];
  }
}

const newList = new LinkedList();

// append and prepend data
newList.append("hello1");
newList.append("hello2");
newList.append("hello3");
newList.prepend("hello4");
newList.prepend("hello5");
newList.prepend("hello6");

// check for list size
console.log(newList.size());

// check for first element in list
console.log(newList.head());
