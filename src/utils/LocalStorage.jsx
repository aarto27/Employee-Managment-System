const employees = [
  {
    id: 1,
    email: "nikita@sharma.com",
    password: "123",
    username: "nikita",
    task: [
      {
        active: true,
        newtask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Report",
        taskDescription: "Prepare monthly sales report",
        taskDate: "2025-03-26",
        category: "Reporting",
      },
      {
        active: false,
        newtask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Inventory",
        taskDescription: "Update stock levels in the system",
        taskDate: "2025-03-25",
        category: "Inventory",
      },
    ],
    taskNumber: {
      active: 1,
      newtask: 1,
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
        newtask: true,
        completed: false,
        failed: false,
        taskTitle: "Client Meeting",
        taskDescription: "Discuss project scope with client",
        taskDate: "2025-03-27",
        category: "Meetings",
      },
      {
        active: false,
        newtask: false,
        completed: true,
        failed: false,
        taskTitle: "Submit Invoice",
        taskDescription: "Send invoice to finance department",
        taskDate: "2025-03-25",
        category: "Finance",
      },
    ],
    taskNumber: {
      active: 1,
      newtask: 0,
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
        active: true,
        newtask: true,
        completed: false,
        failed: false,
        taskTitle: "Team Training",
        taskDescription: "Conduct training session for new employees",
        taskDate: "2025-03-24",
        category: "Training",
      },
      {
        active: false,
        newtask: false,
        completed: true,
        failed: false,
        taskTitle: "System Update",
        taskDescription: "Perform system maintenance update",
        taskDate: "2025-03-28",
        category: "IT",
      },
    ],
    taskNumber: {
      active: 1,
      newtask: 1,
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
        newtask: true,
        completed: false,
        failed: false,
        taskTitle: "Marketing Strategy",
        taskDescription: "Draft social media strategy",
        taskDate: "2025-03-29",
        category: "Marketing",
      },
      {
        active: false,
        newtask: false,
        completed: true,
        failed: false,
        taskTitle: "Post Blog",
        taskDescription: "Publish new blog post",
        taskDate: "2025-03-25",
        category: "Content",
      },
    ],
    taskNumber: {
      active: 1,
      newtask: 1,
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
        active: true,
        newtask: true,
        completed: false,
        failed: false,
        tasktitle: "Fix Bug",
        taskDescription: "Resolve reported bug in software",
        taskDate: "2025-03-25",
        category: "Development",
      },
      {
        active:false,
        newtask:false,
        completed: false,
        failed: true,
        taskTitle: "Code Review",
        taskDescription: "Review pull requests from team",
        taskDate: "2025-03-27",
        category: "Development",
      },
    ],
    taskNumber: {
      active: 1,
      newtask: 1,
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
