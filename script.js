function calculateSupplies() {
  const iv1Frequency = document.getElementById('iv1-frequency').value;
  const iv2Frequency = document.getElementById('iv2-frequency').value;
  const iv3Frequency = document.getElementById('iv3-frequency').value;
  const numDays = parseInt(document.getElementById('num-days').value);
  const heparinOrdered = document.getElementById('heparin-ordered').checked;

  // Check if at least one IV medication is being shipped
  const isIVMedShipped = iv1Frequency !== '' || iv2Frequency !== '' || iv3Frequency !== '';

  // Error handling for number of days
  if (isNaN(numDays) || numDays <= 0) {
    showErrorMessage('Please enter a valid number of days (greater than zero).');
    clearResults();
    return;
  }

  // Error handling for frequency selection
  if (iv1Frequency === '' && iv2Frequency === '' && iv3Frequency === '') {
    showErrorMessage('Please select a frequency for at least one IV.');
    clearResults();
    return;
  }

  let totalIVTubing = 0;
  let totalUltrasiteValve = 0;
  let totalSalineFlushes = 0;
  let totalHeparin = 0;
  let totalRedBlueCaps = 0;

  // Calculate supplies for IV 1
  if (iv1Frequency !== '') {
    const frequency = parseFloat(iv1Frequency);
    if (frequency === 0.5) {
      totalIVTubing += Math.ceil(numDays / 2);
      totalUltrasiteValve += Math.ceil(numDays / 2);
      totalSalineFlushes += Math.ceil(numDays / 2) * 20;
      totalRedBlueCaps += Math.ceil(numDays / 2);
      if (heparinOrdered) {
        totalHeparin += Math.ceil(numDays / 2) * 5;
      }
    } else {
      totalIVTubing += numDays;
      totalUltrasiteValve += numDays;
      totalSalineFlushes += Math.ceil(frequency * 20 * numDays);
      totalRedBlueCaps += Math.ceil(frequency * numDays);
      if (heparinOrdered) {
        totalHeparin += Math.ceil(frequency * 5 * numDays);
      }
    }
  }

  // Calculate supplies for IV 2
  if (iv2Frequency !== '') {
    const frequency = parseFloat(iv2Frequency);
    if (frequency === 0.5) {
      totalIVTubing += Math.ceil(numDays / 2);
      totalUltrasiteValve += Math.ceil(numDays / 2);
      totalSalineFlushes += Math.ceil(numDays / 2) * 20;
      totalRedBlueCaps += Math.ceil(numDays / 2);
      if (heparinOrdered) {
        totalHeparin += Math.ceil(numDays / 2) * 5;
      }
    } else {
      totalIVTubing += numDays;
      totalUltrasiteValve += numDays;
      totalSalineFlushes += Math.ceil(frequency * 20 * numDays);
      totalRedBlueCaps += Math.ceil(frequency * numDays);
      if (heparinOrdered) {
        totalHeparin += Math.ceil(frequency * 5 * numDays);
      }
    }
  }

  // Calculate supplies for IV 3
  if (iv3Frequency !== '') {
    const frequency = parseFloat(iv3Frequency);
    if (frequency === 0.5) {
      totalIVTubing += Math.ceil(numDays / 2);
      totalUltrasiteValve += Math.ceil(numDays / 2);
      totalSalineFlushes += Math.ceil(numDays / 2) * 20;
      totalRedBlueCaps += Math.ceil(numDays / 2);
      if (heparinOrdered) {
        totalHeparin += Math.ceil(numDays / 2) * 5;
      }
    } else {
      totalIVTubing += numDays;
      totalUltrasiteValve += numDays;
      totalSalineFlushes += Math.ceil(frequency * 20 * numDays);
      totalRedBlueCaps += Math.ceil(frequency * numDays);
      if (heparinOrdered) {
        totalHeparin += Math.ceil(frequency * 5 * numDays);
      }
    }
  }

  const ivDressingChangeKits = Math.ceil(numDays / 7);
  const statLock = Math.ceil(numDays / 7);

  const ivMedFrequencies = [];

  if (iv1Frequency !== '') {
    ivMedFrequencies.push(`<strong>IV Med 1 - </strong>${getFrequencyText(iv1Frequency)}`);
  }
  if (iv2Frequency !== '') {
    ivMedFrequencies.push(`<strong>IV Med 2 - </strong>${getFrequencyText(iv2Frequency)}`);
  }
  if (iv3Frequency !== '') {
    ivMedFrequencies.push(`<strong>IV Med 3 - </strong>${getFrequencyText(iv3Frequency)}`);
  }

  const daysSupply = numDays + ' days';
  const ivMedDescription = ivMedFrequencies.length > 0 ? ivMedFrequencies.join(', ') : 'No IV medications selected';

  // Display the results
  const resultContainer = document.getElementById('result');
  resultContainer.innerHTML = `
      <h4 class="result-heading">Selected Meds</h4>
      <p>${ivMedDescription}</p>
      <p><strong>Days Supply: </strong>${daysSupply}</p>
      <h4 class="result-heading">Supplies</h4>
      ${isIVMedShipped ? '<p>IV Pump: 1</p>' : ''}
      <p>Primary IV Tubing: ${totalIVTubing}</p>
      <p>Saline Flushes (ml): ${totalSalineFlushes}</p>
      ${heparinOrdered ? `<p>Total Heparin (ml): ${totalHeparin}</p>` : ''}
      <p>IV Dressing Change Kits: ${ivDressingChangeKits}</p>
      <p>Stat Locks: ${statLock}</p>
      <p>Ultrasite Valves: ${totalUltrasiteValve}</p>
      <p>Red Caps: ${totalRedBlueCaps}</p>
    `;
}

function getFrequencyText(frequencyValue) {
  switch (frequencyValue) {
    case '1':
      return 'Once daily';
    case '2':
      return 'Twice daily';
    case '3':
      return '3 times daily';
    case '4':
      return '4 times daily';
    case '6':
      return '6 times daily';
    case '0.5':
      return 'Daily, every other day';
    default:
      return '';
  }
}

function showErrorMessage(message) {
  const errorContainer = document.getElementById('error-message');
  errorContainer.textContent = message;
  errorContainer.style.display = 'block';

  setTimeout(() => {
    errorContainer.style.display = 'none';
  }, 2000);
}

function clearResults() {
  const resultContainer = document.getElementById('result');
  resultContainer.innerHTML = '';
}

function clearFields() {
  document.getElementById('iv1-frequency').selectedIndex = 0;
  document.getElementById('iv2-frequency').selectedIndex = 0;
  document.getElementById('iv3-frequency').selectedIndex = 0;
  document.getElementById('num-days').value = '';
  document.getElementById('heparin-ordered').checked = false;
  clearResults();
}
function printSupplies() {
  const resultContainer = document.getElementById('result');
  if (resultContainer.innerHTML.trim() !== '') {
    const printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Supplies</title>');
    printWindow.document.write('<link rel="stylesheet" type="text/css" href="print-styles.css">');
    printWindow.document.write('</head><body>');
    printWindow.document.write(resultContainer.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  }
}
