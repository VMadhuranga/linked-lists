/* eslint-disable no-console */
/* eslint-disable max-classes-per-file */

// NOTE: if you want log inside terminal turn private fields into public fields in Node class

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

  tail() {
    const tempArray = [];

    let temp = this.#list;

    while (temp.NextNode !== null) {
      tempArray.push(temp);
      temp = temp.NextNode;
    }

    tempArray.push(temp);

    return tempArray[tempArray.length - 1];
  }

  at(index) {
    const tempArray = [];

    let temp = this.#list;

    while (temp.NextNode !== null) {
      tempArray.push(temp);
      temp = temp.NextNode;
    }

    tempArray.push(temp);

    return !tempArray[index] ? "Element not found" : tempArray[index];
  }

  pop() {
    const tempArray = [];

    let temp = this.#list;

    while (temp.NextNode !== null) {
      tempArray.push(temp);
      temp = temp.NextNode;
    }

    temp = tempArray[tempArray.length - 1];
    temp.NextNode = null;
  }

  contains(data) {
    let temp = this.#list;

    while (temp.NextNode !== null) {
      temp = temp.NextNode;
      if (temp.Data === data) {
        return true;
      }
    }

    return false;
  }

  find(data) {
    const tempArray = [];

    let temp = this.#list;

    while (temp.NextNode !== null) {
      tempArray.push(temp);
      temp = temp.NextNode;
    }

    const index = tempArray.findIndex((element) => element.data === data);

    return index === -1 ? null : index;
  }

  toString() {
    const tempArray = [];

    let temp = this.#list;

    while (temp.NextNode !== null) {
      tempArray.push(temp.Data);
      temp = temp.NextNode;
    }

    tempArray.push(temp.Data);
    tempArray.push(`${temp.NextNode}`);

    return tempArray.join(" -> ");
  }

  insertAt(data, index) {
    if (this.#list === null || index === 0) {
      this.prepend(data);
      return;
    }
    const node = new Node(data);

    if (this.at(index) !== "Element not found") {
      const nodeAtCurIndex = this.at(index);
      const nodeAtPreIndex = this.at(index - 1);
      node.NextNode = nodeAtCurIndex;
      nodeAtPreIndex.NextNode = node;
      return;
    }

    console.log(this.at(index));
  }
}

const newList = new LinkedList();

// append and prepend data
// newList.append("hello1");
// newList.append("hello2");
// newList.append("hello3");
// newList.prepend("hello4");
// newList.prepend("hello5");
// newList.prepend("hello6");

// check for list size
// console.log(newList.size());

// check for first element in list
// console.log(newList.head());

// check for last element in list
// console.log(newList.tail());

// check for element at given index
// console.log(newList.at(2));

// remove last element from list
// newList.pop();

// check list size after removal
// console.log(newList.size());

// append and prepend new values
// newList.append("helloA");
// newList.prepend("helloB");

// // check list contains passed data
// console.log(newList.contains("helloZ"));

// // find index of element contains data
// console.log(newList.find("hello1"));

// newList.insertAt("helloP", 1);
// // log list data
// console.log(newList.toString());
