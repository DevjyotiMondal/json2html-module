// json2html.js
export default function json2html(data) {
    // Create the opening table tag with the data-user attribute
    let html = '<table data-user="devjyotimondal73939@gmail.com">';
  
    // Extract headers (all unique keys from the objects in the data array)
    const headers = new Set();
    data.forEach(obj => Object.keys(obj).forEach(key => headers.add(key)));
  
    // Convert the headers Set to an array
    const headerArray = Array.from(headers);
  
    // Construct the table header
    html += "<thead><tr>";
    headerArray.forEach(header => {
      html += `<th>${header}</th>`;
    });
    html += "</tr></thead>";
  
    // Construct the table body
    html += "<tbody>";
    data.forEach(obj => {
      html += "<tr>";
      headerArray.forEach(header => {
        // Add table cells, leaving them empty if the property is missing
        html += `<td>${obj[header] !== undefined ? obj[header] : ""}</td>`;
      });
      html += "</tr>";
    });
    html += "</tbody></table>";
  
    // Return the complete HTML table as a string
    return html;
  }
  