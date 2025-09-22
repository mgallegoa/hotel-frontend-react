export const OptionsGuest = () => {
  return (
    <>
      <article className="col-12">
        <div
          className="btn-toolbar justify-content-between"
          role="toolbar"
          aria-label="Buttons toolbar, create and search guest"
        >
          <div
            className="btn-group"
            role="group"
            aria-label="Edit Guest buttons group"
          >
            <button type="button" className="btn btn-primary">
              Create Guest
            </button>
          </div>
          <div className="input-group">
            <div className="input-group-text" id="SearchTextId">
              @
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name of guest"
              aria-label="Search input for guest"
              aria-describedby="SearchTextId"
            />
          </div>
        </div>
      </article>
    </>
  );
};
