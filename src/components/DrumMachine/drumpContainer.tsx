type Props = {
  id: string;
  url: string;
  handleClick: (id: string) => void;
};

export function DrumPad({ id, url, handleClick }: Props): JSX.Element {
  return (
    <div
      className="drum-pad"
      id={`drum-pad-${id}`}
      onClick={() => handleClick(id)}
    >
      {id}
      <audio className="clip" id={id} src={url}></audio>
    </div>
  );
}
