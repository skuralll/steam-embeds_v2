type Props = {
  code: string;
};

const CodePreview = ({ code }: Props) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-white">プレビュー :</label>
      <span dangerouslySetInnerHTML={{ __html: code }} />
    </div>
  );
};

export default CodePreview;
