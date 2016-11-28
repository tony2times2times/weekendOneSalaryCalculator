//Tony Peraza 11/25/16
//First weekend project for Prime Academy

//Global Variables
var fubar = false;
//test objects displayed with alphabetical properties
var employees=[{annualSalary:1000000.00, firstName:'Tony', idNumber:42, jobTitle:'Develper', lastName:'Peraza'},
                {annualSalary:1000001.00, firstName:'Tori', idNumber:1, jobTitle:'Wife', lastName:'Peraza'},
              {annualSalary:500.00, firstName:'Kiki', idNumber:5, jobTitle:'cat', lastName:'Peraza'} ];
var count = 0;

//function expressions used to increase load speed
var monthlyToAnnual= function(pay){
  pay = pay*12;
  return(pay);
};

var biweeklyToAnnual = function(pay){
  pay = pay/14*365;
  return(pay);
};

var makeCents =  function (value){
  value = parseFloat(value);
  value = value.toFixed(2);
  return (value);
};

var clearBoxes = function(){
  document.getElementById( 'fName' ).value = '';
  document.getElementById( 'lName' ).value = '';
  document.getElementById( 'id' ).value = '';
  document.getElementById( 'title' ).value = '';
  document.getElementById( 'salary' ).value = '';
};

var totalSalary = function () {
  if (fubar) {console.log("Total salary is now being calculated");}
  var annualPayOut = 0;
  for (var i = 0; i < employees.length; i++) {
    var pay = makeCents(employees[i].annualSalary);
    if (fubar) {console.log(employees[i].firstName + ' makes ' + pay);}
    annualPayOut = (parseFloat(annualPayOut) +  parseFloat(pay));
    if (fubar) {console.log("annual pay out is :", annualPayOut);}
  }
  var monthlyPayOut = makeCents(annualPayOut)/12;
  document.getElementById('monthlyTotal').innerHTML= "Each month we pay $" + makeCents(monthlyPayOut) + " to our employees. <br> Our average employee is paid " + makeCents(monthlyPayOut/count) + ' each month.';
}

var remove = function (index) {
  if (fubar) { ("Now removing:",employees[index].firstName, employees[index].lastName)}
  employees.splice(index, 1);
  //reset the employee roster table
  document.getElementById('employeeRoster').innerHTML= "<tr> <th>First Name</th> <th>Last Name</th> <th>ID Number</th> <th>Job Title</th> <th>Annual Salary</th> </tr>";
  //reset global variable for count
  count = 0;
  //reprint the employee array to the roster
  printEmployees()
  totalSalary()

};
//declaired functions used so that they can be accessed from anywhere in the script
function printEmployees(){
  if (fubar) { console.log('Now printing the employee roster.');}
  var div = document.getElementById('employeeRoster');
  for (count; count < employees.length; count++) {
    if (fubar) { console.log('Adding new employee:', employees[count].firstName, employees[count].lastName);}
    var row = div.insertRow();
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    var cell5 = row.insertCell(5);

    cell0.innerHTML = employees[count].firstName;
    cell1.innerHTML = employees[count].lastName;
    cell2.innerHTML = employees[count].idNumber;
    cell3.innerHTML = employees[count].jobTitle;
    cell4.innerHTML ='$' + makeCents(employees[count].annualSalary);
    cell5.innerHTML = ('<button class="del" onclick="remove(' + count + ')">' + 'DELETE' + '</button>');

  }
};

function addEmployee(){
  if (fubar) {console.log('addEmployee function running');}
  //get local variables from user input
  var fNameIn = document.getElementById( 'fName' ).value;
  var lNameIn = document.getElementById( 'lName' ).value;
  var idIn = document.getElementById( 'id' ).value;
  var titleIn = document.getElementById( 'title' ).value;
  var salaryIn = document.getElementById( 'salary' ).value;
  var payPeriodIn = document.getElementById( 'payPeriod' ).value;
  if (fubar){  console.log( 'adding item: ', fNameIn, lNameIn, idIn, titleIn, salaryIn, payPeriodIn );}
  //Change salary depending on the pay period specified
  clearBoxes();
  if (payPeriodIn=== 'Monthly'){
    if (fubar) {console.log('Converting monthly pay to annual.' );}
    var annualSalary = makeCents(monthlyToAnnual(salaryIn));
  }
  else if (payPeriodIn === 'Biweekly') {
    if (fubar) {console.log( 'converting biweekly pay to annual.' );}
    annualSalary = makeCents(biweeklyToAnnual(salaryIn));
  }
  else {
    if (fubar) {console.log('no conversion required pay is set to annual');}
    annualSalary= makeCents(salaryIn);
  }
  //create an employee object
  var employee = {
    //ensure that the annual salary is rounded down to two decimal places
    annualSalary: annualSalary,
    firstName: fNameIn,
    idNumber: idIn,
    jobTitle: titleIn,
    lastName: lNameIn
  };
  //add employee object to employees array
  employees.push( employee );
  if (fubar) {console.log( 'Employee Array:', employees );}
  printEmployees();
  totalSalary();
};


window.onload = function() {
  printEmployees();
  totalSalary();
};
