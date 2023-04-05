console.log("TEST");

//one way to reapet a string = .repeat(3)
function repeatme()
{
    let string = "hey";
    let repeat = string.repeat(3);
    console.log(repeat);  
}

repeatme();

//second way to reat a string = with a loop

function repeatString(word, times)
{
    let string = "";

    for(let i = 0; i < times; i++)
    {
        string += word;
    }
    return string;
}

repeatString();

//third way to reat a string = with a loop
function secondrepeatme()
{
    let string = "hey"
    let times = 3;

    for(let i = 0; i <= times; i++)
    {
        console.log(string, i);
    }
}

secondrepeatme();