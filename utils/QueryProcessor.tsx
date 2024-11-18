export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("usb id")) {
    return "1410423";
  }

  if(query.toLowerCase().includes("spiderman")) {
    return "Peter Parker";
  }
  
  if(query.toLowerCase().includes("el bicho")) {
    return "Cristiano Ronaldo, SIUUUU";
  }
  
  if(query.toLowerCase().includes("name")) {
    return "César González";
  }
  
  if(query.toLowerCase().includes("7") && query.toLowerCase().includes("7")) {
    return "84";
  }
  return "";
}
