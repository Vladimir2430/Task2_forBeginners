(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Функция находит кол-во островов на карте
     * ВАЖНО! Сигнатуру функции изменять нельзя!
     *
     * @param {number[][]} map карта островов представленная двумерной матрицей чисел
     * @returns {number} кол-во островов
     */
    function solution(map) {
        // todo: подсчитать кол-во островов на карте
        let count=0;
        for (let i=0; i<map.length; i++) {
          for (let j=0; j<map[0].length; j++) {
            if (map[i][j]==1 && (map[i][j+1]==1 || map[i][j-1]==1)) {continue;}
            if (map[i][j]==1 && (map[i][j+1]==0 || map[i][j-1]==0)) {count+=1;}
          }
        }
        return count;
    }

    root.SHRI_ISLANDS.solution = solution;
})(this);
