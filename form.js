
        let usernameRef = document.getElementById("username");
        let passwordRef = document.getElementById("password");
        let eyeL = document.querySelector(".eyeball-l");
        let eyeR = document.querySelector(".eyeball-r");
        let handL = document.querySelector(".hand-l");
        let handR = document.querySelector(".hand-r");
        
        let normalEyeStyle = () => {
          eyeL.style.cssText = `
            left:0.6em;
            top: 0.6em;
          `;
          eyeR.style.cssText = `
          right:0.6em;
          top:0.6em;
          `;
        };
        
        let normalHandStyle = () => {
          handL.style.cssText = `
                height: 2.81em;
                top:8.4em;
                left:7.5em;
                transform: rotate(0deg);
            `;
          handR.style.cssText = `
                height: 2.81em;
                top: 8.4em;
                right: 7.5em;
                transform: rotate(0deg)
            `;
        };
        //When clicked on username input
        usernameRef.addEventListener("focus", () => {
          eyeL.style.cssText = `
            left: 0.75em;
            top: 1.12em;  
          `;
          eyeR.style.cssText = `
            right: 0.75em;
            top: 1.12em;
          `;
          normalHandStyle();
        });
        //When clicked on password input
        passwordRef.addEventListener("focus", () => {
          handL.style.cssText = `
                height: 6.56em;
                top: 3.87em;
                left: 11.75em;
                transform: rotate(-155deg);    
            `;
          handR.style.cssText = `
            height: 6.56em;
            top: 3.87em;
            right: 11.75em;
            transform: rotate(155deg);
          `;
          normalEyeStyle();
        });
        
        function signUp(){
          {
                  // Display the loader when transitioning to another page
                  document.getElementById('loader').style.display = 'flex';
      
                  // Simulate a delay (you can replace this with an actual page load)
                  setTimeout(function() {
                      window.location.href = 'signup.html';
                  }, 1000); // 1000 milliseconds (1 second) delay as an example
              }
      
              // Hide the loader when the page is fully loaded
              window.onload = function() {
                  document.getElementById('loader').style.display = 'none';
        }
        }



        function CheckLogin() {
          var username = document.getElementById('username').value;
          var password = document.getElementById('password').value;
          var errorMessageElement = document.getElementById('error-message');
      
          // Implement server-side authentication instead of hardcoding credentials here
          // Example: Send a request to the server to validate credentials
      
          // For demonstration purposes, assuming server-side validation is successful
          if (username === 'sayeed' && password === 'shoaib') {
            window.location.href = 'index.html'; // Replace with the desired URL
            return false;
              // Replace with the desired URL
               // Prevent the form submission since we're redirecting
          } else {
              errorMessageElement.innerText = 'Wrong username or password';
      
              // Display the error message for 5 seconds
              errorMessageElement.style.display = 'block';
              setTimeout(function() {
                  errorMessageElement.style.display = 'none';
              }, 4000);
      
              return false; // Prevent the form submission
          }
      }
      
      // Assuming you have a form element with the ID 'login-form'
      document.getElementById('form').addEventListener('submit', function(event) {
          // Call your custom validation function
          if (!CheckLogin()) {
              // Prevent the default form submission
              event.preventDefault();
          }
      });


        //When clicked outside username and password input
        document.addEventListener("click", (e) => {
          let clickedElem = e.target;
          if (clickedElem != usernameRef && clickedElem != passwordRef) {
            normalEyeStyle();
            normalHandStyle();
          }
        }
      
      
      
    );