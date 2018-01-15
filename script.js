for (var i=1; i <= 20; i++)
{
    if (i % 15 == 0)
        console.log("FizzBuzz"); // bo NWW dla 3 i 5 to 15 
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
};
