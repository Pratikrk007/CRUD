
var storeData = [];
var addData = () => {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var phoneNo = document.getElementById("phoneNo").value;

    var phoneNoalert = storeData.some(item => item.phoneNumber === phoneNo);

    if (phoneNo == "") {

        alert(" enter a phone number")
        return;
    }


    if (phoneNoalert) {

        alert(" Phone Number already  exist");
        return;
    }

    for (var id = 0; id < storeData.length;) {
        id++;

    }

    storeData.push({
        id: id,
        firstName: fname,
        lastName: lname,
        phoneNumber: phoneNo

    })



    console.log(storeData)
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("phoneNo").value = "";

    var showData = () => {

        var tbody = document.getElementById("table_body");
        tbody.innerHTML = ""
        storeData.forEach((item) => {
            var row = document.createElement("tr");
            row.innerHTML =


                `
<td>${item.firstName}</td>
<td>${item.lastName}</td>
<td>${item.phoneNumber}</td>
`
            tbody.appendChild(row);

            var deleteBtn = document.createElement("button")
            deleteBtn.innerHTML = "Delete"
            row.appendChild(deleteBtn)

            deleteBtn.addEventListener("click", () => {
                tbody.removeChild(row)
                storeData.pop(item)
                console.log(storeData);



            })
            var editBtn = document.createElement("button")
            editBtn.innerHTML = "Edit"
            row.appendChild(editBtn)

            editBtn.addEventListener("click", () => {

                document.getElementById("fname").value = item.firstName;
                document.getElementById("lname").value = item.lastName;
                document.getElementById("phoneNo").value = item.phoneNumber;

                document.getElementById("submit_btn").style.display = "none"


                var inpt_box = document.getElementById("input_box");

                var update_btn = document.createElement("button")
                update_btn.innerHTML = "Update"
                update_btn.setAttribute("id", "update_btn")

                inpt_box.appendChild(update_btn)

                update_btn.addEventListener("click", () => {

                    var newFname = document.getElementById("fname").value;
                    var newlname = document.getElementById("lname").value;
                    var newphoneNo = document.getElementById("phoneNo").value;

                    storeData.splice(item.id, 1, {

                        id: item.id,
                        firstName: newFname,
                        lastName: newlname,
                        phoneNumber: newphoneNo
                    })

                    document.getElementById("fname").value = "";
                    document.getElementById("lname").value = "";
                    document.getElementById("phoneNo").value = "";
                    console.log(storeData);

                    document.getElementById("submit_btn").style.display = "inline"
                    document.getElementById("update_btn").style.display = "none"


                    showData()


                })


            })




        })
    }

    showData()

}



