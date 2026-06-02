async function addStudent() {

  try {

    const student = {
      name: document.getElementById("name").value,
      rollNo: document.getElementById("rollNo").value,
      totalClasses: Number(
        document.getElementById("total").value
      ),
      attendedClasses: Number(
        document.getElementById("attended").value
      )
    };

    console.log(student);

    const response = await fetch(
      "http://localhost:5000/api/students",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
      }
    );

    console.log(response);

    alert("Student Added");

  } catch(error) {
    console.error(error);
    alert("Error: " + error.message);
  }
}
