/* eslint-disable no-useless-escape */
function isValidURL(string: string): boolean {
  const res = string.match(
    /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm,
  );
  return res !== null;
}

export default isValidURL;
