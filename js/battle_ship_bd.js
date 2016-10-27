/**
 * Created by AndyOne on 28.10.2016.
 */
window.onload = init;
function init(){

    //helper functions section

    getId = function (id) {
        var getId = document.getElementById(id);
        return getId;
    }

    getTagname = function (tag) {
        var getTagname = document.getElementsByTagName(tag);
        return getTagname;
    }

    var shot = 0;
    var hit = 0;
    var td = getTagname("td");

    //shooting via mouse start

    for (var i=0;i<td.length; i++){
        td[i].onclick = function(){
            if (this.innerHTML=="") {
                this.innerHTML="<span class='glyphicon glyphicon-remove'></span>";
                getId('message').innerHTML = "MISS! SHOTS: "+(++shot)+" / HITS: "+(hit);;
                getId('message').style.backgroundColor = "red";
            }
            else if (this.innerHTML[1] == "i") {
                this.innerHTML ="<i class='fa fa-ship' style='font-size:36px; display: block; color:green;'></i>";
                getId("message").innerHTML = "HIT! SHOTS: "+(++shot)+" / HITS: "+(++hit);
                getId('message').style.backgroundColor = "green";
                if (hit==21) alert("All ships is sunked! You need only "+shot+" to do it!");
            }
        }
    }

    //shooting via mouse finish

    //MVC section - shooting via entering coordinates

    view = {

        displayMessage: function(){
            getId("Fire").onclick = function(){
                controller.obtainGuess = getId('field').value; // obtain guess from user
                if (td[controller.guessTransform()].innerHTML==""){
                    getId('message').innerHTML = "MISS! SHOTS: "+(++shot)+" / HITS: "+(hit);
                    getId('message').style.backgroundColor = "red";
                    td[controller.guessTransform()].innerHTML = "<span class='glyphicon glyphicon-remove'></span>";
                }
                else {
                    getId("message").innerHTML = "HIT! SHOTS: "+(++shot)+" / HITS: "+(++hit);
                    getId('message').style.backgroundColor = "green";
                    td[controller.guessTransform()].innerHTML = "<i class='fa fa-ship' style='font-size:36px; display: block; color:green;'></i>";
                    if (hit==21) alert("All ships is sunked! You need only "+shot+" to do it!");
                }
            }
        }
    };

    controller = {
        obtainGuess: "",
        guessTransform: function(){ // transforming F3 --> 13 --> number of td - 38
            var firstSymbol = this.obtainGuess[0];
            var secondSymbol = +this.obtainGuess[1];
            var q = model.alphabet.indexOf(firstSymbol);
            var res;
            switch (q) {
                case 0: res = 42+secondSymbol;
                    break;
                case 1: res = 35+secondSymbol;
                    break;
                case 2: res = 28+secondSymbol;
                    break;
                case 3: res = 21+secondSymbol;
                    break;
                case 4: res = 14+secondSymbol;
                    break;
                case 5: res = 7+secondSymbol;
                    break;
                case 6: res = secondSymbol;
                    break;
            }
            return res;
        }
    };

    model = {

        alphabet: ["G", "F", "E", "D", "C", "B", "A"], //auxilary array for transforming coordinates into td number
        shipPos: function(){ //the way how ships on the battle field need to be situated
            for (var i=0;i<td.length; i++){
                if (i==0 || i==7 || i==14 || i==21 || i==28 || i==35 || i==42) {
                    var k = Math.round(Math.random()*4);
                    td[i+k].innerHTML ="<i class='fa fa-ship' style='font-size:36px; display: none; color:lightblue;'></i>";
                    td[i+k+1].innerHTML ="<i class='fa fa-ship' style='font-size:36px; display: none; color:lightblue;'></i>";
                    td[i+k+2].innerHTML ="<i class='fa fa-ship' style='font-size:36px; display: none; color:lightblue;'></i>";
                }

            }
        }


    };

    //Action section

    model.shipPos();
    view.displayMessage();

    //Restart function
    getId('btn').onclick = function(){
        for (var i=0;i<td.length; i++) td[i].innerHTML ="";
        shot = 0;
        hit = 0;
        model.shipPos();
    }
}
