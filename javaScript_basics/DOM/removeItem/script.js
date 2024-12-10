function removecolor(){
   var x =  document.getElementById("colorSelect");

   x.remove(x.selectedIndex);
   console.log(`The selectedIndex is ${x.selectedIndex}`);
}

/* 

selectedIndex is a property of 
the <select> element that represents the index of the selected <option>.



Behavior:
Value Returned:

The selectedIndex returns the zero-based index of the selected option. For example:
First option: selectedIndex = 0
Second option: selectedIndex = 1
If no options are selected, selectedIndex is -1.
Set Behavior:

Assigning a value to selectedIndex will change the selected option to the one at the specified index.




*/