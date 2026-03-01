// Mock student database matching the Python backend structure
const studentsDB: Record<string, {
  password: string;
  name: string;
  lms: number;
  delay: number;
  attendance: number;
  sentiment: number;
}> = {
  student1: {
    password: "pass123",
    name: "Aarav Sharma",
    lms: 10,
    delay: 4,
    attendance: 85,
    sentiment: 0.3,
  },
  student2: {
    password: "pass456",
    name: "Priya Patel",
    lms: 18,
    delay: 1,
    attendance: 95,
    sentiment: 0.8,
  },
  student3: {
    password: "pass789",
    name: "Rahul Verma",
    lms: 3,
    delay: 8,
    attendance: 55,
    sentiment: -0.5,
  },
};

export interface StudentData {
  username: string;
  name: string;
  lms: number;
  delay: number;
  attendance: number;
  sentiment: number;
  risk_score: number;
  risk_level: "Low" | "Medium" | "High";
  dropout_probability: number;
  intervention: string;
}

// Simulates the ML model risk calculation from model.py
function calculateRisk(lms: number, delay: number, attendance: number, sentiment: number) {
  // Logistic regression approximation
  const z = -0.15 * lms + 0.25 * delay - 0.04 * attendance - 1.2 * sentiment + 3.5;
  const probability = 1 / (1 + Math.exp(-z));
  const risk_score = Math.round(probability * 100 * 10) / 10;
  
  let risk_level: "Low" | "Medium" | "High";
  if (risk_score < 40) risk_level = "Low";
  else if (risk_score < 70) risk_level = "Medium";
  else risk_level = "High";

  let intervention: string;
  if (risk_level === "High") {
    intervention = "Immediate counseling session required. Schedule meeting with academic advisor within 48 hours.";
  } else if (risk_level === "Medium") {
    intervention = "Weekly advisor check-in recommended. Monitor engagement patterns closely.";
  } else {
    intervention = "Student performing well. Continue current engagement strategy.";
  }

  return {
    risk_score,
    risk_level,
    dropout_probability: Math.round(probability * 100 * 10) / 10,
    intervention,
  };
}

// Simulates POST /login — authenticates and increments LMS
export async function loginStudent(username: string, password: string): Promise<StudentData> {
  // Simulate network delay
  await new Promise((r) => setTimeout(r, 1200));

  const student = studentsDB[username];
  if (!student || student.password !== password) {
    throw new Error("Invalid credentials. Please check your username and password.");
  }

  // Increment LMS login count (persistent within session)
  student.lms += 1;

  const risk = calculateRisk(student.lms, student.delay, student.attendance, student.sentiment);

  return {
    username,
    name: student.name,
    lms: student.lms,
    delay: student.delay,
    attendance: student.attendance,
    sentiment: student.sentiment,
    ...risk,
  };
}

// Simulates GET /student-data — fetches current data without incrementing
export async function fetchStudentData(username: string): Promise<StudentData> {
  await new Promise((r) => setTimeout(r, 600));

  const student = studentsDB[username];
  if (!student) throw new Error("Student not found.");

  const risk = calculateRisk(student.lms, student.delay, student.attendance, student.sentiment);

  return {
    username,
    name: student.name,
    lms: student.lms,
    delay: student.delay,
    attendance: student.attendance,
    sentiment: student.sentiment,
    ...risk,
  };
}
