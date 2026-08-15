const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";
async function request(endpoint, options = {}) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers
    },
    ...options
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong.");
  }

  return data;
}

export async function getMarketData(crop) {
  const query = crop ? `?crop=${encodeURIComponent(crop)}` : "";

  return request(`/market${query}`);
}

export async function getBuyers(crop) {
  const query = crop ? `?crop=${encodeURIComponent(crop)}` : "";

  return request(`/buyers${query}`);
}

export async function getDashboard() {
  return request("/dashboard");
}

export async function getAdvisorRecommendation(data) {
  return request("/advisor", {
    method: "POST",
    body: JSON.stringify(data)
  });
}

export async function analyzeQuality(data) {
  return request("/quality", {
    method: "POST",
    body: JSON.stringify(data)
  });
}

export async function calculateIncome(data) {
  return request("/income", {
    method: "POST",
    body: JSON.stringify(data)
  });
}
