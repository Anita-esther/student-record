

const nameInput = document.getElementById("name");
const matricInput = document.getElementById("matric");
const levelInput = document.getElementById("level");
const departmentInput = document.getElementById("department");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const message = document.getElementById("message");
const studentList = document.getElementById("studentList");
const emptyNote = document.getElementById("emptyNote");
const count = document.getElementById("count");

const students = [];

function showMessage(text, isError) {
  message.textContent = text;                 
  message.className = isError ? "error" : ""; 
}

function showStudents() {
  studentList.innerHTML = "";   

  for (let i = 0; i < students.length; i++) {
    const li = document.createElement("li");        
    li.textContent = students[i].name;              

    const details = document.createElement("small"); 
    details.textContent =
      students[i].matricNo + " | " + students[i].level + " level | " + students[i].department;

    li.appendChild(details);        
    studentList.appendChild(li);    
  }

  count.textContent = students.length;

  if (students.length === 0) {
    emptyNote.style.display = "block";
  } else {
    emptyNote.style.display = "none";
  }
}

function addStudent() {
  const student = {
    name: nameInput.value.trim(),
    matricNo: matricInput.value.trim(),
    level: levelInput.value.trim(),
    department: departmentInput.value.trim()
  };

  if (!student.name || !student.matricNo || !student.level || !student.department) {
    showMessage("Please fill in all four fields.", true);
    return;
  }

  students.push(student);   // add to the end of the array
  showStudents();           // refresh what the user sees
  showMessage(student.name + " added.", false);

  nameInput.value = "";
  matricInput.value = "";
  levelInput.value = "";
  departmentInput.value = "";
  nameInput.focus();        // put the cursor back in the first box
}

function removeLastStudent() {
  if (students.length > 0) {
    const removed = students.pop();   // take off the last student
    showStudents();
    showMessage(removed.name + " removed.", false);
  } else {
    showMessage("There are no students to remove.", true);
  }
}


addBtn.addEventListener("click", addStudent);
removeBtn.addEventListener("click", removeLastStudent);


showStudents();