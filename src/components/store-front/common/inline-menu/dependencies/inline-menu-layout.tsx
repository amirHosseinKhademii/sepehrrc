import { useDirection } from 'hooks';

export const InlineMenuLayout = ({ children }) => {
  const { flexDirection } = useDirection();
  return (
    <div className={`flex ${flexDirection} justify-center items-center`}>
      {children}
    </div>
  );
};
