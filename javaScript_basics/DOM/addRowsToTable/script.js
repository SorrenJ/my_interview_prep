function insert_Row(){
    var x=document.getElementById('sampleTable').insertRow(0);
    
    // insert cell in the 1st column
    var y = x.insertCell(0);
    y.innerHTML="New Cell1";

//    insert cell in the second columnn
    var z = x.insertCell(1);
    z.innerHTML="New Cell2";


    //    insert cell in the third columnn
    var c = x.insertCell(2);
    c.innerHTML="New Cell3";


        //    insert cell in the 5th columnn dont work - needs to be consecutive
        var j = x.insertCell(4);
        j.innerHTML="New Cell5";
}