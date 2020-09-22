let numbers = [7, 3, 1, 5, 8];
let chosenBar = -1; // Variabel for hvilken stolpe som er valgt
let inputValue = 0; // Variabel for hva som er skrevet i input-feltet
const errorMessage = 'Error: Only 1-10 are valid numbers'


function drawView() {
    let svgInnerHtml = '';
    for (let i = 0; i < numbers.length; i++) {
        svgInnerHtml += createBar(numbers[i], i + 1);
    }
    document.getElementById('content').innerHTML = `
            <div class="diagramPanel">
                <hr>
                <svg id="chart" width="500" height="500"  preserveAspectRatio="none" viewBox="0 0 80 60">
                    
                    ${svgInnerHtml}
                </svg>
                <hr>
                Selected Column: ${(chosenBar != -1) ? chosenBar : '<i>none</i>'}
                Value:
                <input type="number" min="1" max="10" value="${numbers[chosenBar - 1]}" onInput="inputValue = this.value;" />
                <button onClick="(modifyElement(inputValue)) ? addElement(numbers, parseInt(inputValue)) : alert(errorMessage); drawView();"> Add Column </button>
                <button ${(chosenBar == -1) ? 'disabled' : ''}  onClick="(modifyElement(inputValue)) ? numbers[chosenBar -1] = inputValue : alert(errorMessage); drawView();"> Edit Selected </button>
                <button ${(chosenBar == -1) ? 'disabled' : ''}  onClick="removeElement(chosenBar-1, numbers); drawView();"> Remove Selected </button>
            </div>
        `;
}


function createBar(number, barNo) {
    const width = 8;
    const spacing = 2;
    let x = (barNo - 1) * (width + spacing);
    let height = number * 6;
    let y = 60 - height;
    let color = calcColor(1, 10, barNo);
    return `<rect onClick='chosenBar = setElementSelection(${barNo}, chosenBar); inputValue = numbers[chosenBar - 1]; drawView();'
            width="${width}" height="${height}"
            x="${x}" y="${y}" fill="${color}" ${(chosenBar == barNo) ?'stroke="black"' : ''}></rect>`;
}

function calcColor(min, max, val) {
    var minHue = 240, maxHue = 0;
    var curPercent = (val - min) / (max - min);
    var colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
    return colString;
}

function setElementSelection(index, previousSelection) {     //sette en valgt stolpe, returner -1 nåt ikkeno er valgt
    return (previousSelection == index) ? -1 : index;
}

function addElement(array, item) {                             //legger vi til elementet i ett array, og returnerer lengden.
    return array.push(item);     
}

function removeElement(index, array) {
    if (array != null && index >= 0) {
        chosenBar = -1;
        return array.splice(index, 1);
    }
    else {
        return null;
    }

}

function modifyElement(newHeight) {
    return (newHeight > 0 && newHeight <= 10) ? true : false; 
}
