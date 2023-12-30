function loadPage(page) {
  // Fetch the content of the page (you can use AJAX, fetch, etc.)
  // For simplicity, we'll just create some sample content
  let content = "";

  switch (page) {
    case "lectures":
      content = "<p>Welcome to the Home Page!</p>";
      break;
    case "students":
      content = "<p>Learn more about us on the About Page.</p>";
      break;
    case "grades":
      content = "<p>Contact us on the Contact Page.</p>";
      break;
    default:
      content = "<p>Page not found.</p>";
  }

  // Update the content of the #content div
  document.getElementById("pageContent").innerHTML = content;
}
