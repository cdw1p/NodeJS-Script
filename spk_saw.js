const decisionSupportSystem = (alternatives, criteria, weights) => {
  // Hitung nilai preferensi setiap alternatif
  const preferenceValues = alternatives.map((alternative) => {
    // Hitung nilai preferensi setiap kriteria
    const criteriaValues = criteria.map((criterion) => {
      // Dapatkan nilai dari alternatif untuk kriteria ini
      const value = alternative[criterion.name];

      // Hitung nilai preferensi dari nilai tersebut
      let preferenceValue;
      if (value === criterion.best) {
        preferenceValue = 1;
      } else if (value === criterion.worst) {
        preferenceValue = 0;
      } else {
        preferenceValue = (value - criterion.worst) / (criterion.best - criterion.worst);
      }

      // Kembalikan nilai preferensi yang dihitung
      return preferenceValue;
    });

    // Hitung nilai preferensi total dari alternatif ini dengan mengalikan nilai preferensi setiap kriteria dengan bobotnya
    const totalPreferenceValue = criteriaValues.reduce((total, value, index) => total + (value * weights[index]), 0);

    // Kembalikan nilai preferensi total
    return totalPreferenceValue;
  });

  // Dapatkan indeks alternatif dengan nilai preferensi tertinggi
  const bestAlternativeIndex = preferenceValues.indexOf(Math.max(...preferenceValues));

  // Kembalikan alternatif dengan nilai preferensi tertinggi
  return alternatives[bestAlternativeIndex];
};

// Contoh penggunaan
const alternatives = [
  { name: "Alternatif A", harga: 5, kualitas: 4 },
  { name: "Alternatif B", harga: 3, kualitas: 5 },
  { name: "Alternatif C", harga: 4, kualitas: 3 }
];

const criteria = [
  { name: "harga", best: 1, worst: 5 },
  { name: "kualitas", best: 5, worst: 1 }
];

const weights = [0.5, 0.5];

const bestAlternative = decisionSupportSystem(alternatives, criteria, weights);

console.log(bestAlternative);  // Output: { name: "Alternatif B", harga: 3, kualitas: 5 }
