const convertDate = (date: string, type?: string) => {

  let res = null;

  type === 'sm' ? res = new Date(date).toLocaleDateString("en-US", {
    year: 'numeric'
  }) :
  res = new Date(date).toLocaleDateString("en-US", {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }) 

  return res;
}

export default convertDate;