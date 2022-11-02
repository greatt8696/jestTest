import { GENESIS } from "@core/config";
import { SHA256 } from "crypto-js";
import merkle from "merkle";
import { BlockHeader } from "./blockHeader";

// 부모 속성을 가져오고 IBlock 인터페이스 형태의 클래스를 만듦
export class Block extends BlockHeader implements IBlock {
  public merkleRoot: string;
  public nonce: number;
  public difficulty: number;
  public data: string[];
  public hash: string;

  constructor(_previousBlock: Block, _data: string[]) {
    // 부모 클래스 속성 가져와야 하니까 super 사용
    super(_previousBlock);

    this.merkleRoot = Block.getMerkleRoot(_data);
    this.hash = Block.createBlockHash(this);
    this.nonce = 0;
    this.difficulty = 0;
    this.data = _data;
  }

  public static getGENESIS(): Block {
    return GENESIS;
  }

  public static generateBlock(_previousBlock: Block, _data: string[]): Block {
    const generateBlock = new Block(_previousBlock, _data);
    return generateBlock;
  }

  // 머클루트 반환 함수
  public static getMerkleRoot<T>(_data: T[]): string {
    const merkelTree = merkle("sha256").sync(_data);
    return merkelTree.root();
  }

  // 블록 해시 생성 함수
  public static createBlockHash(_block: Block): string {
    const { version, timestamp, height, merkleRoot, previousHash } = _block;
    const values: string = `${version}${timestamp}${height}${merkleRoot}${previousHash}`;
    return SHA256(values).toString();
  }

  //블록 유효 검사 함수(새로운 블록이 생성되면 검증)
  public static isValidNewBlock(
    _newBlock: Block,
    _previousBlock: Block
  ): Failable<Block, string> {
    // 블록의 높이가 이전 블록보다 1이 증가된 상태인지 체크하는 식
    if (_previousBlock.height + 1 !== _newBlock.height)
      return { isError: true, value: "블록 높이가 다르쟈낭 ㅇㅅㅇ!" };

    // 블록의 이전 블록 해시 값이 새로운 블록의 이전블록 해시값과 같은지
    if (_previousBlock.hash !== _newBlock.previousHash) {
      return { isError: true, value: "이전 블록의 해시가 다르쟈낭 ㅇㅅㅇ!" };
    }

    // 생성된 블록의 정보를 가지고 다시 해싱해서 생성된 블록의 해시값과 같은지 비교
    if (Block.createBlockHash(_newBlock) !== _newBlock.hash) {
      return { isError: true, value: "블록 해시 오류 " };
    }

    return { isError: false, value: _newBlock };
  }
}
