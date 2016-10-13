/**
 * Created by AndyOne on 10.10.2016.
 */
var
    price = +prompt("enter purchase price uah"),
    discTreshhold = 100,
    shipping,
    distance;

if (price>=discTreshhold) {
    discount = Math.round(Math.random(1)*100);
    alert("you've got a discount "+discount+"%");
}

shipping = confirm("if you pay in cash free shipping availability will be checked. Pay in cash?");
if (shipping) {
    distance = +prompt("enter shipping distance in km");
    if (distance<=30) {
        if (price<discTreshhold) alert("Congrats! You've got a free shippping. Your total order price "+price);
        else alert("Congrats! You've got a free shippping. You total order price with discount "+price*(1-discount/100));
    }
    else {
        if (price<discTreshhold) alert("Your total order price "+price+" uah. You shipping price "+(distance-30)*5+" uah");
        else alert("You total order price with discount "+price*(1-discount/100)+" uah. You shipping price "+(distance-30)*5+" uah");
    }
}
else{
    if (price<discTreshhold) alert("Your total order price "+price);
    else alert("You total order price with discount "+price*(1-discount/100));
}