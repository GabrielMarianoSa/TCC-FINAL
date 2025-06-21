document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-calculadora');
  const resultadoDiv = document.getElementById('resultado');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const energia = parseFloat(document.getElementById('energia').value);
    const transporte = parseFloat(document.getElementById('transporte').value);

    if (isNaN(energia) || energia < 0) {
      alert('Por favor, insira um valor válido para consumo de energia.');
      return;
    }

    if (isNaN(transporte) || transporte < 0) {
      alert('Por favor, insira um valor válido para distância de transporte.');
      return;
    }

    const fatorEnergia = 0.084;     // kg CO2 por kWh
    const fatorTransporte = 0.192;  // kg CO2 por km

    const emissaoEnergia = energia * fatorEnergia;
    const emissaoTransporte = transporte * fatorTransporte;
    const emissaoTotal = emissaoEnergia + emissaoTransporte;

    resultadoDiv.innerHTML = `
      <h3>Resultado da sua pegada de carbono:</h3>
      <p>Emissão por energia: <strong>${emissaoEnergia.toFixed(2)} kg CO₂</strong></p>
      <p>Emissão por transporte: <strong>${emissaoTransporte.toFixed(2)} kg CO₂</strong></p>
      <p><strong>Total estimado: ${emissaoTotal.toFixed(2)} kg CO₂</strong></p>
    `;
  });
});
