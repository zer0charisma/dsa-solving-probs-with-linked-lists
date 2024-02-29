/**
 * Given a list and two nodes, swap the position of the two nodes
 * @param {LinkedList} list
 * @param {Node} x
 * @param {Node} y
 * 
 * pseudocode:
 * function swap
  // accepts list - a linked list
             x - a node in the linked list
             y - a node in the linked list

  if the list is empty then
    return  the list

  declare a variable x_next and initialize it to the next pointer of x
  declare a variable x_prev and initialize it to the previous node to x, null if x is the head
  declare a variable y_prev and initialize it to the previous node to y, null if y is the head

  set the next pointer of x to the next pointer of y
  set the next pointer of y to x_next

  if x is not the head  of the list then
    set next pointer of x_prev to y
  else
    set head to y

  if y is not the head  of the list then
    set next pointer of y_prev to x
  else
    set head to x

  return the list
 */
function swap(list, x, y) {
    // handle edge cases
  if (!list.head || x === y) return;

  // get previous nodes of x and y
  let prevX = null;
  let curr = list.head;
  while(curr && curr !== x) {
    prevX = curr;
    curr = curr.next;
  }

  let prevY = null;
  curr = list.head;
  while(curr && curr !== y) {
    prevY = curr;
    curr = curr.next;
  }

  // swap links
  if (prevX) {
    prevX.next = y;
  } else {
    list.head = y;
  }

  if (prevY) {
    prevY.next = x;
  } else {
    list.head = x;
  }

  // swap next pointers
  let temp = x.next;
  x.next = y.next;
  y.next = temp;
}

module.exports = swap;
