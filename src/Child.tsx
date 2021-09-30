type NameChoice = 'first' | 'last';
interface Props {
  name: NameChoice;
  age: number;
  email: string;
}

const Child = ({ name, age, email }: Props): JSX.Element => {
  return <div>Child: {name + ' - ' + age + ' - ' + email}</div>;
};

export default Child;
