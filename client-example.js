const axios = require("axios");

// Base URL for your API
const API_URL = "http://localhost:3000";

// Create an axios instance with default config
const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json"
  }
});

// ============================================
// GET - Fetch API Status
// ============================================
async function getAPIStatus() {
  try {
    const response = await apiClient.get("/");
    console.log("✅ API Status:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching API status:", error.message);
  }
}

// ============================================
// GET - Fetch All Users
// ============================================
async function getAllUsers() {
  try {
    const response = await apiClient.get("/users");
    console.log("✅ All Users Retrieved:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching users:", error.message);
  }
}

// ============================================
// POST - Create a New User
// ============================================
async function createUser(userData) {
  try {
    const response = await apiClient.post("/users", userData);
    console.log("✅ User Created:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Error creating user:", error.message);
  }
}

// ============================================
// Main Function - Test All Endpoints
// ============================================
async function main() {
  console.log("🚀 Starting API Tests with Axios...\n");

  // Test 1: Get API Status
  console.log("1️⃣ Testing GET / (API Status)");
  await getAPIStatus();
  console.log("\n");

  // Test 2: Get All Users
  console.log("2️⃣ Testing GET /users (All Users)");
  await getAllUsers();
  console.log("\n");

  // Test 3: Create a New User
  console.log("3️⃣ Testing POST /users (Create User)");
  const newUser = {
    pnr_number: "PNR999999",
    name: "John Doe",
    age: 28,
    address: "New York, USA",
    train_name: "Express Train",
    destination_station: "Central Station",
    journey_date: "2026-04-15",
    seat_number: "A1-1",
    coach: "A1",
    status: "Confirmed"
  };
  await createUser(newUser);
  console.log("\n");

  console.log("✅ All tests completed!");
}

// Run the main function
main().catch(console.error);
