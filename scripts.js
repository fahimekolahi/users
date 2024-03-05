let body = document.querySelector('body')
let modal = document.getElementById("modal")
let btn = document.getElementById("myBtn")
let kol = document.getElementById("kol")
let userList = document.getElementById("userList")
let userWrapper = document.getElementById("userWrapper")
let number = document.getElementById("number")
let email = document.getElementById("email")
let lastName = document.getElementById("lastName")
let name = document.getElementById("name")
let userInp = document.getElementById("userInp")
let usersList = document.getElementById("usersList")

function openModal() {
    modal.style.display = "block";
    kol.style.display = "block";
}





function closeModal() {
    modal.style.display = "none";
    kol.style.display = "none";
}


function addNewUser() {


    let person = {
        name: name.value,
        family: lastName.value,
        email: email.value,
        phoneNumber: number.value,

    }
    // console.log(person)
    // users.push(person);
    // render()
    // console.log(users)


    fetch('https://602bf8bf30ba7200172227a8.mockapi.io/users', {
        method: "post",
        body: JSON.stringify(person),
        headers:{
            "Content-Type" : "application/json"
        }


    })

.then(res=>{
    render()
})
.catch(err=>{
    console.log(err)
})

}





// function deleteUser(userId) {

//     users = users.filter(item => item.id !== userId)


//     render()
// }

function editUser(id) {
    fetch(`https://602bf8bf30ba7200172227a8.mockapi.io/users/${id}`,{
        method : "PUT",
        body: JSON.stringify({
            name: "",
            lastName: "",
            email: "",
            number: ""
        }),
        headers : {
            "Content-Type" : "application/json"
        }
    }).then(res=>{
        render()
    }).catch(err=>console.log(err))
}




///dom

function addBtn() {
    addNewUser()

    name.value = ""
    lastName.value = ""
    email.value = ""
    number.value = ""

}




function deleteBtn(id) {

    fetch(`https://602bf8bf30ba7200172227a8.mockapi.io/users/${id}`,{
        method: "delete"
    }).then(res=>{
        render()
    }).catch(err=>console.log(err))



    
}



function editBtn(id) {
editUser()
    editUserStatus = true
    editUserId = id
    changeBtn()
}




















let erroList = {
    nameError: "باید بیشتر از سه حرف باشد"


}



function render() {
    let temp = ""
    
fetch('https://602bf8bf30ba7200172227a8.mockapi.io/users')
.then(response=>response.json())
.then(result=>{
    result.forEach(item=>{
        
        temp += `


        <div class="flex sm:text-[15px] sm:w-[60%] w-[70%] text-[10px] rounded-[0.8rem] justify-around mx-auto gap-1 my-[1rem]">

            <div>
                <p>${item.name}</p>
            </div>

            <div>
                <p>${item.family}</p>
            </div>

            <div>
                <p>${item.phoneNumber}</p>
            </div>

            <div>
                <p>${item.email}</p>
            </div>



            <div class="flex gap-2">

                <div class="w-[22px] h-[22px] sm:w-[32px] sm:h-[32px] bg-[#C31C62] flex items-center justify-center rounded-[4px]" onclick="editBtn(id)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="white"
                    class="w-[14px] h-[14px]" viewBox="0 0 16 16">
                        <path
                            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                    </svg>
                </div>


                <div class="w-[22px] h-[22px] sm:w-[32px] sm:h-[32px] bg-[#C31C62] flex items-center justify-center rounded-[4px]" onclick="deleteBtn(id)">

                    <svg xmlns="http://www.w3.org/2000/svg"  fill="white" class="w-[14px] h-[14px]"
                        viewBox="0 0 16 16">
                        <path
                            d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                    </svg>
                </div>



            </div>












        </div>



    

`
usersList.innerHTML = temp
    })
.catch(err=>console.log(err))

    usersList.innerHTML = temp

})
}

    
    
       


function changeBtn() {

    if (editUserStatus) {

        userInp.innerHTML = "ویرایش"


    } else {
        userInp.innerHTML = "افزودن"
    }



}

///////////////////////////////////////////////////////////////// سوال بپرسم
userInp.addEventListener('click', () => {
    if (editUserStatus) {
        console.log("edit handled")
        editUser(editUserId,)
    } else {
        console.log("add handled")
        addBtn()

    }
})


changeBtn()












// const MAIN_URL = "https://602bf8bf30ba7200172227a8.mockapi.io/users"

// //Get All Users
// fetch(MAIN_URL)
//     .then(res => res.json())
//     .then(result => console.log(result))

// // Post New User
// fetch(MAIN_URL, {
//     method: "POST",
//     body: JSON.stringify({
//         name: "",
//         lastName: "",
//         email: "",
//         number: ""
//     }),
//     headers : {
//         "Content-Type" : "application/json"
//     }
// })

// // //Delete User
// fetch(MAIN_URL + `/1` , {
//     method: "DELETE",
//     headers : {
//         "Content-Type" : "application/json"
//     }
// })

// // //Update User
fetch(MAIN_URL + `/2`,{
    method : "PUT",
    body: JSON.stringify({
        name: "",
        lastName: "",
        email: "",
        number: ""
    }),
    headers : {
        "Content-Type" : "application/json"
    }
})