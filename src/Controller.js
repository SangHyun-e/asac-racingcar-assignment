import View from "./View.js";
import RacingData from "./Model.js";
import { Random } from "@woowacourse/mission-utils";

class Controller {
  constructor() {
    this.view = new View();
    this.racingData = null;
  }
  async start() {
    // 입력받은 값
    const carNames = await this.view.getCarNames();
    const tryCount = await this.view.getTryCount();
    //  const cars = carNames.map(cars => new RacingData(carNames));

    this.racingData = new RacingData(carNames, tryCount);
    // console.log(this.racingData);
    // 시도 횟수
    for (let i = 0; i < tryCount; i++) {
      this.moveCars();
      this.view.printRaceResult(this.racingData.getCars());
    }
  }
  // 자동차 이동
  moveCars() {
    this.racingData.getCars().forEach((car) => {
      const randomNumber = Random.pickNumberInRange(0, 9);
      if (randomNumber >= 4) {
        car.distance += 1;
      }
    });
  }
}
export default Controller;
