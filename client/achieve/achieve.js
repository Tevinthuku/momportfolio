if (Meteor.isClient) {

 Template.achieve.onRendered(function () {
 // the 
     $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
 
}); 


 Template.academic.onRendered(function () {
 // the 
     $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
 
}); 

 Template.bio.onRendered(function () {
$('select').material_select();
 
});

}