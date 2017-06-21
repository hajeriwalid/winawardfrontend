
document.addEventListener('init', function(event) {
 
 
 var page = event.target; 
 
 if (page.matches('#page1')) {
    ons.notification.alert('Page 1 is initiated.');
    // Set up content...
  }
  
 
  if (page.id === 'page1') {
    
    var myNavigator = document.querySelector("#myNavigator");
    
    
    page.querySelector('#push-button').onclick = function() {
      myNavigator.pushPage('page2.html', {data: {title: 'Page 2'}});
    };
  
  }
  
  
  

    
   
    
   else if (page.id === 'page2') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    
    /*
    var divGD = ons.GestureDetector(document.querySelector('#mylist'));
    divGD.on('swipeleft swiperight', function(event) {
     ons.notification.toast('cool');
    
    });
    
    */
    
    function AppViewModel() {
       
    }
    
   
    
    
    
    
    // Overall viewmodel for this screen, along with initial state
    function SampleViewModel() {
        var self = this;
        
        //this.firstName = "Bert";
        //this.lastName = "Bertington";
    
        // Non-editable catalog data - would come from the server
        this.awardList = [
            { title: "New York Film Festival", subtitle: "indie movies" },
            { title: "Sundance Film Festival", subtitle: "indie movies"},
        ];    
    
       
    }
    ko.applyBindings(new SampleViewModel()); 
 
  }
  
  
}, false);
         



  
 