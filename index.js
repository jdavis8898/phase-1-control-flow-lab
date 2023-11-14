function scuberGreetingForFeet(rideDis)
{
  if (rideDis <= 400)
  {
    const response = "This one is on me!";

    return response;
  }

  else if (rideDis > 400 && rideDis <= 2000)
  {
    const response = "That will be twenty bucks.";

    return response;
  }

  else if (rideDis > 2000 && rideDis <= 2500)
  {
    const response = "I will gladly take your thirty bucks.";

    return response;
  }

  else
  {
    const response = "No can do.";

    return response;
  }
}

function ternaryCheckCity(city)
{
  const response = city === "NYC" ? "Ok, sounds good." : "No go.";

  return response;
}

function switchOnCharmFromTip(tip)
{
  let response;

  switch (tip)
  {
    case "generous":
      response = "Thank you so much.";
      break;

    case "not as generous":
      response = "Thank you.";
      break;

    default:
      response = "Bye."
  }

  return response;
}