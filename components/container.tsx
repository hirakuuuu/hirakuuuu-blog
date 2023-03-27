type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="container mx-auto max-w-7xl px-5">{children}</div>;
};

export default Container;
