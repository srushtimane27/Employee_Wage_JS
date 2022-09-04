let totalEmpHrs = 0;
let totalworkingDays= 0;
let empDailyHrsAndWageArr = new Array();
while (totalEmpHrs <= MAX_HRS_IN_MONTH && 
    totalworkingDays < NUM_OF_WORKING_DAYS) {
    totalworkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getworkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyHrsAndWageArr.push(
    {
           dayNum:totalWorkingDays,
           dailyHours:empHrs,
           dailywage: calcDailywage(empHrs),
           toString() {

                return '\nDay' + this.dayNum + ' =>  Working Hours is ' + this.dailyHours +
                       ' And Wage Earned = ' + this.dailywage
           },
        });
    }

console.log("UC 10 Showing Daily Hours worked and wage Earned: "+empDailyHrsAndWageArr);