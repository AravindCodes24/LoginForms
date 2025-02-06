  // Get references to elements
  const LoginBtn = document.getElementById('LoginBtn');
  const UsernameInput = document.getElementById('Username');
  const PasswordInput = document.getElementById('Password');
  const SignUpLink = document.getElementById('SignUpLink');
  
  // Login button click event
  LoginBtn.addEventListener('click', function () {
      const Username = UsernameInput.value.trim();
      const Password = PasswordInput.value.trim();

      // Simple validation
      if (Username === '' || Password === '') {
          alert('Please fill in both fields.');
          return;
      }

      // Proceed with login logic (this is just an example)
      alert('Login Successful');
      // Here you can send data to a server using an AJAX request or a form submission
  });

  // Sign-up link click event
  SignUpLink.addEventListener('click', function () {
      // Switch to sign-up logic (for now, it shows an alert, you can implement actual functionality)
      alert('Redirecting to Sign Up page...');
      // You could redirect to a sign-up page, for example:
      // window.location.href = 'signup.html';
  });