function palindromes (temp) {
    let ReverseTemp = temp.toLowerCase().replace(/[^a-z]/g, "")
    return ReverseTemp.split("").reverse().join("");
}

palindromes("racecar"); //True
palindromes("racecar!"); //True
palindromes("Racecar!"); //True 
palindromes("A car, a man, a maraca."); //True
palindromes("Animal loots foliated detail of stool lamina."); //True
palindromes("ZZZZ car, a man, a maracaz."); //False
palindromes("rac3e3car"); //True
