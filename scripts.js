//Tony Peraza 11/25/16
//First weekend project for Prime Academy

//Global Variables
var fubar = true;
//test object displayed with alphabetical properties
var employees=[{annualsalary:100000000, firstName:'Tony', idNumber:12345, jobTitle:'Develper', lastName:'Peraza'} ];
var count = 0;

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

var printEmployees = function(){
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

    cell0.innerHTML = employees[count].firstName;
    cell1.innerHTML = employees[count].lastName;
    cell2.innerHTML = employees[count].idNumber;
    cell3.innerHTML = employees[count].jobTitle;
    cell4.innerHTML = employees[count].annualsalary;


  }
};

var totalSalary = function () {
  for (var i = 0; i < employees.length; i++) {
    var totalPay = totalPay + employees[i].annualsalary;
  }
  if (fubar) {console.log("Total salary is calculated at:", makeCents(totalPay));}
}

var addEmployee = function(){
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
    var annualsalary = makeCents(monthlyToAnnual(salaryIn));
  }
  else if (payPeriodIn === 'Biweekly') {
    if (fubar) {console.log( 'converting biweekly pay to annual.' );}
    annualsalary = makeCents(biweeklyToAnnual(salaryIn));
  }
  else {
    if (fubar) {console.log('no conversion required pay is set to annual');}
    annualsalary= makeCents(salaryIn);
  }
  //create an employee object
  var employee = {
    //ensure that the annual salary is rounded down to two decimal places
    annualsalary: annualsalary,
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

// alert(JSON.stringify(employees[0], null, 4));
