import { Console } from "@woowacourse/mission-utils";

class View {
  // 자동차 입력받기
  async getCarNames() {
    const carInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const carNames = carInput.split(",").map((car) => car.trim());
    // console.log("carNames: ", carNames);
    return carNames;
  }

  async getTryCount() {
    const countInput = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    // console.log("countInput :" ,countInput);
    return parseInt(countInput);
  }
  printRaceResult(cars) {
    cars.forEach((car) => {
      Console.print(`${car.name}: ${"-".repeat(car.distance)}`);
    });
    Console.print("");
  }
}

export default View;
