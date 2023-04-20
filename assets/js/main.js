function sortOfNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        // var teklik=arr%10;
        // arr=(arr-teklik)/10;
        for (let j = 0; j < arr.length; j++) {
            if(arr[i]==arr[j+1] && arr[i+1]==arr[j]) {
                  return true;         
            }
        }
       return false;
    }
}
alert(sortOfNumber([1254]))