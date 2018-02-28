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
        for (let i=0; i<map.length-1; i++) {
          for (let j=0; j<map[0].length; j++) {
            if ((arr[i][j]==1 || arr[i][j]==2) && arr[i][j+1]==1) {arr[i][j+1]=2;} //за 1 или 2 - 2
            if (arr[i][j]==1 && (arr[i][j+1]==0 || arr[i][j+1]==undefined || arr[i][j+1]==2)) {count+=1;}
            if ((arr[i][j]==1 || arr[i][j]==2) && arr[i+1][j]==1) {arr[i+1][j]=2;} //под 2 - 2
          }
        }
        let sum=0;
        for (let i=0; i<map[0].length; i++) {
          if ((map[map.length-1][i]==1 || map[map.length-1][i]==2) && map[map.length-1][i+1]==1) {map[map.length-1][i+1]==2}
          if (map[map.length-1][i]==1) {sum+=1;}
        }
        return count+sum;
    }

    root.SHRI_ISLANDS.solution = solution;
})(this);
