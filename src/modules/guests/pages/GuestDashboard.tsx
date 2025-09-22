import { ListGuest } from "./ListGuest";
import { OptionsGuest } from "./OptionsGuest";
import { VisualitationGuest } from "./VisualitationGuest";

export const GuestDashboard = () => {
  return (
    <>
      <header className="row pt-4">
        <OptionsGuest />
      </header>
      <section className="row pt-3">
        <VisualitationGuest />
        <ListGuest />
      </section>
    </>
  );
};
