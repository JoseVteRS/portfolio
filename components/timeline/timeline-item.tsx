
interface Props {
    position: "left" | "right";
    title: string;
    description: string;
    date: string;
}

const TimelineItem = ({ position, title, description, date }: Props) => {
  return (
    <div className={`tl-container ${position}`}>
      <div className="date text-white">{date}</div>
      <i className="icon fa fa-user"></i>
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem