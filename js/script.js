window.addEventListener("load",()=>{
    
    "use strict";  
    
    window.document.getElementById("empForm").addEventListener("submit", (event)=> {
        
        event.preventDefault();
        
        window.console.log("Employee ID:" + window.document.getElementById("id").value);
        
        window.console.log("Name:" + window.document.getElementById("name").value);
        
        window.console.log("Extension:" + window.document.getElementById("ext").value);
        
        window.console.log("Email:" + window.document.getElementById("email").value);
        
        window.console.log("Department:" + window.document.getElementById("department").value);     
        
        
    });
    
  });
