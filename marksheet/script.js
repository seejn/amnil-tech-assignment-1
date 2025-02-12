let form = document.getElementById("marksheet-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let sub1 = Number(document.getElementById("sub1").value);
    let sub2 = Number(document.getElementById("sub2").value);
    let sub3 = Number(document.getElementById("sub3").value);
    let sub4 = Number(document.getElementById("sub4").value);
    let sub5 = Number(document.getElementById("sub5").value);

    if(sub1 === 0){
        alert("subject1 is required");
        return;
    }else if(sub2 === 0){
        alert("subject2 is required");
        return;
    }else if(sub3 === 0){
        alert("subject3 is required");
        return;
    }else if(sub4 === 0){
        alert("subject4 is required");
        return;
    }else if(sub5 === 0){
        alert("subject5 is required");
        return;
    }

    let totalMarks = sub1 + sub2 + sub3 + sub4 + sub5;
    let percentage = (totalMarks / 500) * 100; // assuming each subject's fullmarks is 100
    let grade =
        percentage > 90
            ? "A+"
            : percentage > 80
            ? "A"
            : percentage > 70
            ? "B+"
            : percentage > 60
            ? "B"
            : percentage > 50
            ? "C+"
            : percentage > 40
            ? "C"
            : percentage > 30
            ? "D+"
            : percentage > 20
            ? "D"
            : "E";

    renderMarksheet([sub1, sub2, sub3, sub4, sub5], percentage, grade);
});

function renderMarksheet(marks, percentage, grade) {
    const table = document.createElement("table");
    table.border="1";
    table.cellPadding = "10px";
    table.cellSpacing = "10px";
    const titleRow = document.createElement("tr");

    const sn = document.createElement("th");
    sn.innerText = "S.No";

    const sub1 = document.createElement("th");
    sub1.innerText = "Subject 1";

    const sub2 = document.createElement("th");
    sub2.innerText = "Subject 2";

    const sub3 = document.createElement("th");
    sub3.innerText = "Subject 3";

    const sub4 = document.createElement("th");
    sub4.innerText = "Subject 4";

    const sub5 = document.createElement("th");
    sub5.innerText = "Subject 5";

    const per = document.createElement("th");
    per.innerText = "Percentage";

    const gradeTitle = document.createElement("th");
    gradeTitle.innerText = "Grade";

    titleRow.appendChild(sub1)
    titleRow.appendChild(sub2)
    titleRow.appendChild(sub3)
    titleRow.appendChild(sub4)
    titleRow.appendChild(sub5)
    titleRow.appendChild(per)
    titleRow.appendChild(gradeTitle)
    table.appendChild(titleRow);


    const numberOfSubjects = marks.length;
    const dataRow = document.createElement("tr");
    for(let i = 0; i < numberOfSubjects; i++){
        const td = document.createElement("td");
        td.innerText = marks[i];
        dataRow.append(td);
    }

    const percentageCell = document.createElement("td");
    const gradeCell = document.createElement("td");
    percentageCell.innerText = percentage;
    gradeCell.innerText = grade;
    
    dataRow.append(percentageCell);
    dataRow.append(gradeCell);
    table.append(dataRow);

    document.getElementsByTagName("body")[0].appendChild(table);
}


