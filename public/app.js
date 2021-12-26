"use strict";
const d = document, $form = d.getElementById('form-register'), fragment = d.createDocumentFragment(), $tbody = d.getElementById('data-table'), $total = d.getElementById('total-prices');
$form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = {
        transaction: $form.transaction.value,
        person: $form.person.value,
        amount: $form.amount.valueAsNumber,
        details: $form.details.value,
        accept: $form.accept.boolean
    };
    renderRegister(e, formData);
    calculateTotal();
});
const renderRegister = (e, f) => {
    const tr = d.createElement('tr');
    const ds = `
    <td>${f.transaction === 'debit' ? "Débito" : "Crédito"}</td>
    <td>${f.person}</td>
    <td class="price">${f.transaction === 'debit' ? '+' : '-'}${f.amount}</td>
    <td>${f.details}</td>
  `;
    tr.innerHTML = ds;
    $tbody.appendChild(tr);
};
const calculateTotal = () => {
    const prices = d.querySelectorAll('.price');
    let total = 0;
    prices.forEach(el => {
        total += parseInt(el.textContent);
    });
    $total.textContent = `Total: ${total}`;
};
