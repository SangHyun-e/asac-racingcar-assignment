class RacingData {
  constructor(carNames, tryCount) {
    // 자동차 이름, 시도 횟수 저장
    this.cars = carNames.map((name) => ({ name, distance: 0 }));
    this.tryCount = tryCount;
  }

  // 자동차 데이터 반환
  getCars() {
    return this.cars;
  }

  // 시도 횟수 반환
  getTryCount() {
    return this.tryCount;
  }
}

export default RacingData;
