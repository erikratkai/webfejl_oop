/**
 * Letrehoz egy tablat es definialja a managernek,
 * hogy mi tortenjen add eseten
 */
class Table{

    /**
     * @type {Manager} 
     */
    #manager;

    /**
     * 
     * @param {Manager} manager 
     */
    constructor(manager){
        this.#manager = manager;
        const tbody = Gomszab.makeTableWithHeader(["Kérdés", "Válasz1", "Válasz2", "Válasz3", "Válasz4", "Helyesválasz"]);
        this.#manager.setAddCallback((question) => {
            const tableRow = document.createElement("tr");
            tbody.appendChild(tableRow);

            Gomszab.makeCellToRow(tableRow, question.questionText);
            for(const answer of question.answers){
                Gomszab.makeCellToRow(tableRow, answer);
            }
            Gomszab.makeCellToRow(tableRow, question.rightAnswer);
        })
    }
}