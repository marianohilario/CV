document.getElementById('btnCrearPdf').addEventListener('click', function() {
  const content = document.getElementsByClassName('page-content');
  
  // Opciones de configuración para la generación del PDF
  const options = {
    margin: 1,
    filename: 'mi_pdf.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  // Crear el archivo PDF
  html2pdf()
    .from(content)
    .set(options)
    .save();
});
