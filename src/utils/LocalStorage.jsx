const employees = [
  {
    id: 1,
    email: "nikita@sharma.com",
    password: "123",
    tasks: [
      {
        active: true,
        new_task: true,
        completed: false,
        failed: false,
        task_title: "Prepare Report",
        task_description: "Prepare monthly sales report",
        task_date: "2025-03-26",
        category: "Reporting",
      },
      {
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        task_title: "Update Inventory",
        task_description: "Update stock levels in the system",
        task_date: "2025-03-25",
        category: "Inventory",
      },
    ],
  },
  {
    id: 2,
    email: "tanu@kaamwali.com",
    password: "123",
    tasks: [
      {
        active: true,
        new_task: false,
        completed: false,
        failed: false,
        task_title: "Client Meeting",
        task_description: "Discuss project scope with client",
        task_date: "2025-03-27",
        category: "Meetings",
      },
      {
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        task_title: "Submit Invoice",
        task_description: "Send invoice to finance department",
        task_date: "2025-03-25",
        category: "Finance",
      },
    ],
  },
  {
    id: 3,
    email: "prashant@jangir.com",
    password: "123",
    tasks: [
      {
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        task_title: "Team Training",
        task_description: "Conduct training session for new employees",
        task_date: "2025-03-24",
        category: "Training",
      },
      {
        active: true,
        new_task: true,
        completed: false,
        failed: false,
        task_title: "System Update",
        task_description: "Perform system maintenance update",
        task_date: "2025-03-28",
        category: "IT",
      },
    ],
  },
  {
    id: 4,
    email: "kartikey@sharma.com",
    password: "123",
    tasks: [
      {
        active: true,
        new_task: true,
        completed: false,
        failed: false,
        task_title: "Marketing Strategy",
        task_description: "Draft social media strategy",
        task_date: "2025-03-29",
        category: "Marketing",
      },
      {
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        task_title: "Post Blog",
        task_description: "Publish new blog post",
        task_date: "2025-03-25",
        category: "Content",
      },
    ],
  },
  {
    id: 5,
    email: "aditi@singh.com",
    password: "123",
    tasks: [
      {
        active: false,
        new_task: false,
        completed: false,
        failed: true,
        task_title: "Fix Bug",
        task_description: "Resolve reported bug in software",
        task_date: "2025-03-25",
        category: "Development",
      },
      {
        active: true,
        new_task: true,
        completed: false,
        failed: false,
        task_title: "Code Review",
        task_description: "Review pull requests from team",
        task_date: "2025-03-27",
        category: "Development",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "sanchit@singh.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employee = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employee, admin };
};