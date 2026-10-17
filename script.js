document.getElementById('regForm').addEventListener('submit', function(e){
  e.preventDefault();
  document.getElementById('msg').innerText = "Form submitted successfully! ✅";
});