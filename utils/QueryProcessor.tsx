export default function QueryProcessor(query: string): string {
  var str = query.split(" ");
  if (str[3] === "multiplied" ) {
    //return (str[5].substring(0,str[5].length-2)).toString();
    var ret = Number(str[2])*Number(str[5].substring(0,str[5].length-2));
    return (ret.toString());
  }
  if (str[3] === "minus") {
    var ret = Number(str[2])+Number(str[4].substring(0,str[4].length-2));
    return (ret.toString());
  }
  if (str[3] === "plus") {
    var ret = Number(str[2])+Number(str[4].substring(0,str[4].length-2));
    return (ret.toString());
  }
  if (query.toLowerCase().includes("what is your name?")) {
    return ("charlespun");
  }
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  return "";
}
