export type LinkType = {
  url: string;
  text: string;
  sublinks?: LinkType[];
};

export function isCookieSet(cookieName: string) {
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    if (cookie.trim().startsWith(`${cookieName}=`)) {
      return true;
    }
  }
  return false;
}
