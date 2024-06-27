// Transform data into nested object:
console.log("Transform data into nested object:");

function nestedObj() {
  const employees = [
    { name: "Alice", department: "Engineering", role: "Developer" },
    { name: "Bob", department: "Engineering", role: "Developer" },
    { name: "Charlie", department: "Engineering", role: "Manager" },
    { name: "Dave", department: "Sales", role: "Salesperson" },
    { name: "Eve", department: "Sales", role: "Manager" },
    { name: "Frank", department: "Marketing", role: "Manager" },
    { name: "Grace", department: "Marketing", role: "Coordinator" },
  ];
  const res = employees.reduce((acc, curr) => {
    const { name, department, role } = curr;

    if (!acc[department]) {
      acc[department] = {};
    }
    if (!acc[department][role]) {
      acc[department][role] = [];
    }
    acc[department][role].push(name);

    return acc;
  }, {});

  console.log(res);
}
nestedObj();

// Aggregate product sales data:
console.log("Aggregate product sales data:");

function aggregateData() {
  const sales = [
    { product: "Laptop", units: 5, revenue: 5000 },
    { product: "Phone", units: 10, revenue: 3000 },
    { product: "Laptop", units: 3, revenue: 3000 },
    { product: "Tablet", units: 7, revenue: 2100 },
    { product: "Phone", units: 4, revenue: 1200 },
    { product: "Tablet", units: 5, revenue: 1500 },
  ];
  const revenueThreshold = 4000;

  const aggregate = sales.reduce((acc, curr) => {
    const { product, units, revenue } = curr;

    return acc;
  }, {});

  return aggregate;
}
console.log(aggregateData());
