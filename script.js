function calculateSupplies() {
  const iv1Frequency = document.getElementById('iv1-frequency').value;
  const iv2Frequency = document.getElementById('iv2-frequency').value;
  const iv3Frequency = document.getElementById('iv3-frequency').value;
  const numDays = parseInt(document.getElementById('num-days').value);
  const heparinOrdered = document.getElementById('heparin-ordered').checked;

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
  let totalSalineFlushes = 0;
  let totalHeparin = 0;
  let totalRedBlueCaps = 0;
  
  // Calculate supplies for IV 1
  if (iv1Frequency !== '') {
    const frequency = parseFloat(iv1Frequency);
    if (frequency === 0.5) {
      totalIVTubing += Math.ceil(numDays / 2);
      totalSalineFlushes += Math.ceil(numDays / 2) * 20;
      totalRedBlueCaps += Math.ceil(numDays / 2);
      if (heparinOrdered) {
        totalHeparin += Math.ceil(numDays / 2) * 5;
      }
    } else {
      totalIVTubing += numDays;
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
      totalSalineFlushes += Math.ceil(numDays / 2) * 20;
      totalRedBlueCaps += Math.ceil(numDays / 2);
      if (heparinOrdered) {
        totalHeparin += Math.ceil(numDays / 2) * 5;
      }
    } else {
      totalIVTubing += numDays;
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
      totalSalineFlushes += Math.ceil(numDays / 2) * 20;
      totalRedBlueCaps += Math.ceil(numDays / 2);
      if (heparinOrdered) {
        totalHeparin += Math.ceil(numDays / 2) * 5;
      }
    } else {
      totalIVTubing += numDays;
      totalSalineFlushes += Math.ceil(frequency * 20 * numDays);
      totalRedBlueCaps += Math.ceil(frequency * numDays);
      if (heparinOrdered) {
        totalHeparin += Math.ceil(frequency * 5 * numDays);
      }
    }
  }
  
  const ivDressingChangeKits = Math.ceil(numDays / 7);

// Display the results
const resultContainer = document.getElementById('result');
resultContainer.innerHTML = `
  <h4 class="result-heading">Supplies</h4>
  <p>Total primary IV Tubing: ${totalIVTubing}</p>
  <p>Total Saline Flushes (ml): ${totalSalineFlushes}</p>
  <p>Total IV Dressing Change Kits: ${ivDressingChangeKits}</p>
  ${heparinOrdered ? `<p>Total Heparin (ml): ${totalHeparin}</p>` : ''}
  <p>Total Red Caps/Blue Caps: ${totalRedBlueCaps}</p>
`;
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
