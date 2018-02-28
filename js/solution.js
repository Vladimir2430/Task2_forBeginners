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
        let arr=map;
        for (let i=0; i<map.length; i++) {
          for (let j=0; j<map[0].length; j++) {
            if (arr[i][j]==1 && arr[i][j+1]==1) {arr[i][j]=2;}
            if (arr[i][j]==1 && (arr[i][j+1]==0 || arr[i][j+1]==undefined)) {count+=1;}
            if (arr[i][j]==2 && arr[i+1][j]==1) {arr[i+1][j]=2;}
            if (arr[i][j]==2 && arr[i][j+1]==1) {arr[i][j+1]=2;}
          }
        }
        return count;
    }

    root.SHRI_ISLANDS.solution = solution;
})(this);
