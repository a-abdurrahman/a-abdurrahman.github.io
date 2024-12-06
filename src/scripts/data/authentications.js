import API_ENDPOINTS from "../globals/api-endpoints";

class authentications {
  static async login({ username, email, password }) {}
  static async refreshAccessToken(refreshToken) {
    try {
      await fetch(API_ENDPOINTS.AUTHENTICATIONS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refreshToken: refreshToken }),
      });
      success.fire({ text: "Restaurant Review has been posted." });
    } catch (error) {
      fail.fire({ text: error });
    }
  }
}

export default authentications
