import React from "react";
import { connect } from "react-redux";
import { setVisibilityFilter } from "action";
import { Button } from "rsuite";
import "./button.scss";

type Props = {
  filter: any;
  currentFilter: string;
  children: any;
  dispatch: any;
};

const ButtonFilter = ({ filter, children, dispatch, currentFilter }: Props) => {
  const changeView = () => {
    dispatch(setVisibilityFilter(filter));
  };

  return (
    <div>
      {filter === currentFilter && (
        <Button
          className="button-filter"
          size="sm"
          color="green"
          onClick={changeView}
          disabled
        >
          {" "}
          {children}{" "}
        </Button>
      )}
      {filter !== currentFilter && (
        <Button
          className="button-filter"
          size="sm"
          color="green"
          onClick={changeView}
        >
          {children}
        </Button>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  currentFilter: state.Filter
});

export default connect(mapStateToProps)(ButtonFilter);
