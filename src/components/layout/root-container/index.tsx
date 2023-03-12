import Header from "../header";

interface RootContainerProps {
  children: React.ReactNode;
}

const RootContainer: React.FC<RootContainerProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="root-container">{children}</main>
    </>
  );
};

export default RootContainer;
