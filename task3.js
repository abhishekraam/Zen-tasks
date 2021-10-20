var obj = [
    { person: "Name 1", age: "2", company: "GUVI" },
    { person: "Name 2", age: "5", company: "GUVI geek" },
    { person: "Name 3", age: "8", company: "GUVI geek network" },
  ];
  
  for (let i = 0; i < obj.length; i++) {
    console.log(obj[i]);
  }
  for (let i in obj) {
    console.log(obj[i]);
  }
  
  for (let i of obj) {
    console.log(i);
  }
  
  obj.forEach((e) => console.log(e));
  
  //resume in JSON Format
  const resume = [
    { name: "Abhishek Raam" },
    { age: 22 },
    { gender: "Male" },
    { education: { College: "A.M.Jain College", School: "PSBB" } },
    { "work exprience": 0 },
    { hobbies: ["Gaming", "Gym","Tennis"] },
  ];
  
// -----------------------------------------------------------------------------------------
  
  // Difference between Windows, Document and Screen in Javascript. 
  
  // Window is the main JavaScript object root, it is the global object in a browser, and it can also be treated as the root of the document object model. You can access it as window.
  
  // Window.screen or just screen is a small information object about physical screen dimensions(height/width)
  
  // Window.document or just document is the main object of the potentially visible (rendered) document object model/DOM.