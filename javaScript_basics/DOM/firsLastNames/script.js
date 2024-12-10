function getFormvalue() {
     // Retrieving form element with id 'form1'
  var x=document.getElementById("form1");
  // Looping through form elements
  for (var i=0;i<x.length;i++)
  {
    // Checking if element value is not 'Submit'
    if (x.elements[i].value!='Submit')
    {  
      // Logging element value to console
      console.log(x.elements[i].value);
    }  
  }
}