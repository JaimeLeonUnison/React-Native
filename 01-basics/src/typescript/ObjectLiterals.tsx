interface Person {
    age: number;
    firstName: string;
    lastName: string;
    address: Address; 
}
    interface Address {
    country: string;
    houseNo: string;
    street?: string;
}

export const ObjectLiterals = () => {
  const person: Person = {
    age: 26,
    firstName: "Jaime",
    lastName: "Leon",
    address: {
      country: "México",
      houseNo: "47",
      street: 'Fireze',
    },
  };

  return (
    <>
      <div>ObjectLiterals</div>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
};
