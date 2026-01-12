var num1 = document.getElementById('X');
var num2 = document.getElementById('Y');

var result = document.getElementById('result');
var form = document.getElementById('calcForm');

form.addEventListener('submit', function(event) {
    
    var x = parseFloat(num1.value);
    var y = parseFloat(num2.value);

    if(!num1.value || !num2.value){
        alert("Please enter all values!");
        
    } else {

        result.innerText = "Result: " + (x/y) * 100 + "%";
        event.preventDefault();
    }
});

