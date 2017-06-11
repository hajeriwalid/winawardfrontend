// This is a JavaScript file

 
        //on page1 init
document.addEventListener('init', function(event) {
  if (event.target.matches('#page1')) {
    ons.notification.alert('Page 1 is initiated.');
    // Set up content...
  }
}, false);
         
        
document.addEventListener('init', function(event) {
  var page = event.target; 

  if (page.id === 'page1') {
    
    var myNavigator = document.querySelector("#myNavigator");
    
     myNavigator.addEventListener('postpush', function(event) {
        ons.notification.alert('This function is called after a new page is pushed.');
      });
    
    page.querySelector('#push-button').onclick = function() {
      myNavigator.pushPage('page2.html', {data: {title: 'Page 2'}});
    };
    
   
    
  } else if (page.id === 'page2') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
});


       // or use getElementById("my-navigator")
     // Add event listener
      
  
 