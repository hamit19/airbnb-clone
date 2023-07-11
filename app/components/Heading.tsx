interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }) => {
  return (
    <div className={center ? "text-center py-4" : "text-left py-4"}>
      <h3 className='text-2xl font-bold'>{title}</h3>
      <h5 className='mt-1 text-sm font-semibold text-neutral-500'>
        {subtitle}
      </h5>
    </div>
  );
};

export default Heading;
