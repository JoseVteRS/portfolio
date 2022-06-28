
interface Props {
  children: JSX.Element[];
}

const TimelineContainer = ({ children }: Props) => {
  return <div className="timeline">{children}</div>;
};

export default TimelineContainer