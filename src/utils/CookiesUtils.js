class CookiesUtils {
  saveToCookies = (key, data, expiry = 24 * 60 * 60 * 1000) => {
    document.cookie = `${key}=${data}; expires=${new Date(
      Date.now() + expiry
    ).toUTCString()}; path=/`;
  };

  getFromCookies = (key) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${key}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  };

  deleteCookie(key) {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
}

export default new CookiesUtils();
