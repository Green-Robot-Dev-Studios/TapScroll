const text = document.getElementById("here");
let acl = new Accelerometer({ frequency: 60 });
let last = null;
acl.addEventListener('reading', () => {
  text.innerHTML = acl.z;
  
  if (Math.abs(acl.z - last) > .2) window.scrollBy(0, 100);
  last = acl.z;
  
  console.log("Acceleration along the X-axis " + acl.x);
  console.log("Acceleration along the Y-axis " + acl.y);
  console.log("Acceleration along the Z-axis " + acl.z);
});
acl.start();
text.innerHTML = "Failed.";
