useEffect(() => {
  if (beqChartData) {
    const ctx = document.getElementById('beqChart').getContext('2d');
    new Chart(ctx, {
            type: 'line',
            data: beqChartData,
            options: {/* Options */},
         });
      }
}, [beqChartData]);