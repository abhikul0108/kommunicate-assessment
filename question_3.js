//Write a javascript function that prints the reverse of a number

//JS function
function reverse(num) {
    let number = Math.abs(num);
    let arr = number.toString().split("");
    let reversed = arr.reverse().join("");
    if(num<0) {
        return -1 * reversed;
    }
    return reversed;
}
//Driver Code for printing output

console.log(reverse(-123));
