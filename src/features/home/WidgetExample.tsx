import BoxContents from '../../components/BoxContents';
import BoxHeader from '../../components/BoxHeader';

const WidgetExample = () => {
  return (
    <div>
      <BoxHeader title={'使用例'} />
      <BoxContents>
        <div>
          <span>生成されたコードを使用すると、以下のようにゲーム一覧を表示できます。</span>
        </div>
        <div className="mt-2">
          <iframe
            src="http://localhost:3000/widget?id=76561198424303465&num=8"
            width="350"
            height="480"
          />
        </div>
      </BoxContents>
    </div>
  );
};

export default WidgetExample;
