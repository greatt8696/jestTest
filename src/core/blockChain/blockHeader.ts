export class BlockHeader implements IBlockHeader {
  public version: string;
  public height: number;
  public timestamp: number;
  public previousHash: string;

  constructor(_previousBlock: IBlock) {
    this.version = BlockHeader.getVersion();
    this.timestamp = BlockHeader.getTimestamp(); //new Date()
    this.height = _previousBlock.height + 1;
    this.previousHash = _previousBlock.hash;
  }

  /**
   * static 메소드를 사용하면 인스턴스에 메소드가 포함되지 않아서
   * 인스턴스 생성마다 메소드가 비효율적으로 생성되는것을 방지
   * 클래스
   *  */
  public static getVersion() {
    return "1.0.0";
  }

  public static getTimestamp() {
    return new Date().getTime();
  }
}

/**
 * 여기서 implemets는
 * extends와 implemets 차이
 * extends : 클래스를 상속받을 때 사용한다.
 * 클래스를 정의할 때 extends를 사용해서 부모 클래스를 상속받게 되면
 * 자식클래스는 부모 클래스의 속성과 메소드를 가져올 수 있다.
 * (자식 클래스에서 추가 정의할 필요가 없다.)
 *
 * implements : 특정 클래스 혹은 미리 정해놓은 인터페이스와 똑같은 형태로
 * 클래스를 정의 하고 싶을 때 (extends 랑 다른것)
 */
