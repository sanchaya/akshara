function analyzeText() {
  const kannadaText = document.getElementById("kannadaText").value;

  const charCount = kannadaText.length;
  const symbolCount = Array.from(kannadaText).filter((char) => {
    const charCode = char.charCodeAt(0);
    return charCode < 32 || (charCode > 126 && charCode < 160);
  }).length;
  const spaceCount = Array.from(kannadaText).filter(
    (char) => char === " "
  ).length;

  const varnaCount = Array.from(kannadaText).filter((char) => {
    const charCode = char.charCodeAt(0);
    return charCode >= 0x0c80 && charCode <= 0x0cf2;
  }).length;

  const vyanjanaCount = Array.from(kannadaText).filter((char) => {
    const charCode = char.charCodeAt(0);
    return charCode >= 0x0c95 && charCode <= 0x0cb9;
  }).length;

  const swaraCount = Array.from(kannadaText).filter((char) => {
    const charCode = char.charCodeAt(0);
    return charCode >= 0x0c85 && charCode <= 0x0c94;
  }).length;

  const conjunctsCount = Array.from(kannadaText).filter((char) => {
    const charCode = char.charCodeAt(0);
    return (
      (charCode >= 0x0c80 && charCode <= 0x0cf2) ||
      (charCode >= 0x0c85 && charCode <= 0x0c94) ||
      (charCode >= 0x0c85 && charCode <= 0x0c94)
    );
  }).length;

  const invalidCharCount = Array.from(kannadaText).filter((char) => {
    const charCode = char.charCodeAt(0);
    return (
      charCode < 0x0c80 ||
      charCode > 0x0cf2 ||
      (charCode > 126 && charCode < 160)
    );
  }).length;

  const otherLangLettersCount = Array.from(kannadaText).filter((char) => {
    const charCode = char.charCodeAt(0);
    return charCode > 0x0cf2 || !(charCode > 126 && charCode < 160);
  }).length;

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
        <p>Character Count: ${charCount}</p>
        <p>Symbol Count: ${symbolCount}</p>
        <p>White Space Count: ${spaceCount}</p>
        <p>Varnas Count: ${varnaCount}</p>
        <p>Vyanjanas Count: ${vyanjanaCount}</p>
        <p>Swara Count: ${swaraCount}</p>
        <p>Conjuncts  Count: ${conjunctsCount}</p>
        <p>Invalid Characters Count: ${invalidCharCount}</p>
        <p>Letters from Other Languages Count: ${otherLangLettersCount}</p>
    `;
}
