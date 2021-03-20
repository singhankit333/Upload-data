$("body").height(window.innerHeight-10);
var items = $("#items");

var SNo = 0;

$("form button").click(function(e) {
    
    let rollVal = $("#roll").val();
    let nameVal = $("#name").val();
    let marksVal = $("#marks").val();
    
    e.preventDefault();
    
    if(rollVal === "" || nameVal === "" || marksVal === "") {
        alert("Please fill all the fields");
    } 
    else {
        SNo++;
        let item = '<div class="items">' + SNo + '.)  &nbsp Roll no - <span class="highlight">' + rollVal + 
        '</span> , <span class="highlight">' + nameVal + '</span> have got <span class="highlight">'
         + marksVal + '</span> marks</div>';

        items.append(item);
        
        roll.val("");
        name.val("");
        marks.val("");
    }
});
