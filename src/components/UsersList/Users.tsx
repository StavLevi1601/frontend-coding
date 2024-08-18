interface User {
  name: string;
  age: number;
  hobbies: string[];
}

export default function Users() {
  const users: User[] = [
    { name: "Gabi", age: 62, hobbies: ["Sleep", "Travel"] },
    { name: "Yaffit", age: 56, hobbies: ["Sleep", "Travel"] },
    { name: "Or", age: 32, hobbies: ["Footbol", "Travel"] },
    { name: "Stav", age: 30, hobbies: ["Dance", "Read", "Gym"] },
    { name: "Bar", age: 29, hobbies: ["Sleep", "TV"] },
  ];

  return (
    <>
      {users.map((user) => (
        <>
          <div>
            {user.name} {user.age}
            {user.hobbies.map((hobbie) => (
              <div>{hobbie}</div>
            ))}
          </div>
        </>
      ))}
    </>
  );
}
