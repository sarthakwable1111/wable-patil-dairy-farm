// तारीख आपोआप सेट करा
document.getElementById('date').value = new Date().toLocaleDateString('mr-IN');

document.getElementById('milkForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // इनपुट्समधून डेटा घ्या
  const aadhaar = document.getElementById('aadhaar').value;
  const name = document.getElementById('animalName').value;
  const fat = parseFloat(document.getElementById('fat').value);
  const snf = parseFloat(document.getElementById('snf').value);
  const liters = parseFloat(document.getElementById('liters').value);
  const rate = parseFloat(document.getElementById('rate').value);
  const degree = parseFloat(document.getElementById('degree').value);
  const milkType = document.getElementById('milkType').value;
  const date = document.getElementById('date').value;

  const totalAmount = (liters * rate).toFixed(2);

  // नवीन पंक्ती टेबलमध्ये टाका
  const table = document.getElementById('recordsTable').querySelector('tbody');
  const row = table.insertRow();

  row.innerHTML = `
    <td>${aadhaar}</td>
    <td>${name}</td>
    <td>${fat}</td>
    <td>${snf}</td>
    <td>${liters}</td>
    <td>${rate}</td>
    <td>${totalAmount}</td>
    <td>${degree}</td>
    <td>${milkType}</td>
    <td>${date}</td>
    <td><button class="delete-btn">हटवा</button></td>
  `;

  // डिलीट बटणाचे कार्य
  row.querySelector('.delete-btn').addEventListener('click', () => {
    row.remove();
  });

  // फॉर्म क्लिअर करा
  document.getElementById('milkForm').reset();
  document.getElementById('date').value = new Date().toLocaleDateString('mr-IN');
});
