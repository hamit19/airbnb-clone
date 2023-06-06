interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }) => {
  return (
    <div className={center ? "text-center" : "text-left"}>
      <h3 className='text-2xl font-bold'>{title}</h3>
      <h5 className='font-semibold text-md text-neutral-600'>{subtitle}</h5>
    </div>
  );
};

export default Heading;
