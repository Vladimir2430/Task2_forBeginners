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
          if ((arr[0][i]==1 || arr[0][i]==2) && arr[0][i+1]==1) {arr[0][i+1]=2;}
          if ((arr[0][i]==1 || arr[0][i]==2) && arr[1][i]==1) {arr[1][i]=2;}
          if ((arr[0][i]==1) && (arr[0][i+1]==0 || arr[0][i+1]==2 || arr[0][i+1]==undefined)) {count+=1;}

          if ((arr[1][i]==1 || arr[1][i]==2) && arr[1][i+1]==1) {arr[1][i+1]=2;}
          if ((arr[1][i]==1 || arr[1][i]==2) && arr[2][i]==1) {arr[2][i]=2;}
          if ((arr[1][i]==1) && (arr[1][i+1]==0 || arr[1][i+1]==2 || arr[1][i+1]==undefined)) {count+=1;}

          if ((arr[2][i]==1 || arr[2][i]==2) && arr[2][i+1]==1) {arr[2][i+1]=2;}
          if ((arr[2][i]==1 || arr[2][i]==2) && arr[3][i]==1) {arr[3][i]=2;}
          if ((arr[2][i]==1) && (arr[2][i+1]==0 || arr[2][i+1]==2 || arr[2][i+1]==undefined)) {count+=1;}

          if ((arr[3][i]==1 || arr[3][i]==2) && arr[3][i+1]==1) {arr[3][i+1]=2;}
          if ((arr[3][i]==1 || arr[3][i]==2) && arr[4][i]==1) {arr[4][i]=2;}
          if ((arr[3][i]==1) && (arr[3][i+1]==0 || arr[3][i+1]==2 || arr[3][i+1]==undefined)) {count+=1;}

          if ((arr[4][i]==1 || arr[4][i]==2) && arr[4][i+1]==1) {arr[4][i+1]=2;}
          if ((arr[4][i]==1) && (arr[4][i+1]==0 || arr[4][i+1]==2 || arr[4][i+1]==undefined)) {count+=1;}
        }
        return count;
    }

    root.SHRI_ISLANDS.solution = solution;
})(this);
