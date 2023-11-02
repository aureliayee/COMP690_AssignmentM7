const $ = (id) => document.getElementById(id)
$('id').focus()

// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = $('addForm')
let list = $('items')
let table = $('employees')


// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
var countRows = table.getElementsByTagName('tr').length-1
$('empCount').innerHTML = countRows


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let id = $('id').value
    let name = $('name').value
    let extension = $('extension').value
    let email = $('email').value
    let department = $('department').value

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let tr = document.createElement('tr')
    table.appendChild(tr)

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let td1 = document.createElement('td')
    let td2 = document.createElement('td')
    let td3 = document.createElement('td')
    let td4 = document.createElement('td')
    let td5 = document.createElement('td')

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
    
    let text1 = document.createTextNode(id)
    let text2 = document.createTextNode(name)
    let text3 = document.createTextNode(extension)
    let text4 = document.createTextNode(email)
    let text5 = document.createTextNode(department)


    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    td1.appendChild(text1)
    td2.appendChild(text2)
    td3.appendChild(text3)
    td4.appendChild(text4)
    td5.appendChild(text5)

    // CREATE THE DELETE BUTTON
     let deleteBtn = document.createElement('button')
     //ADD BOOTSTRATP CLASSES FOR A BUTTON
     deleteBtn.className = 'btn btn-danger btn-sm float-end delete'
     //CREATE TEXT NODE FOR DELETE BUTTON AND SET IT TO 'X'
     let textDelete = document.createTextNode('X')
     //APPEND TEXT NODE TO DELETE BUTTON
     deleteBtn.appendChild(textDelete)
     //APPEND DELETE BUTTON TO LI
     tr.appendChild(deleteBtn)

    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    $('id').focus()

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    countRows ++
    $('empCount').innerHTML = countRows
})

// DELETE EMPLOYEE
table.addEventListener('click', (e) => {
    //CHECK AND SEE IF THE DELETE BUTTON WAS CLICKED 
    if (e.target.classList.contains('delete')) {
        //DISPLAY CONFIRMATION OF THE DELETE TO THE USER
        if (confirm('Are you sure you want to delete this task?')) {
            //REMOVE CHILD
            table.removeChild(e.target.parentElement)

            countRows --
            $('empCount').innerHTML = countRows
        }
    }

})


