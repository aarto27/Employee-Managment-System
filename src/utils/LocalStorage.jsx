const employees = [
  {
    id: 1,
    email: "nikita@sharma.com",
    password: "123",
    username: "nikita",
    task: [
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
        active: true,
        new_task: false,
        completed: true,
        failed: false,
        task_title: "Update Inventory",
        task_description: "Update stock levels in the system",
        task_date: "2025-03-25",
        category: "Inventory",
      },
    ],
    taskNumber: {
      active: 1,
      new_task: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 2,
    email: "tanu@kaamwali.com",
    password: "123",
    username: "tanu",
    task: [
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
    taskNumber: {
      active: 1,
      new_task: 0,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 3,
    email: "prashant@jangir.com",
    password: "123",
    username: "prashant",
    task: [
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
    taskNumber: {
      active: 1,
      new_task: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 4,
    email: "kartikey@sharma.com",
    password: "123",
    username: "kartikey",
    task: [
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
    taskNumber: {
      active: 1,
      new_task: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 5,
    email: "aditi@singh.com",
    password: "123",
    username: "aditi",
    task: [
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
    taskNumber: {
      active: 1,
      new_task: 1,
      completed: 0,
      failed: 1,
    },
  },
];


const admin = [
  {
    id: 1,
    email: "sanchit@singh.com",
    password: "123",
    username: "sanchit",
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