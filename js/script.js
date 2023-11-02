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
    let row = table.insertRow()

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = row.insertCell()
    let cellName = row.insertCell()
    let cellExtension = row.insertCell()
    let cellEmail = row.insertCell()
    let cellDepartment = row.insertCell()
    let cellDelete = row.insertCell()
    
    let text1 = document.createTextNode(id)
    let text2 = document.createTextNode(name)
    let text3 = document.createTextNode(extension)
    let text4 = document.createTextNode(email)
    let text5 = document.createTextNode(department)


    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.appendChild(text1)
    cellName.appendChild(text2)
    cellExtension.appendChild(text3)
    cellEmail.appendChild(text4)
    cellDepartment.appendChild(text5)

    // CREATE THE DELETE BUTTON
     let deleteBtn = document.createElement('button')
     //ADD BOOTSTRATP CLASSES FOR A BUTTON
     deleteBtn.className = 'btn btn-danger btn-sm float-end'
     //CREATE TEXT NODE FOR DELETE BUTTON AND SET IT TO 'X'
     let textDelete = document.createTextNode('X')
     //APPEND TEXT NODE TO DELETE BUTTON
     deleteBtn.appendChild(textDelete)
     //APPEND DELETE BUTTON TO LI
     cellDelete.appendChild(deleteBtn)

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
        //DISPLAY CONFIRMATION OF THE DELETE TO THE USER
        if (confirm('Are you sure you want to delete this employee?')) {
            //REMOVE CHILD
            table.deleteRow( e.target.parentNode.parentNode.rowIndex );

            countRows --
            $('empCount').innerHTML = countRows
        }

})


