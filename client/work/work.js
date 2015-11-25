if (Meteor.isClient) {

 Template.work.onRendered(function () {
 // the 
     $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
 
}); 


}