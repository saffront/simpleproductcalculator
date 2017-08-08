$(document).ready(function() {
  $(".weight, .birds, .dosage").keyup(function(){
   var weightObj = $(this).parent().parent().find(".weight");
   var birdsObj = $(this).parent().parent().find(".birds");
   var dosageObj = $(this).parent().parent().find(".dosage");

   if (weightObj.val() !== "" && birdsObj.val() !== "")
     {
       $(this).parent().parent().find(".total").val(parseInt(weightObj.val()) * parseInt(birdsObj.val()) * parseInt(dosageObj.val()) );
     }

   // Update the grant total;
   var total = 0;
   $(".total").each(function(i,e){
     if (e.value !== "")
       total += parseInt(e.value);
   });
 });

 var options = {
  valueNames: [ 'name' ]
};

var userList = new List('users', options);
});
