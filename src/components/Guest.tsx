import { useParams } from "react-router";

export const Guest = () => {
  const params = useParams<{ id: string }>();
  console.log(params.id);

  return (
    <>
      <div>Hola {params.id}</div>
    </>
  );
};
