type name_choice = 'first' | 'last';
interface Props {
  name: name_choice;
  age: number;
}

const Child = ({ name, age }: Props) => {
  return <div>Child: {name}</div>;
};

export default Child;
