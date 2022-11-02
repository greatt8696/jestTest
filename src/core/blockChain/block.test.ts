// 작성한 코드들을 테스트해보기 위해서 만든 파일

import { Block } from "@core/blockChain/block";
import { GENESIS } from "@core/config";

describe("Block 검증", () => {
  let newBlock: Block;

  it("블록 추가", () => {
    const data = ["Block 2"];
    newBlock = Block.generateBlock(GENESIS, data);
    console.log(newBlock);
  });

  it("브록 검증", () => {
    const isValidBlock = Block.isValidNewBlock(newBlock, GENESIS);
    if (isValidBlock.isError) {
      console.error(isValidBlock.isError);

      return expect(true).toBe(false);
    }
  });
});

//describe 함수를 사용하여 테스트 함수를 많이 작성할경우
