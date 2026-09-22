export const processEmployeeData = (rawData) => {
  if (!rawData || !Array.isArray(rawData.employees)) {
    throw new Error("Invalid employee data format");
  }

  return rawData.employees.map((employee) => ({
    ...employee,
    fullName: `${employee.firstName} ${employee.lastName}`,
    salaryFormatted: `$${employee.salary.toLocaleString()}`,
    hireDateFormatted: new Date(employee.hireDate).toLocaleDateString(),
    isActive: Boolean(employee.isActive),
  }));
};

export const calculateSummaryStats = (employees) => {
  const total = employees.length;
  const avgSalary =
    total > 0 ? employees.reduce((sum, emp) => sum + emp.salary, 0) / total : 0;
  const activeCount = employees.filter((emp) => emp.isActive).length;

  return {
    totalEmployees: total,
    averageSalary: avgSalary,
    activeEmployees: activeCount,
  };
};
