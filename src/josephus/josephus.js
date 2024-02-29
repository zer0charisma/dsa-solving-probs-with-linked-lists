/**
 * Pseudocode: 
function josephus
  // Accepts: list the LinkedList of names
              m the number to skip

  declare variable node and initialize it to the head
  declare variable tail and initialize it to the last node in the list
  assign the next pointer of the tail to the head of the list

  while there are more than one nodes left do:
    move node to node.next m times
    if the next pointer of the current node points to the head
      set the head to the next node after the head
    set node.next  to  node.next.next
    node = node.next;
  }
  return node.value;
}
 */

function josephus(list, m) {
    let current = list.head;

  while(list.length > 1) {
    for(let i = 1; i < m; i++) {
      current = current.next;
      if(current === null) {
        current = list.head;
      }
    }
    current.next = current.next.next;
    if(current.next === null) {
      return current.value;
    }
    current = current.next;
  }

  return current.value;
}

module.exports = josephus;
