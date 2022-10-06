import { fireEvent, render, screen } from "@testing-library/react";
import Light from "./Light";

// it("renders Light Component", () => {
//   render(<Light name="전원" />);
//   const nameElement = screen.getByText(/전원 off/i);
//   expect(nameElement).toBeInTheDocument();
// });

describe("추가 테스트들", () => {
  it("renders Light Component", () => {
    render(<Light name="전원" />);
    const nameElement = screen.getByText(/전원 off/i);
    expect(nameElement).toBeInTheDocument();
  });

  // OFF 버튼이 disabled로 되어 있는지 matchers 함수의 toBeDisabled 함수를 이용해 테스트를 작성
  it("off button disabled", () => {
    render(<Light name="전원" />);
    const offButtonElement = screen.getByRole("button", { name: "OFF" });
    expect(offButtonElement).toBeDisabled();
  });

  // ON 버튼이 disabled가 아니라는 것을 테스트
  it("on button enable", () => {
    render(<Light name="전원" />);
    const onButtonElement = screen.getByRole("button", { name: "ON" });
    expect(onButtonElement).not.toBeDisabled();
  });

  // 버튼 클릭 이벤트의 유무 fireEvent로 테스트 구현
  // on 버튼을 클릭하면 on 버튼이 disabled 될 것이다(toBeDisabled)라고 기대함 => 그렇게 되는 거면 pass
  // fireEvent의 click 메서드에 전달인자로 테스트하고자 하는 요소 전달
  it("change from off to on", () => {
    render(<Light name="전원" />);
    const onButtonElement = screen.getByRole("button", { name: "ON" });
    fireEvent.click(onButtonElement);
    expect(onButtonElement).toBeDisabled();
  });
});
