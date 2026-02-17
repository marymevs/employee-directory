import express from "express";
import employees, { getEmployee } from "#db/employees";

const app = express();

export default app;

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.get("/employees", (req, res) => {
  res.send(employees);
});

app.get("/employees/random", (req, res) => {
  // choose a random number from first id (1) to last id (10)
  const randomIndex = Math.floor(1 + Math.random() * employees.length);

  const randomEmployee = getEmployee(randomIndex);

  randomEmployee
    ? res.send(randomEmployee)
    : res.status(404).send("Error with random employee selection");
});

app.get("/employees/:id", (req, res) => {
  const { id } = req.params;
  const employee = getEmployee(id);
  employee ? res.send(employee) : res.status(404).send("No employee found");
});
