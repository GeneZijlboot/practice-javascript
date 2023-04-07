function FirstWay()
{
    const productlist = ["eggs", "milk", "bread", "grapes", "tomatos"];

    // finding the position of 'grapes' in the array
    productlist.indexOf('grapes');

    // first place = starting position based on index0f
    // second place = indicates how many items we want to remove
    productlist.splice(productlist.indexOf('grapes'),1);

    console.log(productlist);
}
FirstWay(); //prints the array without 'grapes' in the console