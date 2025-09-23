import { useParams } from "react-router";

export const Guest = () => {
  const params = useParams<{ id: string }>();

  return (
    <>
      <div>Hola {params.id}</div>
    </>
  );
};
