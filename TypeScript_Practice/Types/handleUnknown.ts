/* Create a function handleUnknown that takes a parameter 
of type unknown and performs the following:
If the parameter is a string, return the string in uppercase.
If the parameter is a number, return the number doubled.
For other types, return "Unsupported type".
*/

type Unknown = string | number;


function handleUnknown(para:Unknown) {

// switch (para) {
//     case typeof String:
// return para.toUpperCase();
// case typeof Number:
//     let doubled = para * 2;
//     return doubled;

// }

if (typeof para === "string" ){
    return para.toUpperCase();
} else if (typeof para === "number" ){
    return para*2;
} else {
    return 'Unsupported type'
}

}



console.log(handleUnknown(10))
console.log(handleUnknown("sorren"))

