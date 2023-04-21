var nums = prompt("rəqəm daxil edin")

function PalindromNumber (nums){
    var x, y, nums = 0;
    y = nums;

    while(nums > 0)
    {
        a = nums % 10;
        nums = (nums % 10);
        nums = nums * 10 +a;
    }

    if(nums == y)
    {
        console.log("palindrom ədəddir");
    }
    else{
        console.log("palindrom eded deyil");
    }
}

// PalindromeNumber(1221; 55; 47874)