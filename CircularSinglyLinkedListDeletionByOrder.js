/**
 * Create and delete elements of a circular linked list
 * and print the elements by the order of deletion
 * input: 1,2,3,4,5,6
 * order: 2
 * output: 2,4,6,3,1,5
 */

let start  =  null;
class ListItem{
  constructor(value){
    this.value = value;
  }
}

function addNodeToList(newNode){
  if(start == null) start = newNode;
  else if(start.next == start) start.next = newNode;
  else {
    let current = start;
    while(current.next != start) current = current.next;
    current.next = newNode;
  }
  newNode.next = start;
}
function printListItems(start){
  if(start == null) return console.log("Empty list!!");
  let current = start;
  do{
    console.log(current.value)
    current = current.next;
  }while(current != start);
}
function deleteNPrintByOrder(order, start){
  let index = 1;
  current = start;
  prev = start;
  while(current != null){
    console.log(`index: ${index}`);
    if(index % order == 0 ) {
      prev.next = current.next;
      console.log(`-------------------Deleted item val: ${current.value}`);
        
    }
    else prev = current;
    
    if(!confirm("DO u want to continue" )) break;
    //if(prev.next == start ) break;//current = null;
    else {
    current = current.next;
    if(current == prev){
      console.log(`-------------------Deleted item val: ${current.value}`);
      current = null; start = null;
      printListItems(start);
      break;
    }
    
    index++;
    }
    console.log(current)
  }
}

//add list items to list
for(i = 1 ;i <= 6; i++) addNodeToList(new ListItem(i));
console.log("******************LIST ITEMS*********************"); 
printListItems(start);
console.log("*************************************************");
deleteNPrintByOrder(3, start);
