const BASE_URL = "http://localhost:4000";

export const request = async (url, options) => {
  try {
    const res = await fetch(url, options);

    if (res.ok) {
      return res.json();
    }
  } catch (e) {
    alert(e.message);
  }
};

export async function getAllDiscussions() {
  return await request(`${BASE_URL}/discussions`);
}

export async function getDiscussions(offset, limit) {
  return await request(
    `${BASE_URL}/discussions?offset=${offset}&limit=${limit}`
  );
}

export async function getDiscussionsCount() {
  return await request(`${BASE_URL}/discussions/count`);
}

export async function getDiscussionsById(discussionId) {
  return await request(`${BASE_URL}/discussions/${discussionId}`);
}

export async function postDiscussion(data) {
  return await request(`${BASE_URL}/discussions`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });
}
