function ReverseString(string){
    let reverse_string = "";
    for(let i=string.length-1;i>=0;i--){
        reverse_string += string[i];
    }
    console.log("The reversed string is = ",reverse_string);

}

ReverseString("raiden");