// code your solution here
function saturdayFun(want = "roller-skate"){
    return (`This Saturday, I want to ${want}!`);
}
function mondayWork(dos = "go to the office"){
    return (`This Monday, I will ${dos}.`)
}
function wrapAdjective(wrapper="*"){
    return function (str){
    return `You are ${wrapper}${str}${wrapper}!`
    }
}