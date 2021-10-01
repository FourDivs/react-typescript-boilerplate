type NameChoice = 'first' | 'last';
interface Props {
  name: NameChoice;
  age: number;
  email: string;
}

const Child = ({ name, age, email }: Props) => {
  return <div>Child: {name + ' - ' + age + ' - ' + email}</div>;
};

export default Child;
