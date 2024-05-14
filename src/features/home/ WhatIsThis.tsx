import BoxContents from '../../components/BoxContents';
import BoxHeader from '../../components/BoxHeader';

const WhatIsThis = () => {
  return (
    <div>
      <BoxHeader title={'これは何？'} isRounded />
      <BoxContents isRounded>
        Steamでプレイしたゲームを表示する埋め込みコードを生成できます。
        <br />
        生成した埋め込みコードはあなたのWebサイトやアプリで自由に使うことができます。
      </BoxContents>
    </div>
  );
};

export default WhatIsThis;
