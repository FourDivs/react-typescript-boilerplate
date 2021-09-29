type name_choice = 'first' | 'last';
interface Props {
  name: name_choice;
  age: number;
  email: string;
}

const Child = ({ name, age, email }: Props) => {
  return <div>Child: {name + ' - ' + age + ' - ' + email}</div>;
};

export default Child;
