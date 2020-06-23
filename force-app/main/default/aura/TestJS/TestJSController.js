({
	afterScriptsLoaded : function(component, event, helper) {
		//var myemail = Email;
        //console.log(Email);
        Email.send({
    Host : "smtp.gmail.com",
    Username : "subalchaudhari@gmail.com",
    Password : "S@ykciv*2389",
    To : 'subal.chaudhari@mindtree.com',
    From : "subalchaudhari@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
        
	}
})