import React from "react";
const Home = () => {
  window.localStorage.setItem("useName", "Rizwan");
  window.localStorage.setItem("Email", "Rizwan@4141");

//   console.log(localStorage.getItem("useName"))
//   console.log(localStorage.getItem("Email"))
//   console.log(localStorage.key(0));
//   console.log(localStorage.removeItem("Email"));
//   console.log(localStorage.clear());

/////////////////////////////////////////
// sessionStorage.setItem("name","Rafe")
// sessionStorage.setItem('email','rafe4141@gmail.com')
// console.log(sessionStorage);
// console.log(sessionStorage.getItem("name"));
// console.log(sessionStorage.key(1));
// console.log(sessionStorage.removeItem("name"));
// console.log(sessionStorage.clear());
//////////////////////////////////////////////////////////////////
// document.cookie="name=rehan"
// alert(document.cookie)

  return (
    <div>
      {/* <h1>lacal storage</h1> */}
      {/* <h1>Session storage</h1> */}
      <h1>Cookies</h1>
    </div>
  );
};
export default Home;
