const tasks = [
    {title: "Complete assignment", status:"Pending"},
    {title: "Revise Javascript",status:"Completed"},
    {title: "Practice Git commands",status:"Pending"},
    {title: "Read React documentation", status:"Pending"}
];
console.log("=== Study Task Checker ===");
tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task.title} -${task.status}`);
});