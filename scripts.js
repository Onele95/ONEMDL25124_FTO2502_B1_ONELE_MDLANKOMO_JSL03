// Declare object tasks array
let tasks = [
  { id: 1, title: "Gym", description: "Work those musles", status: "todo" },
  { id: 2, title: "Study", description: "Work those brains", status: "doing" },
  { id: 3, title: "Sleep", description: "Rest that bod", status: "done" },
];

// For loop to add 3 new tasks
for (let i = 0; i < 3; i++) {
  // Check if we've reached the limit
  if (tasks.length >= 6) {
    alert(
      "There are enough tasks on your board, please check them in the console."
    );
    break;
  }

  // Get task details from user
  const title = prompt("Enter task " + (i + 1) + " title:");
  const description = prompt("Enter task " + (i + 1) + " description:");
  let status = prompt(
    "Enter task " + (i + 1) + " status (todo, doing, done):"
  ).toLowerCase();

  // Validate status input
  while (status !== "todo" && status !== "doing" && status !== "done") {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    status = prompt(
      "Enter task " + (i + 1) + " status (todo, doing, done):"
    ).toLowerCase();
  }

  // Create new task object with incremental ID
  const newTask = {
    id: tasks.length + 1,
    title: title,
    description: description,
    status: status,
  };

  // Add the new task to the array
  tasks.push(newTask);
}

console.log("All tasks: ", tasks);

// Filter and display only completed tasks
const completedTasks = tasks.filter((task) => task.status === "done");

if (completedTasks.length > 0) {
  console.log("Completed Tasks:", completedTasks);
} else {
  console.log("No tasks completed, let's get to work!");
}
