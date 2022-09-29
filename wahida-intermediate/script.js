
let worker = JSON.parse(employee);
console.table(worker);

for(let record of worker){
    document.getElementById("content").innerHTML += `
    <tr class="border border-dark border-success mb-2 s-4">
      <td>${record.unique_ID}</td>
      <td>${record.firstname}</td>
      <td>${record.lastname}</td>
      <td>${record.email_address}</td>
      <td>${record.job_title}</td>
      <td>${record.salary}</td>
    </tr>
`;
}

