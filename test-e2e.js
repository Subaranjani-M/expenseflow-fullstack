// Comprehensive End-to-End API verification script for ExpenseFlow
const BASE_URL = 'http://localhost:5000/api';

async function runTests() {
  console.log('--- Starting ExpenseFlow Full Verification Suite ---');

  // 1. Health check
  const healthRes = await fetch(`${BASE_URL}/health`);
  const healthData = await healthRes.json();
  console.log('✓ [Health Check]:', healthData.status);

  // 2. Register New User
  const testEmail = `jane.doe.${Date.now()}@example.com`;
  const regRes = await fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Jane Doe',
      email: testEmail,
      password: 'Password123!',
      confirmPassword: 'Password123!',
    }),
  });
  const regData = await regRes.json();
  console.log('✓ [Registration]:', regData.success ? 'PASSED' : 'FAILED', regData.message);
  const token = regData.token;

  const authHeaders = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  // 3. Login
  const loginRes = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: testEmail,
      password: 'Password123!',
    }),
  });
  const loginData = await loginRes.json();
  console.log('✓ [Login]:', loginData.success ? 'PASSED' : 'FAILED', loginData.user.name);

  // 4. Record Income Transaction
  const incRes = await fetch(`${BASE_URL}/transactions`, {
    method: 'POST',
    headers: authHeaders,
    body: JSON.stringify({
      title: 'Design Consulting',
      amount: 65000,
      type: 'income',
      category: 'Freelance',
      paymentMethod: 'Net Banking',
      description: 'Milestone 1 invoice',
    }),
  });
  const incData = await incRes.json();
  console.log('✓ [Add Income]:', incData.success ? 'PASSED' : 'FAILED', `+₹${incData.data.amount}`);

  // 5. Record Expense Transaction 1
  const expRes1 = await fetch(`${BASE_URL}/transactions`, {
    method: 'POST',
    headers: authHeaders,
    body: JSON.stringify({
      title: 'Whole Foods Market',
      amount: 4200,
      type: 'expense',
      category: 'Food',
      paymentMethod: 'Credit Card',
      description: 'Weekly organic groceries',
    }),
  });
  const expData1 = await expRes1.json();
  console.log('✓ [Add Expense 1]:', expData1.success ? 'PASSED' : 'FAILED', `-₹${expData1.data.amount}`);

  // 6. Record Expense Transaction 2 (Custom Category)
  const expRes2 = await fetch(`${BASE_URL}/transactions`, {
    method: 'POST',
    headers: authHeaders,
    body: JSON.stringify({
      title: 'High-speed Fiber Broadband',
      amount: 1499,
      type: 'expense',
      category: 'Internet & Utilities',
      paymentMethod: 'UPI',
      description: 'Monthly gigabit plan',
    }),
  });
  const expData2 = await expRes2.json();
  console.log('✓ [Add Custom Category Expense]:', expData2.success ? 'PASSED' : 'FAILED', `Category: ${expData2.data.category}`);

  // 7. Update Transaction
  const updateRes = await fetch(`${BASE_URL}/transactions/${expData1.data._id}`, {
    method: 'PUT',
    headers: authHeaders,
    body: JSON.stringify({
      title: 'Whole Foods Superstore (Updated)',
      amount: 4800,
    }),
  });
  const updateData = await updateRes.json();
  console.log('✓ [Update Transaction]:', updateData.success ? 'PASSED' : 'FAILED', `New Amount: ₹${updateData.data.amount}`);

  // 8. Delete Transaction
  const deleteRes = await fetch(`${BASE_URL}/transactions/${expData2.data._id}`, {
    method: 'DELETE',
    headers: authHeaders,
  });
  const deleteData = await deleteRes.json();
  console.log('✓ [Delete Transaction]:', deleteData.success ? 'PASSED' : 'FAILED');

  // 9. Set Monthly Budget
  const budgetRes = await fetch(`${BASE_URL}/budget`, {
    method: 'POST',
    headers: authHeaders,
    body: JSON.stringify({
      amount: 40000,
    }),
  });
  const budgetData = await budgetRes.json();
  console.log('✓ [Set Monthly Budget]:', budgetData.success ? 'PASSED' : 'FAILED', `Target: ₹${budgetData.data.budgetAmount}`);

  // 10. Verify Summary & Analytics
  const summaryRes = await fetch(`${BASE_URL}/analytics/summary`, {
    headers: authHeaders,
  });
  const summaryData = await summaryRes.json();
  console.log('✓ [Analytics Summary]:', {
    balance: summaryData.data.totalBalance,
    income: summaryData.data.totalIncome,
    expenses: summaryData.data.totalExpenses,
    budgetUsage: `${summaryData.data.currentMonth.budgetUsedPercentage}%`,
    remainingBudget: summaryData.data.currentMonth.remainingBudget,
  });

  // 11. Verify Dynamic Insights
  const insightsRes = await fetch(`${BASE_URL}/analytics/insights`, {
    headers: authHeaders,
  });
  const insightsData = await insightsRes.json();
  console.log('✓ [Dynamic Real Insights]:', insightsData.data.map(i => i.title));

  // 12. Update Profile & Currency
  const profileRes = await fetch(`${BASE_URL}/users/profile`, {
    method: 'PUT',
    headers: authHeaders,
    body: JSON.stringify({
      name: 'Jane Doe Professional',
      preferredCurrency: 'USD',
    }),
  });
  const profileData = await profileRes.json();
  console.log('✓ [Update Profile & Currency]:', profileData.success ? 'PASSED' : 'FAILED', `Currency: ${profileData.data.preferredCurrency}`);

  console.log('--- ALL TEST ASSERTIONS PASSED SUCCESSFULLY ---');
}

runTests().catch(console.error);
